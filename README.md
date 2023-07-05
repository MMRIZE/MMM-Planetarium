# MMM-Planetarium
MagicMirror Module to display constellations, stars, galaxy, ... using VirtualSky Library

## Screenshot
![screenshot](https://raw.githubusercontent.com/MMRIZE/public_ext_storage/main/MMM-Planetarium/mmm_planetarium.png)

## Concept
With the great library [Virtualsky](https://github.com/slowe/VirtualSky) You can show planetarium in your MagicMirror.

## Installation
```sh
cd <YOUR_MAGICMIRROR_DIR>/modules
git clone https://github.com/MMRIZE/MMM-Planetarium
```

## Configuration
```js
{
  module: 'MMM-Planetarium',
  position: 'fullscreen_below', //Recommended
  config: {
    latitude: 50.0836, //Your position
    longitude: -8.4694,
    az: 0, // Azimuth : 0 means North, 90 means East, 180 means South, ...
    panoffset: -0.1, // panning step by AZ
    paninterval: 250, // milliseconds. 0 => no pan.
  }
}
```
All options of **VirtualSky** would be available (even keyboard shortcuts..)
- See. https://slowe.github.io/VirtualSky/#options There are also some examples in that page.

## Author
- Seongnoh Yi (eouia0819@gmail.com)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Y8Y56IFLK)