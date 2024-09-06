// string function
function evenSizedString(str){
    const size = str.length;
    console.log(str, size);

    if(size % 2 === 0){
        console.log('even is')
        return true;
    }
    else{
        console.log('odd is');
        return false;
    }
}

// evenSizedString('Dhaka');
// evenSizedString('faka');

// buliun function

function doubleOrTriple(number, doDoule){
    if(doDoule === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}
// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));


// array function
function numberOfElements(numbers){
    const len = numbers.length;
    return len;
}

// numberOfElements([12, 34, 65, 76, 77]);


// object function
function getAge(persone){
    const age = persone.age;
    return age;
}
getAge(34);
console.log(age);