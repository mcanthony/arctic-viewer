---
layout: docs
title: Quick Start
permalink: /docs/home/
next_section: ImageBased
repo_path: /docs/guides/quickStart.md
---

# Introduction

The Arctic Viewer application let you create a local web server which will then
serve a dedicated web application and your data to any browser that can connect
to it.

The Arctic Viewer is meant to evolve and support more and more data type to
explore but currently, it can handle:

- Image based dataset
- 3D probed dataset with scalar field encoded which allow the usage of user defined LookupTable.
- Image based composite dataset with the JSON structure providing the pixel ordering for each layer.

# Installation

ArcticViewer is simple to install as long as you have a NodeJS environment working.
To install it globally on your system, you just need to run the following command
line.

```sh
$ npm install -g arctic-viewer
```

# Command line tool

ArcticViewer can be used as a Web server to serve the application and your data.
Or ArcticViewer can also be used to download remote dataset. The following sections
explain how to use it and what are the different options.

## Serve a local dataset

For that configuration, ArcticViewer will act as a local web server and will need
to know which directory you would like to serve. Then optional configuration can
be provided such as which network port should be used and if you want the application
to start your default web browser on the application page.

The following set of command lines illustrate various usage:

```sh
## This will start the server on port 3000 and will open your browser automatically
$ ArcticViewer -d ./path/to/your/dataset/directory

## This will start the server on port 3000 and wait for connections on http://localhost:3000
$ ArcticViewer -d ./path/to/your/dataset/directory -s

## This will start the server on port 1234 so you can connect to http://localhost:1234
$ ArcticViewer -d ./path/to/your/dataset/directory -s -p 1234
```

## Serve a remote dataset

Serving a remote dataset is similar than serving a local dataset except that
you need to provide the full http URL like follow.

```sh
$ ArcticViewer -d http://www.kitware.com/in-situ-data/tonic-sample-data/hydra-image-fluid-velocity
```

## Download a set of sample datasets

ArcticViewer let you also download some data so you can actually play with it.
For that you will need to run the application in the directory you want to
download your data into.

Here is an example of command lines:

```sh
$ mkdir ArcticData && cd $_
$ ArcticViewer -D
```

## Download a remote dataset

This allow the application to act as a regular viewer and download each resource
locally.

Here is an example on how to run it:

```sh
$ mkdir velocity && cd $_
$ ArcticViewer -R http://www.kitware.com/in-situ-data/tonic-sample-data/hydra-image-fluid-velocity
```
