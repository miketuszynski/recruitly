if (Players.find().count() === 0) {

    //Add some default users
    var now = new Date().getTime();

    function randomFromInterval(from,to)
    {
        return Math.floor(Math.random()*(to-from+1)+from);
    }

    var userOneId = Meteor.users.insert({
        profile: { name: 'Phil Martelli' }
    });
    var userOne = Meteor.users.findOne(userOneId);

    var userTwoId = Meteor.users.insert({
        profile: { name: 'Mo Cheeks' }
    });
    var userTwo = Meteor.users.findOne(userTwoId);
    var playerIds = [];

    var billR = Players.insert({
        playerName: 'William Felton "Bill" Russell',
        author: userOne.profile.name,
        position: 'Center',
        shoots: 'Left',
        height: '6-10',
        weight: '215 lbs',
        hometown: 'Oakland, California'
    });
    playerIds.push(billR);

    var wiltC = Players.insert({
        playerName: 'Wilton Norman Chamberlain',
        author: userOne.profile.name,
        position: ['Power Forward',
                    'Center'],
        shoots: 'Right',
        height: '7-1',
        weight: '275 lbs',
        hometown: 'Philadelphia, Pennsylvania'
    });
    playerIds.push(wiltC);

    var mosesM = Players.insert({
        playerName: 'Moses Eugene Malone',
        author: userTwo.profile.name,
        position: 'Center',
        shoots: 'Right',
        height: '6-10',
        weight: '215 lbs',
        hometown: 'Petersburg, Virginia'
    });
    playerIds.push(mosesM);

    var drj = Players.insert({
        playerName: 'Julius Winfield Erving II',
        author: userTwo.profile.name,
        position: 'Small Forward',
        shoots: 'Right',
        height: '6-6',
        weight: '200 lbs',
        hometown: 'Roosevelt, New York'
    });
    playerIds.push(drj);

    var larryB = Players.insert({
        playerName: 'Larry Joe Bird',
        author: userTwo.profile.name,
        position: ['Small Forward', 'Power Forward'],
        shoots: 'Left',
        height: '6-9',
        weight: '220 lbs',
        hometown: 'West Baden, Indiana'
    });
    playerIds.push(larryB);

    var mj = Players.insert({
        playerName: 'Michael Jeffrey Jordan',
        author: userOne.profile.name,
        position: ['Shooting Guard', 'Small Forward'],
        shoots: 'Right',
        height: '6-6',
        weight: '195 lbs',
        hometown: 'Brooklyn, New York'
    });
    playerIds.push(mj);



    var bodyComments =
    [
        'One of the greats!',
        'He\'s the best!',
        'Solid performer.',
        'All time best!!',
        'Legen-dary.'
    ];

    //Add some default comments
    for (var i=0; i<=20; i++)
    {
        var j = i % 2;
        Comments.insert({
            playerId: playerIds[randomFromInterval(0,5)],
            userId: j? userOne._id : userTwo._id,
            author: j? userOne.profile.name : userTwo.profile.name,
            submitted: now - randomFromInterval(0,23) * 3600 * 1000,
            body: bodyComments[randomFromInterval(0,4)]
        });
    }


}