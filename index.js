const SerialPort = require('@serialport/stream');
const parsers = require('serialport/lib/parsers');

/**
 * @type {Parsers}
 */
SerialPort.parsers = parsers

module.exports = SerialPort