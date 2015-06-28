function Club(name, players) {
    this.name = name;
    var players = players;

    this.getPlayers = function () {
        return players;
    };
}

Club.prototype.buyPlayer = function (club, player) {
    var index = club.getPlayers().indexOf(player);
    club.getPlayers().splice(index, 1);

    this.getPlayers().push(player);
};

Club.prototype.toString = function () {
    return 'Club \'' + this.name + '\'. Players: ' + this.getPlayers().join(', ');
};

var monaco = new Club('AS Monaco', ['Berbatov', 'Joao Moatinho']);
console.log(monaco.toString());

var psg = new Club('PSG', ['Ibra', 'Cavani', 'Cabay']);
console.log(psg.toString());

monaco.buyPlayer(psg, 'Cabay');
psg.buyPlayer(monaco, 'Joao Moatinho');
console.log(monaco.toString());
console.log(psg.toString());

//Club 'AS Monaco'. Players: Berbatov, Cabay
//Club 'PSG'. Players: Ibra, Cavani, Joao Moatinho