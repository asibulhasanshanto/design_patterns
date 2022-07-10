interface ProductChair {
  productCategory(): string;
  hasLegs(): string;
  sitOn(): string;
}

interface ProductTable {
  hasLegs(): string;
  tableSurface(): string;
  createTableCategory(collaborator: ProductChair): string;
}

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

interface AbstractFactory {
  createChair(): ProductChair;
  createTable(): ProductTable;
}

class RoyalBrandFactory implements AbstractFactory {
  createChair(): ProductChair {
    return new RoyalChair();
  }
  createTable(): ProductTable {
    return new RoyalTable();
  }
}

class RFLBrandFactory implements AbstractFactory {
  createChair(): ProductChair {
    return new RFLChair();
  }
  createTable(): ProductTable {
    return new RFLTable();
  }
}

function clientCode(factory: AbstractFactory) {
  const chair = factory.createChair();
  const table = factory.createTable();

  console.log(`${chair.productCategory()}  ${chair.hasLegs()}`);
  console.log(chair.sitOn());
  console.log(`${table.createTableCategory(chair)} table`);
  console.log(
    `${table.createTableCategory(
      chair
    )} Category ${table.hasLegs()} and ${table.tableSurface()}`
  );
}

console.log("Client: Testing client code with the first factory type...");
clientCode(new RoyalBrandFactory());

console.log("\n");

console.log(
  "Client: Testing the same client code with the second factory type..."
);
clientCode(new RFLBrandFactory());
