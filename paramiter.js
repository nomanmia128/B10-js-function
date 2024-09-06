
// vaatkhao();


// 3 ---> 3*3 = 9
// 4 ---> 4*4 = 16 
// 5 ---> 5*5 = 25
// 11 ---> 11*11 = 121

function square (number){
    console.log('Value of the number parameter', number);
    const borgo = number * number;
    console.log('square of the given number is:', borgo);
}
square(4);
console.log('------------');
square(5);
console.log('-----------');
square(12);
console.log('------------');
square(405);

function add (num1, num2){
    const sum = num1 + num2;
    console.log(sum);
}
add(7, 89);
add(34, 10);


function addAll(a, b, c, d, e){
    const total = a + b + c + d + e;
    console.log(a, b, c, d, e);
    console.log(total);
}
addAll(4, 5, 3, 6);
addAll(4, 5, 3, 6, 8);