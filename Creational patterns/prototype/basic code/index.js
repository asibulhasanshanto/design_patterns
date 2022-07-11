var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var CarPrototype = /** @class */ (function () {
    function CarPrototype() {
    }
    CarPrototype.prototype.clone = function () {
        //creating this object as clone[primitive types will be coppied autometically]
        var clone = Object.create(this);
        //coping the component object
        clone.components = Object.create(this.components);
        //copy the other classes associated with this class
        clone.anotherObjectAssociatedWithThisObject = __assign(__assign({}, this.anotherObjectAssociatedWithThisObject), { carPrototype: __assign({}, this) });
        return clone;
    };
    return CarPrototype;
}());
var CarFunctions = /** @class */ (function () {
    function CarFunctions(carPrototype) {
        this.carPrototype = carPrototype;
    }
    CarFunctions.prototype.run = function () {
        return "car ".concat(this.carPrototype.carNumber, " is runnung");
    };
    return CarFunctions;
}());
//client code
function clientCode() {
    //creating the object
    var carPrototype = new CarPrototype();
    carPrototype.carNumber = 1;
    carPrototype.numberOfWheels = 4;
    carPrototype.color = "red";
    carPrototype.components = {
        engine: "v8",
        body: "sedan"
    };
    carPrototype.anotherObjectAssociatedWithThisObject = new CarFunctions(carPrototype);
    //clone the object
    var carPrototypeClone = carPrototype.clone();
    if (carPrototypeClone.carNumber === carPrototype.carNumber) {
        console.log("car number is clonned");
    }
    else {
        console.log("car number is not clonned");
    }
    if (carPrototypeClone.numberOfWheels === carPrototype.numberOfWheels) {
        console.log("number of wheels is clonned");
    }
    else {
        console.log("number of wheels is not clonned");
    }
    if (carPrototypeClone.color === carPrototype.color) {
        console.log("color is clonned");
    }
    else {
        console.log("color is not clonned");
    }
    if (carPrototypeClone.components === carPrototype.components) {
        console.log("components is not clonned");
    }
    else {
        console.log("components is clonned");
    }
    if (carPrototypeClone.anotherObjectAssociatedWithThisObject ===
        carPrototype.anotherObjectAssociatedWithThisObject) {
        console.log("anotherObjectAssociatedWithThisObject is not clonned");
    }
    else {
        console.log("anotherObjectAssociatedWithThisObject is  clonned");
    }
    if (carPrototypeClone.anotherObjectAssociatedWithThisObject.carPrototype ===
        carPrototype.anotherObjectAssociatedWithThisObject.carPrototype) {
        console.log("carPrototype is not clonned");
    }
    else {
        console.log("carPrototype is clonned");
    }
}
clientCode();
