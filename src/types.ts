/*========================
Types 
========================*/
/*========================
TYPES WITH TUPLES 
========================*/
type rgp = [number, number, number];

const generateRgb = (): rgp => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return [r, g, b];
};
console.log(generateRgb());

/*========================
TYPES WITH OBJECTS 
========================*/
type User = { name: string; score: number };
const ali: User = { name: `ali`, score: 23 };

const genUser = (user: User): void => {
  console.log(`${user.name} has score of ${user.score}`);
};

genUser(ali);
