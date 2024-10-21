#!/usr/bin/env node

import dotenv from 'dotenv';
dotenv.config();

/**
 * Module dependencies.
 */

import app from '../app'
import debug from 'debug';
debug('backend:server');
import {createServer} from 'http';

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(Number(process.env.PORT) || 3000);
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: number) {
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

function onError(error: { syscall: string; code: any; }) {
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
    : 'port ' + addr?.port;
  debug('[server]: Listening on ' + bind);
}
