//this builder interface has all the possible configuration options
interface HouseBuilder {
  produceWall(): void;
  produceDoor(): void;
  produceWindow(): void;
  produceRoom(numberOfRoom: number): void;
  produceGarage(): void;
  produceSwimmingPool(): void;
}

//this is a type of product
class SmallHouse {
  public parts: string[] = [];

  public listParts(): string {
    return this.parts.join(",");
  }
}

//one type of product builder
class SmallHouseBuilder implements HouseBuilder {
  private house: SmallHouse;

  constructor() {
    this.reset();
  }
  public reset(): void {
    this.house = new SmallHouse();
  }

  public produceWall(): void {
    this.house.parts.push("SmallWall");
  }

  public produceDoor(): void {
    this.house.parts.push("SmallDoor");
  }

  public produceWindow(): void {
    this.house.parts.push("SmallWindow");
  }

  public produceRoom(numberOfRoom: number): void {
    this.house.parts.push(`SmallRoom ${numberOfRoom}`);
  }

  public produceGarage(): void {
    this.house.parts.push("SmallGarage");
  }

  public produceSwimmingPool(): void {
    this.house.parts.push("SmallSwimmingPool");
  }

  public getHouse(): SmallHouse {
    const result = this.house;
    this.reset();
    return result;
  }
}

//director class which will be building the small hoise with the small house builder
class Director {
  private builder: HouseBuilder;

  public setBuilder(builder: HouseBuilder): void {
    this.builder = builder;
  }

  public buildSmallHouse(): void {
    this.builder.produceWall();
    this.builder.produceDoor();
    this.builder.produceWindow();
    this.builder.produceRoom(1);
  }

  public buildSmallHouseWithGarage(): void {
    this.buildSmallHouse();
    this.builder.produceGarage();
  }
}

//client code
function clientCode(director: Director) {
  const builder = new SmallHouseBuilder();
  director.setBuilder(builder);

  console.log("Building a small house");
  director.buildSmallHouse();
  console.log("small house parts: " + builder.getHouse().listParts());

  console.log("Building a small house with a garage");
  director.buildSmallHouseWithGarage();
  console.log(
    "small house with garage parts: " + builder.getHouse().listParts()
  );

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
const director = new Director();
clientCode(director);
