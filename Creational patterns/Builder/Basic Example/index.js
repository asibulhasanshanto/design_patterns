//this is a type of product
var SmallHouse = /** @class */ (function () {
    function SmallHouse() {
        this.parts = [];
    }
    SmallHouse.prototype.listParts = function () {
        return this.parts.join(",");
    };
    return SmallHouse;
}());
//one type of product builder
var SmallHouseBuilder = /** @class */ (function () {
    function SmallHouseBuilder() {
        this.reset();
    }
    SmallHouseBuilder.prototype.reset = function () {
        this.house = new SmallHouse();
    };
    SmallHouseBuilder.prototype.produceWall = function () {
        this.house.parts.push("SmallWall");
    };
    SmallHouseBuilder.prototype.produceDoor = function () {
        this.house.parts.push("SmallDoor");
    };
    SmallHouseBuilder.prototype.produceWindow = function () {
        this.house.parts.push("SmallWindow");
    };
    SmallHouseBuilder.prototype.produceRoom = function (numberOfRoom) {
        this.house.parts.push("SmallRoom ".concat(numberOfRoom));
    };
    SmallHouseBuilder.prototype.produceGarage = function () {
        this.house.parts.push("SmallGarage");
    };
    SmallHouseBuilder.prototype.produceSwimmingPool = function () {
        this.house.parts.push("SmallSwimmingPool");
    };
    SmallHouseBuilder.prototype.getHouse = function () {
        var result = this.house;
        this.reset();
        return result;
    };
    return SmallHouseBuilder;
}());
//director class which will be building the small hoise with the small house builder
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    Director.prototype.buildSmallHouse = function () {
        this.builder.produceWall();
        this.builder.produceDoor();
        this.builder.produceWindow();
        this.builder.produceRoom(1);
    };
    Director.prototype.buildSmallHouseWithGarage = function () {
        this.buildSmallHouse();
        this.builder.produceGarage();
    };
    return Director;
}());
//client code
function clientCode(director) {
    var builder = new SmallHouseBuilder();
    director.setBuilder(builder);
    console.log("Building a small house");
    director.buildSmallHouse();
    console.log("small house parts: " + builder.getHouse().listParts());
    console.log("Building a small house with a garage");
    director.buildSmallHouseWithGarage();
    console.log("small house with garage parts: " + builder.getHouse().listParts());
    //builder pattern can be used without a director class:example
    console.log("custom Big House:");
    builder.produceDoor();
    builder.produceWindow();
    builder.produceRoom(2);
    builder.produceGarage();
    builder.produceSwimmingPool();
    console.log("Big house parts: " + builder.getHouse().listParts());
}
//running the client code
var director = new Director();
clientCode(director);
