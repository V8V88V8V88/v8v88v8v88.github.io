# How to Make GeoClue + BeaconDB Detect Your Correct Location on Linux

Because MLS has been dead for about 2 years now, location on Linux has been a complete hit or miss. Most people don't even realise why their maps are wrong — they just assume Linux is broken and move on.

I didn't move on. I spent way too long trying to fix it — went through Google Maps API, BeaconDB, editing configs, none of it worked. Until today. Writing this down so you don't have to go through the same thing.

---

## What was happening

I opened GNOME Maps, hit "Show My Location" and it dropped a pin in Tokyo. I'm in Noida. I haven't been to Japan. Ever.

Tried it in the browser — same thing. OpenStreetMap — Tokyo. Apple Maps — Tokyo. At this point I'm convinced my laptop thinks it's on a different continent.

First thing I checked was VPN. Nothing running. Then I checked my IP:

```bash
curl ipinfo.io
```

```json
"city": "Noida",
"country": "IN"
```

IP is fine. So it's not that. Something deeper was broken.

---

## How Linux even knows where you are

Here's the thing most people don't know — Linux has no built-in location service like Android or iPhone. No Google, no Apple, nothing. Instead there's this daemon called **GeoClue** that all your apps talk to when they need your location.

GeoClue figures out where you are by checking a few things — WiFi networks around you, cell towers, your IP address as a last resort. For WiFi, it was using **Mozilla Location Services (MLS)** — basically a giant crowd-sourced database that matched nearby WiFi networks to real-world coordinates.

Was. Past tense.

**Mozilla killed MLS in July 2024.** Just shut it down. And Fedora's GeoClue config still had it set as the default. So every time any app asked for my location, GeoClue was hitting a dead API and getting back garbage — which happened to be Tokyo coordinates.

---

## Diagnosing it properly

There's a test binary that ships with GeoClue:

```bash
/usr/libexec/geoclue-2.0/demos/where-am-i
```

Output:
```
Latitude:    35.657700°
Longitude:   139.708000°
Accuracy:    25000 meters
Description: ipf fallback (from WiFi data)
```

Tokyo. And that "ipf fallback" part is the key — GeoClue had already switched to BeaconDB (the community replacement for MLS) but BeaconDB had zero data for my area. No one had ever submitted WiFi networks from around here. So it fell back to IP lookup which returned Tokyo garbage.

There was also a fun bonus problem — a file at `/etc/geoclue/conf.d/99-beacondb.conf` was silently overriding whatever I put in the main config. So every time I edited `/etc/geoclue/geoclue.conf` and thought I fixed it, that conf.d file was just ignoring my changes. Took me embarrassingly long to find that.

---

## The actual fix

The root problem was that BeaconDB had no WiFi data for my area. The solution was to just... put it there myself.

### 1. Get NeoStumbler on your Android phone

NeoStumbler is an open source app that scans nearby WiFi networks, grabs your GPS position, and submits everything to BeaconDB. Think of it as contributing to a map — except the map is a WiFi location database.

- Download from F-Droid or GitHub
- Go to Settings → Endpoint → pick BeaconDB
- Turn on WiFi and GPS on your phone

### 2. Actually go outside

NeoStumbler needs a real GPS lock. It won't submit anything if it can't confirm where you are via satellite. So go outside, wait for the GPS to lock in, and walk around a bit. Even 10 minutes around your block is enough to get going.

I collected 16 reports and it worked. More is obviously better — aim for 100+ if you want solid coverage — but even a little helps.

### 3. Fix the config

Delete the overriding conf.d file first:

```bash
sudo rm /etc/geoclue/conf.d/99-beacondb.conf
```

Then edit the main config:

```bash
sudo nano /etc/geoclue/geoclue.conf
```

Set `[ip]` to use a fallback that actually works (reallyfreegeoip is rough but at least returns the right country):

```ini
[ip]
enable=true
method=reallyfreegeoip
```

Set `[wifi]` to BeaconDB:

```ini
[wifi]
enable=true
url=https://api.beacondb.net/v1/geolocate
```

Restart GeoClue:

```bash
sudo systemctl restart geoclue
```

### 4. Wait a few minutes

BeaconDB takes 5-10 minutes to process submitted data. Grab a coffee.

### 5. Test

```bash
/usr/libexec/geoclue-2.0/demos/where-am-i
```

```
Latitude:    28.535100°
Longitude:   77.391000°
Accuracy:    50 meters
Description: WiFi
```

50 meters. Noida. No Google. Done.

---

## Quick summary of what was wrong

- MLS is dead since July 2024, GeoClue config still pointed at it
- BeaconDB had no data for my area so it fell back to a broken IP lookup
- `/etc/geoclue/conf.d/99-beacondb.conf` was overriding all my config changes silently

---

## Optional stuff

**If GNOME Maps still shows wrong location on first open** — GeoClue returns a fast (wrong) GeoIP result first, then the accurate WiFi result about a minute later. GNOME Maps grabs the first one and stops. You can disable the IP source entirely so it only ever returns WiFi:

```bash
sudo nano /etc/geoclue/geoclue.conf
```

```ini
[ip]
enable=false
```

Apps will take a few seconds longer to get your location but it'll be correct.

**If you want GeoClue pre-warmed at login**, create `~/.local/bin/geoclue-warmup.sh`:

```bash
#!/bin/bash
/usr/libexec/geoclue-2.0/demos/where-am-i &
sleep 90
kill %1
```

```bash
chmod +x ~/.local/bin/geoclue-warmup.sh
```

And add an autostart entry at `~/.config/autostart/geoclue-warmup.desktop`:

```ini
[Desktop Entry]
Type=Application
Name=Geoclue Warmup
Exec=/bin/bash /home/YOUR_USERNAME/.local/bin/geoclue-warmup.sh
StartupNotify=false
Terminal=false
```

---

If you're dealing with wrong location on Fedora 41, 42, 43 or any other distro — this is almost certainly your problem. MLS being dead broke a lot of things quietly and most people have no idea why their location is wrong.

Go submit some NeoStumbler reports. You'll fix yourself and help the next person too.

---

*Fedora 43 — March 2026*
