/*
 * Nocturnal
 *
 * Copyright (c) 2019 Payson Wallach
 *
 * Released under the terms of the GNU General Public License, version 3
 * (https://gnu.org/licenses/gpl.html)
 */

window.nocturnal = imports.misc.extensionUtils.getCurrentExtension();

const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;

const { StatusMenuItem } = nocturnal.imports.statusMenuItem;
const { ThemeManager } = nocturnal.imports.themeManager;
const { registerResources } = nocturnal.imports.convenience;

let themeManager, statusMenuItem;

function init() {
  registerResources();
}

function enable() {
  themeManager = new ThemeManager();
  statusMenuItem = new StatusMenuItem(themeManager);
  statusMenuItem.enable();
}

function disable() {
  statusMenuItem.disable();
  statusMenuItem = null;
  themeManager = null;
}
