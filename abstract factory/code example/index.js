//product type 1 of type first product implementation
var RoyalChair = /** @class */ (function () {
    function RoyalChair() {
    }
    RoyalChair.prototype.productCategory = function () {
        return "Royal";
    };
    RoyalChair.prototype.hasLegs = function () {
        return "Chair has 4 round shaped legs";
    };
    RoyalChair.prototype.sitOn = function () {
        return "sit on Chair";
    };
    return RoyalChair;
}());
//product type 2 of type first product implementation
var RFLChair = /** @class */ (function () {
    function RFLChair() {
    }
    RFLChair.prototype.productCategory = function () {
        return "RFL";
    };
    RFLChair.prototype.hasLegs = function () {
        return "Chair has 4 square shaped legs";
    };
    RFLChair.prototype.sitOn = function () {
        return "sit on Chair";
    };
    return RFLChair;
}());
//product type one of type two product implementation
var RoyalTable = /** @class */ (function () {
    function RoyalTable() {
    }
    RoyalTable.prototype.hasLegs = function () {
        return "Table has 4 round shaped legs";
    };
    RoyalTable.prototype.tableSurface = function () {
        return "Table has a larger surface";
    };
    RoyalTable.prototype.createTableCategory = function (collaborator) {
        return "".concat(collaborator.productCategory());
    };
    return RoyalTable;
}());
//product type two of type two product implementation
var RFLTable = /** @class */ (function () {
    function RFLTable() {
    }
    RFLTable.prototype.hasLegs = function () {
        return "Table has 4 square shaped legs";
    };
    RFLTable.prototype.tableSurface = function () {
        return "Table has a smaller surface";
    };
    RFLTable.prototype.createTableCategory = function (collaborator) {
        return "".concat(collaborator.productCategory());
    };
    return RFLTable;
}());
//type one factory implementation
var RoyalBrandFactory = /** @class */ (function () {
    function RoyalBrandFactory() {
    }
    RoyalBrandFactory.prototype.createChair = function () {
        return new RoyalChair();
    };
    RoyalBrandFactory.prototype.createTable = function () {
        return new RoyalTable();
    };
    return RoyalBrandFactory;
}());
//type two factory implementation
var RFLBrandFactory = /** @class */ (function () {
    function RFLBrandFactory() {
    }
    RFLBrandFactory.prototype.createChair = function () {
        return new RFLChair();
    };
    RFLBrandFactory.prototype.createTable = function () {
        return new RFLTable();
    };
    return RFLBrandFactory;
}());
//client code
function clientCode(factory) {
    //create 2 products
    var chair = factory.createChair();
    var table = factory.createTable();
    //use the products
    console.log("".concat(chair.productCategory(), "  ").concat(chair.hasLegs()));
    console.log(chair.sitOn());
    console.log("".concat(table.createTableCategory(chair), " table"));
    console.log("".concat(table.createTableCategory(chair), " Category ").concat(table.hasLegs(), " and ").concat(table.tableSurface()));
}
//test the codes
console.log("Client: Testing client code with the first factory type...");
clientCode(new RoyalBrandFactory());
console.log("\n");
console.log("Client: Testing the same client code with the second factory type...");
clientCode(new RFLBrandFactory());
