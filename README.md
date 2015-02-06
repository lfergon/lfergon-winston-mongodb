meteor-winston-mongodb
======================

1 liner to expose Winston + MongoDB transport, packaged for Meteor

Install: 
```Javascript
    meteor add lfergon:winston-mongodb
```

Use:
```Javascript
    //Options object example for mongodb in localhost
    var mongoOptions = {
      handleExceptions: true,
      level: 'warn',
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

TODO

You can access Meteor provided build machines, pre-configured to support older versions of MacOS and Linux, by running:
  meteor admin get-machine os.osx.x86_64
  meteor admin get-machine os.linux.x86_64
  meteor admin get-machine os.linux.x86_32

On each machine, run:

  meteor publish-for-arch lfergon:winston-mongodb@0.0.2

For more information on binary ABIs and consistent builds, see:
  https://github.com/meteor/meteor/wiki/Build-Machines
