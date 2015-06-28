function Club(name, owner, dateSince) {
    this.name = name;
    this.owner = owner;
    this.dataSince = dateSince;
}

// override
Club.prototype.toString = function () {
    return this.name + ' ' + this.dataSince + ', owner: ' + this.owner;
};


function Player(club, name, age, number) {
    this.club = club;
    this.name = name;
    this.age = age;
    this.number = number;

    // override; toString() is recreated every time you create a new instance of Club
    this.toString = function () {
        return this.name + ' (' + this.age + ') in ' + this.club.name;
    }
}

var inter = new Club('Internazionale FC', 'Luis Hemenez', 1989);
console.log(inter.toString());

var forward = new Player(inter, 'Mauro Icardi', 21, 9);
console.log(forward.toString());

var goalkeeper = new Player(inter, 'Handanovic', 26, 1);
console.log(goalkeeper.toString());

