function multiply(a, b, c) {

    return a * b * c;
}

function multiplyCurring(a) {

    return function (b) {
        return function (c)  {
            return a * b * c
        }
    }
}

let res = multiply(1, 2, 3);
console.log(res);

let mc1 = multiplyCurring(1);
let mc2 = mc1(2);
let res2 = mc2(3);
console.log(res2);

let res3 = multiplyCurring(1)(2)(3);
console.log(res3);

