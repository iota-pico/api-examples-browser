[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/iotaeco/iota-pico-examples-browser-ts/master/LICENSE) [![Build Status](https://travis-ci.org/iotaeco/iota-pico-examples-browser-ts.svg?branch=master)](https://travis-ci.org/iotaeco/iota-pico-examples-browser-ts) [![NSP Status](https://nodesecurity.io/orgs/iotaeco/projects/6e6a4ea2-6412-4446-be9b-0178a78fb70e/badge)](https://nodesecurity.io/orgs/iotaeco/projects/6e6a4ea2-6412-4446-be9b-0178a78fb70e)

# IOTA Pico Framework Examples for Browser in TypeScript

## Introduction

The IOTA Pico Framework is intended to be a multi-layered set of object oriented JavaScript libraries.

Each layer is fully abstracted allowing you to replace components with your own implementations very easily.

The libraries are written in TypeScript so are all strongly typed. The modules are generated as ES6 so you may need to transpile them when including them for use in older JavaScript eco-systems. The code will run without transpilation in all modern browsers and when used by NodeJs.

## Installation

```shell
npm install @iota-pico/examples-browser-ts
```

## Examples

Example code for using IOTA Pico Framework with Browser written in TypeScript.

## Running

You can run the examples by serving the web pages locally by running:

```js
npm run serve
```

The will automatically start a web server and launch the index page containing links to all the examples.

## Configuration

If you want to modify the node that is used to service the examples please modify the config file config/networkConfig.json.

To connect to a node use:

```json
{
    "protocol": "https",
    "host": "nodes.thetangle.org",
    "port": 443
}
```

To connect to the sandbox use the following:

```json
{
    "protocol": "http",
    "host": "sandbox.iotatoken.com",
    "path": "/api/v1/commands",
    "port": 14265,
    "additionalHeaders": {
        "Authorization": "YOUR_SANDBOX_TOKEN"
    }
}
```