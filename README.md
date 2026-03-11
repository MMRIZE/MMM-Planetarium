# MMM-Planetarium

MagicMirror Module to display constellations, stars, galaxy, ... using VirtualSky Library

## Screenshot

![screenshot](screenshot.png)

## Concept

With the great library [Virtualsky](https://github.com/slowe/VirtualSky) You can show planetarium in your MagicMirror.

## Installation

To install the module, go to your MagicMirror's `modules` directory and clone the repository:

```sh
cd ~/MagicMirror/modules
git clone https://github.com/MMRIZE/MMM-Planetarium
```

## Update

To update the module to the latest version, navigate to the module's directory and pull the latest changes:

```sh
cd ~/MagicMirror/modules/MMM-Planetarium
git pull
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
    },
```

All options of **VirtualSky** would be available (even keyboard shortcuts..)

- See. https://slowe.github.io/VirtualSky/#options There are also some examples in that page.

### Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## Author

- Seongnoh Yi (eouia0819@gmail.com)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Y8Y56IFLK)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
