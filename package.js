Package.describe({
  name: 'flowkey:resize-detector',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Safly detect the resizing of an element even with css3 transitions - event based',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/flowkey/resize-sensor.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('ResizeSensor.js');
  api.export('ResizeSensor');
});