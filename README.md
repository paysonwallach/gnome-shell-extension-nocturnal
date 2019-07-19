# Nocturnal

Toggle between day and night with ease.

## Installation

### From Zip

1. **Download the [Latest Release][latest-release]**

2. **Extract the extension**

   ```sh
   mkdir -p ~/.local/share/gnome-shell/extensions
   rm -rf ~/.local/share/gnome-shell/extensions/nocturnal@paysonwallach.com
   unzip -o nocturnal@paysonwallach.com.zip -d ~/.local/share/gnome-shell/extensions/nocturnal@paysonwallach.com
   ```

3. **Restart Gnome Shell**

   * **X11/Xorg:** <kbd>Alt</kbd> + <kbd>F2</kbd> + `restart` or `r`
   * **Wayland:** Log out and log in.

### From Git

You can build or install from git with [Meson](http://mesonbuild.com/):

```sh
git clone https://github.com/paysonwallach/nocturnal.git
cd nocturnal/
meson --prefix=$HOME/.local build
ninja -C build install-zip
```

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss the matter.

