const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes];
//... is called spread operator as it spreads the whole array

// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
//flat property flattens the whole array into a single array by defining the depth of accessing the array

// console.log(real_another_array);

console.log(Array.isArray("Ayush"));
console.log(Array.from("Ayush"));
console.log(Array.from({ name: "ayush" })); //interesting
//here we have to define that whether the key or value needs to convert into array.
//thats why rn it will show a null array.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
