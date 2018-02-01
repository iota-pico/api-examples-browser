"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const networkEndPoint_1 = require("@iota-pico/core/dist/network/networkEndPoint");
const networkClient_1 = require("@iota-pico/pal-browser/dist/network/networkClient");
const networkConfig_json_1 = __importDefault(require("../config/networkConfig.json"));
/**
 * Example network configuration.
 */
function getEndPoint() {
    return new networkEndPoint_1.NetworkEndPoint(networkConfig_json_1.default.protocol, networkConfig_json_1.default.host, networkConfig_json_1.default.path, networkConfig_json_1.default.port);
}
exports.getEndPoint = getEndPoint;
function getAdditionalHeaders() {
    return networkConfig_json_1.default.additionalHeaders;
}
exports.getAdditionalHeaders = getAdditionalHeaders;
function getNetworkClient(networkEndPoint) {
    return new networkClient_1.NetworkClient(networkEndPoint);
}
exports.getNetworkClient = getNetworkClient;
