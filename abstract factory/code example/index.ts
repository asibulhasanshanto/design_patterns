//product 1 interface
interface ProductChair {
  productCategory(): string;
  hasLegs(): string;
  sitOn(): string;
}

//product 2 interface
interface ProductTable {
  hasLegs(): string;
  tableSurface(): string;

  //this function will bound the product with a category
  createTableCategory(collaborator: ProductChair): string;
}

//product type 1 of type first product implementation
class RoyalChair implements ProductChair {
  productCategory(): string {
    return "Royal";
  }
  hasLegs(): string {
    return "Chair has 4 round shaped legs";
  }
  sitOn(): string {
    return "sit on Chair";
  }
}

//product type 2 of type first product implementation
class RFLChair implements ProductChair {
  productCategory(): string {
    return "RFL";
  }
  hasLegs(): string {
    return "Chair has 4 square shaped legs";
  }
  sitOn(): string {
    return "sit on Chair";
  }
}

//product type one of type two product implementation
class RoyalTable implements ProductTable {
  hasLegs(): string {
    return "Table has 4 round shaped legs";
  }
  tableSurface(): string {
    return "Table has a larger surface";
  }
  createTableCategory(collaborator: ProductChair): string {
    return `${collaborator.productCategory()}`;
  }
}

//product type two of type two product implementation
class RFLTable implements ProductTable {
  hasLegs(): string {
    return "Table has 4 square shaped legs";
  }
  tableSurface(): string {
    return "Table has a smaller surface";
  }
  createTableCategory(collaborator: ProductChair): string {
    return `${collaborator.productCategory()}`;
  }
}

// the main factory which will create the products but does not know the product type
interface AbstractFactory {
  createChair(): ProductChair;
  createTable(): ProductTable;
}

//type one factory implementation
class RoyalBrandFactory implements AbstractFactory {
  createChair(): ProductChair {
    return new RoyalChair();
  }
  createTable(): ProductTable {
    return new RoyalTable();
  }
}

//type two factory implementation
class RFLBrandFactory implements AbstractFactory {
  createChair(): ProductChair {
    return new RFLChair();
  }
  createTable(): ProductTable {
    return new RFLTable();
  }
}


//client code
function clientCode(factory: AbstractFactory) {

  //create 2 products
  const chair = factory.createChair();
  const table = factory.createTable();

  //use the products
  console.log(`${chair.productCategory()}  ${chair.hasLegs()}`);
  console.log(chair.sitOn());
  console.log(`${table.createTableCategory(chair)} table`);
  console.log(
    `${table.createTableCategory(
      chair
    )} Category ${table.hasLegs()} and ${table.tableSurface()}`
  );
}

//test the codes
console.log("Client: Testing client code with the first factory type...");
clientCode(new RoyalBrandFactory());

console.log("\n");

console.log(
  "Client: Testing the same client code with the second factory type..."
);
clientCode(new RFLBrandFactory());
