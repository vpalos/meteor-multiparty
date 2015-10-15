Package.describe({
  name: 'vpalos:multiparty',
  summary: 'Import of the "node-multiparty" package into Meteor.',
  version: '1.0.0',
  git: "https://github.com/vpalos/meteor-multiparty.git"
});

Npm.depends({
  "multiparty":"4.1.2"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('include-multiparty.js', 'server');
  api.export('multiparty','server');
});