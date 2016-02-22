// Define a collection to hold our gigs
Gigs = new Mongo.Collection("gigs");

if (Meteor.isServer) {
    
    Meteor.startup(function () {
        var phantomjs = Meteor.npmRequire('phantomjs');
        var spawn = Meteor.npmRequire('child_process').spawn;
        
        Meteor.methods({
            runTask: function (options) {
                command = spawn(phantomjs.path, ['assets/app/phantomDriver.js']);
                command.stdout.on('data', function (data) {
                    console.log('stdout: ' + data);
                });
                command.stderr.on('data', function (data) {
                    console.log('stderr: ' + data);
                });
                command.on('exit', function (code) {
                    console.log('child process exited with code ' + code);
                });
            }
        });
    });

    Meteor.publish("gigs", function() {
        return Gigs.find();
    })
}

Meteor.methods({
    addGig: function(gig) {
        // If gigRef already exists error
        Gigs.insert(gig)
    }
})