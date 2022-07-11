interface Prototype {
  clone(): Prototype;
}

class CarPrototype implements Prototype {
  public carNumber: number;
  public numberOfWheels: number;
  public components: object;
  public color: string;
  public anotherObjectAssociatedWithThisObject: CarFunctions;

  public clone(): this {
    //creating this object as clone[primitive types will be coppied autometically]
    const clone = Object.create(this);
    //coping the component object
    clone.components = Object.create(this.components);

    //copy the other classes associated with this class
    clone.anotherObjectAssociatedWithThisObject = {
      ...this.anotherObjectAssociatedWithThisObject,
      carPrototype: { ...this },
    };
    return clone;
  }
}

class CarFunctions {
  public carPrototype;
  constructor(carPrototype: Prototype) {
    this.carPrototype = carPrototype;
  }
  public run(): string {
    return `car ${this.carPrototype.carNumber} is runnung`;
  }
}

//client code
function clientCode() {
  //creating the object
  const carPrototype = new CarPrototype();
  carPrototype.carNumber = 1;
  carPrototype.numberOfWheels = 4;
  carPrototype.color = "red";
  carPrototype.components = {
    engine: "v8",
    body: "sedan",
  };
  carPrototype.anotherObjectAssociatedWithThisObject = new CarFunctions(
    carPrototype
  );

  //clone the object
  const carPrototypeClone = carPrototype.clone();
  if (carPrototypeClone.carNumber === carPrototype.carNumber) {
    console.log("car number is clonned");
  } else {
    console.log("car number is not clonned");
  }

  if (carPrototypeClone.numberOfWheels === carPrototype.numberOfWheels) {
    console.log("number of wheels is clonned");
  } else {
    console.log("number of wheels is not clonned");
  }

  if (carPrototypeClone.color === carPrototype.color) {
    console.log("color is clonned");
  } else {
    console.log("color is not clonned");
  }

  if (carPrototypeClone.components === carPrototype.components) {
    console.log("components is not clonned");
  } else {
    console.log("components is clonned");
  }

  if (
    carPrototypeClone.anotherObjectAssociatedWithThisObject ===
    carPrototype.anotherObjectAssociatedWithThisObject
  ) {
    console.log("anotherObjectAssociatedWithThisObject is not clonned");
  } else {
    console.log("anotherObjectAssociatedWithThisObject is  clonned");
  }

  if (
    carPrototypeClone.anotherObjectAssociatedWithThisObject.carPrototype ===
    carPrototype.anotherObjectAssociatedWithThisObject.carPrototype
  ) {
    console.log("carPrototype is not clonned");
  } else {
    console.log("carPrototype is clonned");
  }
}
clientCode();
