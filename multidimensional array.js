//Multidimensional Array

let ary = [
    [71, 75, 83, 79],
    [84, 87, 91, 76],
    [92, 82, 76, 83]
]

console.log(ary[0][3]);
console.log(ary[1][2]);

for(let i = 0; i < ary.length; i++){
    console.log(ary[i]);
    for(let j = 0; j < ary[i].length; j++){
        console.log('Element = ' + i + ' : ' + ary[i][j]);
    }
}




let arry = [
    [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10]
    ],
    [
        [10, 20, 30, 40, 50],
        [60, 70, 80, 90, 100]
    ],
    [
        [11, 22, 33, 44, 55],
        [66, 77, 88, 99, 111]
    ]
]


for(let i = 0; i < arry.length; i++){
    console.log(arry[i]);
    for(let j = 0; j < arry[i].length; j++){
        console.log('Element = ' + i + ' : ');
        console.log(arry[i][j]);
        for(let n = 0; n < arry[i][j].length; n++)
            console.log('Element ' + i + '.' + j + ' : ' + arry[i][j][n]);
    }
}