//Update and Search Value in Array
let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9]

ary.splice(3, 2, 44, 55)
console.log(ary);

ary.splice(4, 3)
console.log(ary);


let arry = [2, 44, 24, 65, 82, 87, 29, 51, 93, 36, 58]

let find = 36
let isFound = false
for(let i = 0; i < arry.length; i++){
    if(arry[i] === find){
      console.log('Data Found at Index = ' + i);
      isFound = true
      break;  
    }
}

if(!isFound){
    console.log('Data Not Found');
}