/*
 * Nocturnal
 *
 * Copyright (c) 2019 Payson Wallach
 *
 * Released under the terms of the GNU General Public License, version 3
 * (https://gnu.org/licenses/gpl.html)
 */

const St = imports.gi.St;

const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;

const StatusMenuItem = class StatusMenuItem {
  constructor(themeManager) {
    this.themeManager = themeManager;
  }

  enable() {
    this.button = new PanelMenu.Button(0);

    const icon = new St.Icon({
      icon_name: 'weather-clear-night-symbolic',
      style_class: 'system-status-icon'
    });

    this.button.actor.add_actor(icon);
    this.button.actor.connect('button-press-event', () => this.themeManager.toggleTheme());
    Main.panel.addToStatusArea('nocturnal-status-item', this.button);
  }

  disable() {
    this.button.destroy();
  }
}
