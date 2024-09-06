function add(price1, price2){
    const total = price1 + price2
    return total;
}

const bill = add(5, 50);
// console.log(bill);

function add2(price1, price2){
    return price1 + price2;
}

const bill2 = add(5, 60);
console.log(bill2);

function doMath(num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum / 2;
    const result = multiply / 2;
    return result;
}
const reslut = doMath(10, 5);
console.log(reslut);
