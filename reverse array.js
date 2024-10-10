//Reverse An Array

let ary = [1, 2, 3, 4, 5]
let tem = []

for(let i = 0; i < ary.length; i++){
    tem.unshift(ary[i])
}

console.log(tem);

console.log(ary.reverse());