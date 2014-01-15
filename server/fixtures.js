if (Players.find().count() === 0) {
    Players.insert({
        playerName: 'William Felton "Bill" Russell',
        position: 'Center',
        shoots: 'Left',
        height: '6-10',
        weight: '215 lbs',
        hometown: 'Oakland, California'
    });
    Players.insert({
        playerName: 'Wilton Norman Chamberlain',
        position: ['Power Forward',
                    'Center'],
        shoots: 'Right',
        height: '7-1',
        weight: '275 lbs',
        hometown: 'Philadelphia, Pennsylvania'
    });
    Players.insert({
        playerName: 'Moses Eugene Malone',
        position: 'Center',
        shoots: 'Right',
        height: '6-10',
        weight: '215 lbs',
        hometown: 'Petersburg, Virginia'
    });
    Players.insert({
        playerName: 'Julius Winfield Erving II',
        position: 'Small Forward',
        shoots: 'Right',
        height: '6-6',
        weight: '200 lbs',
        hometown: 'Roosevelt, New York'
    });
    Players.insert({
        playerName: 'Larry Joe Bird',
        position: ['Small Forward', 'Power Forward'],
        shoots: 'Left',
        height: '6-9',
        weight: '220 lbs',
        hometown: 'West Baden, Indiana'
    });
    Players.insert({
        playerName: 'Michael Jeffrey Jordan',
        position: ['Shooting Guard', 'Small Forward'],
        shoots: 'Right',
        height: '6-6',
        weight: '195 lbs',
        hometown: 'Brooklyn, New York'
    });
}