Package.describe({
  name: 'vpalos:multiparty',
  summary: 'Import of the "node-multiparty" package into Meteor.',
  version: '1.0.0',
  git:  "https://github.com/vpalos/meteor-multiparty.git"
});

Npm.depends({
  "formidable":"1.0.15"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('include-formidable.js', 'server');
  api.export('formidable','server');
});