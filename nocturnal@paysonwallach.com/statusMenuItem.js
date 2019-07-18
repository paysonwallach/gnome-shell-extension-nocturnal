/*
 * Nocturnal
 *
 * Copyright (c) 2019 Payson Wallach
 *
 * Released under the terms of the GNU General Public License, version 3
 * (https://gnu.org/licenses/gpl.html)
 */

const Atk = imports.gi.Atk;
const Gio = imports.gi.Gio;
const St = imports.gi.St;

const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;

const { joinPaths } = nocturnal.imports.utils;

const StatusMenuItem = class StatusMenuItem {
  constructor(themeManager) {
    this.themeManager = themeManager;
  }

  enable() {
    this.button = new PanelMenu.Button(0,
                                       nocturnal.metadata["name"],
                                       true
                                       );
    this.button.accessible_role = Atk.Role.TOGGLE_BUTTON;

    const gIcon = Gio.icon_new_for_string(joinPaths([
        nocturnal.dir.get_child("icons").get_path(),
        "nocturnal-symbolic.svg"
    ]));
    const icon = new St.Icon({
      gicon: gIcon,
      style_class: "system-status-icon"
    });

    this.button.add_actor(icon);
    this.button.add_style_class_name("panel-status-button");
    this.button.connect("button-press-event", () => this.themeManager.toggleTheme());
    Main.panel.addToStatusArea("nocturnal-status-item", this.button);
  }

  disable() {
    this.button.destroy();
  }
}
