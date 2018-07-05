[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/iota-pico/api-examples-browser/master/LICENSE) [![Build Status](https://travis-ci.org/iota-pico/api-examples-browser.svg?branch=master)](https://travis-ci.org/iota-pico/api-examples-browser) 

# IOTA Pico Framework Examples for Browser in TypeScript

Example code for using IOTA Pico Framework with Browser written in TypeScript.

# Installation

```shell
npm install @iota-pico/api-examples-browser
```
# Running

You can run the examples by serving the web pages locally by running:

```js
npm run serve
```

The will automatically start a web server and launch the index page containing links to all the examples.

# Configuration

If you want to modify the node that is used to service the examples please modify the config file config/networkConfig.json.

To connect to a node use:

```json
{
    "protocol": "https",
    "host": "nodes.thetangle.org",
    "port": 443
}
```

# Library

The IOTA Pico Framework is a multi-layered set of object oriented JavaScript libraries for use with the IOTA tangle.

If you don't want to use the layered versions of the libraries consider using the  ready bundled versions:
* [@iota-pico/lib-browser](https://github.com/iota-pico/lib-browser)
* [@iota-pico/lib-nodejs](https://github.com/iota-pico/lib-nodejs)

Each layer is fully abstracted allowing you to replace components with your own implementations very easily.

The layered libraries are written in TypeScript so are all strongly typed. The modules are generated as ES6 so you may need to transpile them when including them for use in older JavaScript eco-systems. The code will run without transpilation in all modern browsers and when used by NodeJs.

# Contributing

Contributions are always welcome to the project. Feel free to raise issues, create pull requests or just make suggestions.

# Authors

Come and find us on the IOTA [Discord](https://discordapp.com/invite/fNGZXvh) development channels

* **Martyn Janes** - *obany* - ([https://github.com/obany](https://github.com/obany))

# Donations

IOTA donations are always welcome :smile:

![QR Code for Trinity](https://raw.githubusercontent.com/iota-pico/api-examples-browser/master/donation.png)

```shell
QWJXX99QDEYWUWXEGA9QXSNOWOKHMFKCMSZTXDFLRZAFQRPQTHQDXSZWQQTAHNDNRYHMIKJYWQLKTFHBWSAOJDHAMB
```

# License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/iota-pico/api-examples-browser/blob/master/LICENSE) file for details.
