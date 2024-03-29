project('nocturnal', 'c', version: '1', meson_version: '>= 0.45.0')

gnome = import('gnome')

prefix = get_option('prefix')
data_dir = join_paths(prefix, get_option('datadir'))
locale_dir = join_paths(prefix, get_option('localedir'))

app_id = 'org.gnome.shell.extensions.nocturnal'
ext_uuid = 'nocturnal@paysonwallach.com'
ext_data_dir = join_paths(data_dir, 'gnome-shell', 'extensions', ext_uuid)

# GSettings schema dir
if get_option('gsettings_schemadir') != ''
  gschema_dir = get_option('gsettings_schemadir')
else
  gschema_dir = join_paths(data_dir, 'glib-2.0', 'schemas')
endif

# Configuration
ext_config = configuration_data()
ext_config.set('VERSION', meson.project_version())
ext_config.set('APP_ID', app_id)
ext_config.set('UUID', ext_uuid)
ext_config.set('LOCALE_DIR', locale_dir)
ext_config.set('EXT_DATA_DIR', ext_data_dir)
ext_config.set('GSCHEMA_DIR', gschema_dir)

# ZIP targets for user extension builds
run_target(
    'make-zip',
    command: [
        find_program('env'),
        'UUID=' + ext_uuid,
        'DATADIR=' + data_dir,
        'LOCALEDIR=' + locale_dir,
        'GSCHEMADIR=' + gschema_dir,
        'meson/package.sh'
    ]
)
run_target(
    'install-zip',
    command: [
        find_program('env'),
        'UUID=' + ext_uuid,
        'DATADIR=' + data_dir,
        'LOCALEDIR=' + locale_dir,
        'GSCHEMADIR=' + gschema_dir,
        'INSTALL=true',
        'meson/package.sh'
    ]
)

# Extension Source
install_subdir(
  'src',
  install_dir: ext_data_dir,
  strip_directory: true
)

# metadata.json
configure_file(
  input: 'data/metadata.json.in',
  output: 'metadata.json',
  configuration: ext_config,
  install_dir: ext_data_dir
)

# GSettings
install_data(
  'data/' + app_id + '.gschema.xml',
  install_dir: gschema_dir
)

# GResources
gnome.compile_resources(
  app_id,
  'data/' + app_id + '.gresource.xml',
  source_dir: 'data',
  gresource_bundle: true,
  install: true,
  install_dir: ext_data_dir
)

# Post-Install Script for distributions without the hooks
if get_option('post_install')
    meson.add_install_script(
      find_program('env').path(),
      'GSCHEMADIR=' + gschema_dir,
      join_paths(meson.source_root(), 'meson/post-install.sh')
    )
endif
