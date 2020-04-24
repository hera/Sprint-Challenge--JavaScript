// 1. Copy and paste your prototype in here and refactor into class syntax.

/*

function CuboidMaker(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
}

CuboidMaker.prototype.getVolume = function () {
    return this.length * this.width * this.height;
}

CuboidMaker.prototype.getSurfaceArea = function () {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
}

*/

class CuboidMakerTwo {
    constructor (length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    getVolume () {
        return this.length * this.width * this.height;
    }

    getSurfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

let cuboidTwo = new CuboidMakerTwo(4, 5, 5);

console.log(cuboidTwo.getVolume()); // 100
console.log(cuboidTwo.getSurfaceArea()); // 130





// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.