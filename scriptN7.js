//////////////////////////////////////////
//Функции
///////////////////////////////////////////////////////////
let f1 = document.querySelector('.f1');
function one() {
    console.log('work');
}
one();
//f1.onclick= one;//---без()
f1.onclick = () => {
    console.log("Hello");
};

console.log(1 + one());
console.log(one());

function two() {
    console.log('12323');
    return 55;
}
two();
console.log(1 + two());

let a = 6;
let b = 3;

function multi() {
    console.log(a * b);
    return a * b;

}
let c = multi();
let c1 = 2 * multi();
console.log(c, c1);
///////////
function multi2(x, y) {
    //console.log(a * b);
    return x * y;
}
console.log(multi2(3, 5));
console.log(multi2(3, a));

document.querySelector('.f2').onclick = function () {
    console.log('hello!!!!!');

}
document.querySelector('.f2').onclick = () => {
    console.log('hello worf!!!!!');

}
//1
/*
function (a, b) {
}
(a, b) => {
}
//2
function (a) {
}
a => {
}
//3
function (a) {
    return a * 2;
}
(a) => 'Helloween'*a;*/