#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
/**
 * Module dependencies.
 */
const app_1 = __importDefault(require("../app"));
const debug_1 = __importDefault(require("debug"));
(0, debug_1.default)('backend:server');
const http_1 = require("http");
/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(Number(process.env.PORT) || 3000);
app_1.default.set('port', port);
/**
 * Create HTTP server.
 */
const server = (0, http_1.createServer)(app_1.default);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    const portValid = val;
    if (isNaN(portValid)) {
        // named pipe
        return val;
    }
    if (portValid >= 0) {
        // port number
        return portValid;
    }
    return false;
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    const addr = server.address();
    let bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + (addr === null || addr === void 0 ? void 0 : addr.port);
    (0, debug_1.default)('[server]: Listening on ' + bind);
}
