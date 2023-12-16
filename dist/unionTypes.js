"use strict";
/*========================
UNION TYPES
========================*/
const someId = 12;
const someId2 = `h9101w1892yw`;
/*========================
TYPE GUARD
========================*/
const swapIdType = (id) => {
    if (typeof id === "string") {
        return parseInt(id);
    }
    else {
        return id;
    }
};
const idOne = swapIdType(1);
const idTwo = swapIdType("3");
console.log(idOne, idTwo);
const logDetails = (values) => {
    if (values.type === "admin") {
        console.log(values.name, values.email);
    }
    if (values.type === "customer") {
        console.log(values.name, values.email);
    }
};
