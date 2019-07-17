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
const Gtk = imports.gi.Gtk;

const { getSettings } = nocturnal.imports.convenience;

const PreferencesWidget = class PreferencesWidget {
  constructor() {
      this.settings = getSettings();
      this.widget = new Gtk.Box();
      this.builder = Gtk.Builder.new_from_file(nocturnal.dir.get_path() + "/ui/settings.glade");
      this.builder.connect_signals_full((builder, object, signal, handler) => {
        object.connect(signal, this[handler].bind(this));
      });

      const settingsBox = this.builder.get_object('theme-settings');

      this.lightThemeEntry = this.builder.get_object('light-theme-entry');
      this.darkThemeEntry = this.builder.get_object('dark-theme-entry');

      this.widget.pack_start(settingsBox, true, true, 0);
      const lightTheme = this.settings.get_string('light-theme');
      this.lightThemeEntry.set_text(lightTheme);

      const darkTheme = this.settings.get_string('dark-theme');
      this.darkThemeEntry.set_text(darkTheme);
  }

  onSave() {
    const lightTheme = this.lightThemeEntry.get_text();
    this.settings.set_string('light-theme', lightTheme.trim());

    const darkTheme = this.darkThemeEntry.get_text();
    this.settings.set_string('dark-theme', darkTheme.trim());

    this.onClose();
  }

  onClose() {
    this.widget.get_toplevel().destroy();
  }
}

function init() { }

function buildPrefsWidget() {
  const preferences = new PreferencesWidget();

  preferences.widget.show_all();

  return preferences.widget;
}
