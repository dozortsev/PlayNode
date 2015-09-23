Array.prototype.rm = function (el) {
    var index = this.indexOf(el);
    this.splice(index, 1);

    return this.length;
};