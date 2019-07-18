/*
 * Nocturnal
 *
 * Copyright (c) 2019 Payson Wallach
 *
 * Released under the terms of the GNU General Public License, version 3
 * (https://gnu.org/licenses/gpl.html)
 */

const Gio = imports.gi.Gio;

const { getSettings } = nocturnal.imports.convenience;
const { joinPaths } = nocturnal.imports.utils;

const GTK_SCHEMA_KEY = "org.gnome.desktop.interface";
const SHELL_THEME_EXTENSION_NAME = "user-theme@gnome-shell-extensions.gcampax.github.com";
const SHELL_THEME_EXTENSION_SCHEMA = "org.gnome.shell.extensions.user-theme";
const GTK_THEME_KEY = "gtk-theme";
const SHELL_THEME_KEY = "name";

const ThemeManager = class ThemeManager {
  constructor() {
    const shellThemeSchemaDir = joinPaths([
      nocturnal.dir.get_parent().get_path(),
      SHELL_THEME_EXTENSION_NAME,
      "schemas"
    ]);
    const schemaSource = new Gio.SettingsSchemaSource(
      shellThemeSchemaDir,
      Gio.SettingsSchemaSource.get_default(),
      false
    );
    const schemaObject = schemaSource.lookup(
      SHELL_THEME_EXTENSION_SCHEMA,
      true
    );

    this.settings = getSettings();
    this.gtkSettings = new Gio.Settings({
      schema: GTK_SCHEMA_KEY
    });
    this.shellSettings = new Gio.Settings({
      settings_schema: schemaObject
    });
  }

  toggleTheme() {
    this.lightTheme = this.settings.get_string("light-theme");
    this.darkTheme = this.settings.get_string("dark-theme");

    const gtk_theme = this.gtkSettings.get_string(GTK_THEME_KEY) === this.lightTheme ?
      this.darkTheme :
      this.lightTheme;
    const shell_theme = this.shellSettings.get_string(SHELL_THEME_KEY) === this.lightTheme ?
      this.darkTheme :
      this.lightTheme;

    this.gtkSettings.set_string(GTK_THEME_KEY, gtk_theme);
    this.shellSettings.set_string(SHELL_THEME_KEY, shell_theme);
  }
}
