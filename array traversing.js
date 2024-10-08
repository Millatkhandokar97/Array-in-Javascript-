let ary = [4, 2, 7, 3, 9, 1, 8, 6]

ary[8] = 12 //Array property outside declaration
ary[3] = 18 //Array property redeclaration

for(let i = 0; i <= ary.length-1; i++){
    console.log(ary[i]);
}

for(let i = 0; i <= ary.length-1; i++){
    ary[i] = ary[i] + 2
    console.log(ary[i]);
}

let sum = 0
for(let i = 0; i <= ary.length-1; i++){
    sum += ary[i]
}

console.log(sum);


for(let i = 0; i <= ary.length; i++){
    if(ary[i] % 2 === 0){
        console.log(ary[i]+ 'Even Number');
    }else{
        console.log(ary[i] + ' Odd Number');
    }
    
}
console.log(ary)
console.log(ary.length)
console.log(ary.indexOf(8));

ary.push(100)
console.log(ary)
ary.pop()
console.log(ary)
ary.shift()
console.log(ary)
ary.unshift(28)
console.log(ary)