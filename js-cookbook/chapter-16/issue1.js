function Developer(name, company, skills) {
    var aName = name;
    var aCompany = company;
    var aSkills = skills;

    this.getName = function () {
        return aName;
    };
    this.getCompany = function () {
        return aCompany;
    };
    this.getSkills = function () {
        return aSkills;
    };
}

Developer.prototype.showYourSelf = function () {
    return 'My name is ' + this.getName() +
        '. I\'m working at ' + this.getCompany() +
        '. I know and had experience with ' + this.getSkills().join(', ');
};

var jsDeveloper = new Developer(
    'Andy Osmany', 'Google', ['JavaScript', 'Python', 'AngularJS', 'NodeJS', 'Gulp', 'and many other...']
);
console.log(jsDeveloper.showYourSelf());