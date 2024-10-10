//Array Methods

let ary = [4, 2, 7, 3, 9, 1, 8, 6]
let ary2 = [4, 2, 7, 3, 9, 1, 8, 6]

console.log(ary.join() + ary.join(' '));

ary.fill(5)
console.log(ary);

let ary3 = ary.concat(ary2)
console.log(ary3);

console.log(Array.isArray(ary3));

let ary4 = Array.from(ary2)
console.log(ary4);
console.log(ary2);