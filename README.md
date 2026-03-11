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

All options of **VirtualSky** are available — see https://slowe.github.io/VirtualSky/#options for the full list with examples.

### Module options

The following options are set by this module (overriding VirtualSky defaults where different):

| Option | Default | Description |
| --- | --- | --- |
| `width` | `"100vw"` | Width of the canvas element |
| `height` | `"100vh"` | Height of the canvas element |
| `projection` | `"stereo"` | Projection type: `polar`, `stereo`, `lambert`, `ortho`, `equirectangular`, `mollweide`, `planechart`, `fisheye` |
| `latitude` | `50.0836` | Latitude of the observer |
| `longitude` | `8.4694` | Longitude of the observer |
| `az` | `0` | Azimuthal offset: 0 = North, 90 = East, 180 = South |
| `keyboard` | `false` | Enable/disable keyboard controls |
| `constellations` | `true` | Show constellation lines |
| `constellationlabels` | `true` | Show constellation name labels |
| `constellationwidth` | `1` | Width of constellation lines in pixels |
| `showplanets` | `true` | Show planets |
| `showplanetlabels` | `true` | Show planet name labels |
| `showstarlabels` | `true` | Show labels for the brightest stars |
| `showdate` | `false` | Show the date and time |
| `showposition` | `false` | Show latitude and longitude |
| `showgalaxy` | `true` | Show an outline of the Milky Way |
| `live` | `true` | Update the display in real time |
| `meridian` | `true` | Show the meridian line |
| `gridlines_gal` | `true` | Show Galactic grid lines |
| `ground` | `true` | Show the local ground |
| `transparent` | `true` | Transparent background |
| `credit` | `true` | Show the VirtualSky credit link |
| `panoffset` | `-0.1` | Azimuth step per pan tick (negative = westward) |
| `paninterval` | `500` | Pan tick interval in milliseconds; `0` disables panning |

### Dimming text labels

VirtualSky renders all labels (star names, planet labels, constellation names, cardinal points) directly onto a canvas element. If those labels are too bright when the planetarium sits behind other modules, use an `rgba()` value with reduced alpha for the `color` option:

```js
color: 'rgba(255,255,255,0.3)', // 0.0 = invisible, 1.0 = full brightness
```

Note: hex values and named colors (e.g. `#ffffff`, `white`) do not support opacity — `rgba()` is required.

### Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## Author

- Seongnoh Yi (eouia0819@gmail.com)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Y8Y56IFLK)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
