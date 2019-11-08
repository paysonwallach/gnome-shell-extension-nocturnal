<div align="center">
 <h1>Nocturnal</h1>
 <p>Toggle between day and night with ease</p>
 <a href=https://github.com/paysonwallach/nocturnal/release/latest>
   <img src=https://img.shields.io/github/v/release/paysonwallach/nocturnal?style=flat-square>
 </a>
 <a href=https://github.com/paysonwallach/nocturnal/blob/master/LICENSE>
   <img src=https://img.shields.io/github/license/paysonwallach/nocturnal?style=flat-square>
 </a>
 <a href=https://buymeacoffee.com/paysonwallach>
   <img src=https://img.shields.io/badge/donate-Buy%20me%20a%20coffe-yellow?style=flat-square>
 </a>
 <br>
</div>

## Installation

### From Zip

Download the [latest release](https://github.com/paysonwallach/nocturnal/releases/latest), and extract the extension:

```sh
rm -rf ~/.local/share/gnome-shell/extensions/nocturnal@paysonwallach.com
unzip -o nocturnal@paysonwallach.com.zip -d ~/.local/share/gnome-shell/extensions/nocturnal@paysonwallach.com
```

### From source using [`meson`](http://mesonbuild.com/)

Clone this repository or download the [latest release](https://github.com/paysonwallach/nocturnal/releases/latest).

```sh
git clone https://github.com/paysonwallach/nocturnal.git
```

Configure the build directory at the root of the project.

```sh
meson --prefix=$HOME/.local build
```

Install with `ninja`.

```sh
ninja -C build install
```

## Loading the extension

Restart GNOME shell.

- **X11/Xorg:** <kbd>Alt</kbd> + <kbd>F2</kbd> + `restart` or `r`
- **Wayland:** Log out and log back in

Enable the extension with [GNOME Tweaks](https://gitlab.gnome.org/GNOME/gnome-tweaks) or `gnome-extensions`.

```sh
gnome-extensions enable nocturnal@paysonwallach.com
```

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss the matter.

## Code of Conduct

By participating in this project, you agree to abide by the terms of the [Code of Conduct](https://github.com/paysonwallach/nocturnal/blob/master/CODE_OF_CONDUCT.md).

## License

[Nocturnal](https://github.com/paysonwallach/nocturnal) is licensed under the [GNU General Public License v3.0](https://github.com/paysonwallach/nocturnal/blob/master/LICENSE).
