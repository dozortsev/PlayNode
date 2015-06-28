function Developer(name, skills, company) {
    var aName = name;
    var aSkills = skills;
    var aCompany = company;

    this.getName = function () {
        return aName;
    };
    this.getSkills = function () {
        return aSkills;
    };
    this.getCompany = function () {
        return aCompany;
    };
}

Developer.prototype.showYourSelf = function () {
    return 'My name is ' + this.getName() +
        '. I\'m working at ' + this.getCompany() +
        '. I know and had experience with ' + this.getSkills().join(', ');
};

var jsDeveloper = new Developer(
    'Andy Osmany', ['JavaScript', 'Python', 'AngularJS', 'NodeJS', 'Gulp', 'and many other...'], 'Google'
);
console.log(jsDeveloper.showYourSelf());