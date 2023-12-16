/*========================
TUPLES
========================*/


let tuple : [string,number,boolean];
tuple = [`ali`,23,true]

 function useCoords():[number, number]  {
    const lat = 5;
    const long = 10;
    return [lat, long];
};


/*========================
NAMED TUPLES
========================*/

let user:[name:string, age:number];
user = [`ali` , 23];