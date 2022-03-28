/*
var a = ['A', 'B', 'C'];
a.forEach(function (value, index, array) {
    console.log(value, index, array);
})
*/

/*
function sum(a, ...rest) {
    let res = a;
    for (let i = 0; i < rest.length; i++) {
        res += rest[i];
    }
    console.log(res);
}

sum(1, 2, 3, 4);*/

var arr = [1, 2, 3, 4, 5, 6];

function pow(x, y) {
    return x * y;
}

var res = arr.reduce(pow);
console.log(res);