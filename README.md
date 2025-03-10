## ArcticViewer ##

### Goal ###

Provide a Data Viewer (ArcticView) based on Web technologies and relying on the
user browser to navigate and explore data generated InSitu or in batch mode.

## Installation

```
$ npm install -g arctic-viewer
```

After installing the package you will get one executable **ArcticViewer** with
the following set of options.

```
$ ArcticViewer

  Usage: ArcticViewer [options]

  Options:

    -h, --help                            output usage information
    -V, --version                         output the version number
    -p, --port [3000]                     Start web server with given port
    -d, --data [directory/http]           Data directory to serve. Should contain a info.json file.
    -s, --server-only                     Do not open the web browser
    -o, --output-pattern [path/pattern]   Provide a destination path for the exported images. i.e.: /opt/data/{time}/{pipeline}/{phi}_{theta}.jpg

    --download-sample-data                Download some try-out data [~100MB] inside the current directory.
    --download [http://remote-host/data]  Url to the source of your data that you want to download inside the current directory.

    -M, --magic-lens                      Enable MagicLens inside client configuration
    -S, --single-view                     Enable SingleView inside client configuration
    -R, --recording                       Enable Recording inside client configuration
    -D, --development                     Enable Development inside client configuration

```

In order to try it out, you should download some sample datasets
(unless you already have some ;-) and run the data viewer on them.

Here is an example on how to download some sample data

```
$ mkdir tonic-data && cd $_
$ ArcticViewer --download-sample-data

 | Downloading sample data (~100MB) into directory /Users/seb/tonic-data
 |
 | => Once the data will be downloaded, you will be able to try the ArcticViewer with the following commands:
 |
 |  $ ArcticViewer -d /Users/seb/tonic-data/mpas-probe-flat-earth
 |  $ ArcticViewer -d /Users/seb/tonic-data/hydra-image-fluid-velocity
 |
 | Thank you for trying this out...
```

Then you can load them using the provided feedback or by running the following
command lines:

```
$ ArcticViewer -d ./tonic-data/mpas-probe-flat-earth
```

This will load a MPAS oceanic simulation data that represent a 3D volume of a
flatten version of the earth with Temperature and Salinity information on the water.

From that data you can look at a slice of the data along any axis and move the
slice back and forth using the scroll of your input device.

If you want to zoom or pan, you will have to scroll+[any modifier key] or drag+[any modifier key].

```
$ ArcticViewer -d ./tonic-data/hydra-image-fluid-velocity
```

This will load an Hydra CFD simulation data that represent the fluid velocity
using some volume rendering technique.

## Development

```sh
$ npm install -g semantic-release-cli
$ npm install
$ npm run build
```

## Documentation

See the [documentation](https://kitware.github.io/arctic-viewer) for a
getting started guide, advanced documentation, and API descriptions.

__Note__: The development dependency listed in the package.json file for less
("less": "^1.5") is a peerDependencies of less-loader@0.7.8, which is a dependency of
font-awesome-webpack@0.0.3. peerDependencies were automatically downloaded in
npm@2, but in npm@3 the behavior varies from warnings to errors. The
peerDependency must be handled (installed) as a dependency.

#### Licensing

**arctic-viewer** aka ArcticViewer is licensed under [BSD Clause 3](LICENSE).

#### Getting Involved

Fork our repository and do great things. At [Kitware](http://www.kitware.com),
we've been contributing to open-source software for 15 years and counting, and
want to make **arctic-viewer** useful to as many people as possible.
