Package.describe({
  name: 'lfergon:winston-mongodb',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Exposes winston.transports.MongoDB (https://github.com/indexzero/winston-mongodb)',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/dgrabla/meteor-winston-mongodb',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('lfergon:winston-mongodb.js', 'server');
  if (api.export) {
    api.export('MongoDB', 'server');
  }
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('lfergon:winston-mongodb');
  api.addFiles('lfergon:winston-mongodb-tests.js', 'server');
});

Npm.depends({
  "winston": "0.9.0",
  "winston-mongodb": "0.5.3"
});