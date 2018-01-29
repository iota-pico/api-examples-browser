"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const networkEndPoint_1 = require("@iota-pico/core/dist/network/networkEndPoint");
const browserNetworkClient_1 = require("@iota-pico/pal-browser/dist/network/browserNetworkClient");
const networkConfigJson = require("../config/networkConfig.json");
/**
 * Example network configuration.
 */
function getEndPoint() {
    return new networkEndPoint_1.NetworkEndPoint(networkConfigJson.protocol, networkConfigJson.host, networkConfigJson.path, networkConfigJson.port);
}
exports.getEndPoint = getEndPoint;
function getAdditionalHeaders() {
    return networkConfigJson.additionalHeaders;
}
exports.getAdditionalHeaders = getAdditionalHeaders;
function getNetworkClient(networkEndPoint) {
    return new browserNetworkClient_1.BrowserNetworkClient(networkEndPoint);
}
exports.getNetworkClient = getNetworkClient;
