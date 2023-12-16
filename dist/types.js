"use strict";
const generateRgb = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
};
console.log(generateRgb());
const ali = { name: `ali`, score: 23 };
const genUser = (user) => {
    console.log(`${user.name} has score of ${user.score}`);
};
genUser(ali);
