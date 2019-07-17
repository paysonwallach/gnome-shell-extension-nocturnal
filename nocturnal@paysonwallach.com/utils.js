/*
 * Nocturnal
 *
 * Copyright (c) 2019 Payson Wallach
 *
 * Released under the terms of the GNU General Public License, version 3
 * (https://gnu.org/licenses/gpl.html)
 */

function joinPaths(parts, sep) {
  const separator = sep || '/';
  const replace = new RegExp(separator + '{1,}', 'g');

  return parts.join(separator).replace(replace, separator);
}

const Logger = class Logger {

  constructor(prefix, callingClass) {
    this._prefix = prefix;
    this._callingClass = callingClass;
  }

  _log(level, message) {
    global.log(this._prefix + " [" + level + "] >> " + this._callingClass + " :: " + message);
  }

  debug(message) {
    this._log("DEBUG", message);
  }

  info(message) {
    this._log("INFO", message);
  }

  warn(message) {
    this._log("WARNING", message);
  }

  error(message) {
    this._log("ERROR", message);
  }

};
