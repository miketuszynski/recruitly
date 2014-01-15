Meteor.publish('players', function() {
    return Players.find();
});
Meteor.publish('comments', function() {
    return Comments.find();
});