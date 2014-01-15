Template.playerItem.helpers({
    commentsCount: function() {
        return Comments.find({playerId: this._id}).count();
    }
});