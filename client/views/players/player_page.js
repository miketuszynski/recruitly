Template.playerPage.helpers({
    comments: function() {
        return Comments.find({playerId: this._id});
    }
});