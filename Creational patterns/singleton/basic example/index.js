var singleton = /** @class */ (function () {
    function singleton() {
    }
    singleton.getInstance = function () {
        if (!singleton.instance) {
            singleton.instance = new singleton();
        }
        return singleton.instance;
    };
    return singleton;
}());
//client code
function clientCode() {
    var instance1 = singleton.getInstance();
    var instance2 = singleton.getInstance();
    if (instance1 === instance2) {
        console.log("both are same");
    }
    else {
        console.log("both are different");
    }
}
clientCode();
