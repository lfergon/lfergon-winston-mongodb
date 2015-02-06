meteor-winston-mongodb
======================

1 liner to expose Winston + MongoDB transport, packaged for Meteor

Use:
```Javascript
    //Options object example for mongodb in localhost
    var mongoOptions = {
      handleExceptions: true,
      level: 'warn,
      host: 'localhost',
      db: 'meteor',
      port: 8081,
      collection: 'log',
      errorTimeout: 10000,
      timeout: 50000
    };
    //MongoDB transport
    Winston.add(MongoDB, mongoOptions);
```
