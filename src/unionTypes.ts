/*========================
UNION TYPES 
========================*/

type Id = string | number;

const someId: Id = 12;
const someId2: Id = `h9101w1892yw`;

/*========================
TYPE GUARD 
========================*/

const swapIdType = (id: Id) => {
  if (typeof id === "string") {
    return parseInt(id);
  } else {
    return id;
  }
};
const idOne = swapIdType(1);
const idTwo = swapIdType("3");
console.log(idOne, idTwo);

/*========================
TAGGED INTERFACES 
========================*/

interface Admin {
  type: "admin";
  name: string;
  email: string;
  age: number;
}
interface Customer {
  type: "customer";
  name: string;
  email: string;
  age: number;
}

const logDetails = (values: Customer | Admin): void => {
  if (values.type === "admin") {
    console.log(values.name, values.email);
  }
  if (values.type === "customer") {
    console.log(values.name, values.email);
  }
};
