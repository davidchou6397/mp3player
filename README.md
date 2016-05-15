# Simple PhoneGap MP3 Player

**WARNING! Works on this project are abandoned. Do not clone it, unless you're ready to finish it yourself. At this point it maybe pretty unusable at all!** For more information -- read [this blog post](http://onezeronull.com/2014/12/02/phonegap-audiobook-player-an-abandoned-project/).

This is a simple PhoneGap MP3 player; my own alternative to [Simple Music Player Free](https://play.google.com/store/apps/details?id=com.impulseapps.simplemusicfree) application. It is targeted toward audiobook lovers and allows to listen to many audiobooks in the same time. It keeps track of file and position in file, where you left in **all** folders, not just in current one. If I'm not mistaken, there isn't any other MP3 player available to Android market, that has this cool feature.

## Icons and images

Icons and images used in this project are taken from:

- icons from [Icon Archive](http://www.iconarchive.com/),
- project's logo (icon) by: [FastIcon.com](http://www.fasticon.com).

## Code sources

This project uses following sources, articles and ideas:

- [Play an MP3 Audio Stream in PhoneGap](http://www.joeldare.com/wiki/play_an_mp3_audio_stream_in_phonegap),
- [Audio Player made with PhoneGap and jQuery Mobile](http://www.digitalnoiz.com/mobile-development/audio-player-made-with-phonegap-and-jquery-mobile/),
- [`Media` object's API description in PhoneGap 2.9.0](http://docs.phonegap.com/en/1.0.0/phonegap_media_media.md.html)
- [Two-Minute Tutorial 1 Part 1: Use PhoneGap Media API & jQuery Mobile UI Framework](http://www.mobiledevelopersolutions.com/home/start/twominutetutorials/tmt1part1).

## Tests

Tested on four different devices and Android versions:

- Samsung Galaxy Nexus with Android 4.3 (previously Android 4.2.2),
- LG GT540 with Android 2.3.3 and CyanogenMod, 
- GSmart Rola G1317D with Android 2.2.2,
- Sony Xperia E with Android 4.1.1.

All seems to be fine, after implementing [this small fix](https://github.com/phonegap/build/issues/178#issuecomment-24287410).

Tested **only** as compiled through [PhoneGap Build](http://build.phonegap.com). Never compiled locally or tested after such build.
