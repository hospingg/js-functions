// 1) Реалізувати функцію isWorkingAgePerson, яка буде перевіряти, чи працездатного людина віку (наприклад, від 16 до 64).
// Функція приймає в якості параметра вік людини і повертає значення булевого типу.

function isWorkingAgePerson(age){   //function declaration
    if(age>=16){
        return true
    }
    return false
}

// 2) Реалізувати функцію checkMultiplicity, яка приймає два числа і перевіряє, чи ділиться перше на друге націло (без залишку):

function checkMultiplicity(a,b){   //function declaration
    if(a%b===0){
        return true
    }
    return false
}

// 3) Перевірка можливості існування трикутника.
// Реалізувати функцію, яка приймає довжини трикутника; функція повертає true, якщо трикутник можливий, і false, якщо ні

function isTriangleReal(a,b,c){   //function declaration
    if(a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a ){
        return true
    }
    return false
}

// 4) Реалізувати функції
// розрахунку площі (або поверхні) наступної фігури (тіла): трикутника,
// прямокутника (або конуса, паралелепіпеда) в залежності від переданих
// розмірів фігури. Функція повинна повернути обчислене значення. Мінімум
// для однієї фігури на вибір.


/**
 * Calculates the area of ​​a triangle or cone.
 * @constructor
 * @param {number} a - The side of a triangle or the radius of the base of a cone.
 * @param {number} b - The side of a triangle or the length of a generating cone.
 * @param {number} c - The side of a triangle.
 */

function findSquare(a, b, c = Math.PI){   //function declaration
    let result;
    if(arguments.length===2){
        result = c * a * (a+b) // де a = R, b = l, c = PI,
        // console.log(`Площа повної поверхні конуса: ${result}`)
        return result
    }
    if(arguments.length===3 && isTriangleReal(a,b,c)){
        let p = (a+b+c)/2
        result = Math.sqrt(p*(p-a)*(p-b)*(p-c)) //Формула Герона
        // console.log(`Площа трикутника: ${result}`)
        return result
    }
    return undefined
}

// 5) Реалізувати функцію, яка приймає число і повертає булеве значення, чи
// воно просте (просте число ділитися без залишку тільки на себе і на
// одиницю).

function ifSimple(a){   //function declaration
    if ((a%2!=0 && a%3!=0) || (a===2 || a===3) ){
        return true
    }
    return false
}

let createItemCard = function(){ //function expression
    let adress = prompt('Будь ласка, вкажіть адресу товару:') || 'https://cdn-icons-png.flaticon.com/512/1170/1170679.png';
    let name = prompt('Будь ласка, введіть назву товару:') || 'NoName';
    let desc = prompt('Опишіть товар:') || 'Опис відсутній';
    let price = prompt('Вкажіть ціну товару:');
    let discPrice = price ? prompt('Вкажіть ціну зі знижкою:'): undefined;
    console.log(`Картка товару:\n Адреса: ${adress}\n Назва:${name}\n Опис:${desc}\n Ціна:${!(discPrice) ? + price : price + '->' + discPrice + '(ЗНИЖКА '+ Math.round(100 - discPrice*100/price)+'%!)'  }`)
}


// Нижче функція, що сортує масив з об'єктами за властивістю age

/**
 * Sort array with objects by age.
 * @constructor
 * @param {object} arr - An array with objects with the age property.
 */
let sortByAge = function(arr){ //function expression
    return arr.sort((a, b) => a.age - b.age);
}
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 }
];

// console.log(sortByAge(people));


