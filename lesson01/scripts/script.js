// let vs const
// let a = 5;
// a = 25;
// const b = 10;

// Циклы
// for(let i = 100; i >= 25; i -= 10) {
//     console.log(i);     
// }

// Функции
// function showNumbers() {
//     for(let i = 100; i >= 25; i -= 10) {
//         console.log(i);     
//     }
// }

// showNumbers();

// 1. Объявление функций ч/з function (function declaration)
// function multNumber(num) {
//     return num * 2;
// }

// console.log(multNumber(4));

// function sumNumber(num1, num2) {
//     return num1 + num2;
// }

// console.log(sumNumber(4, 6));

// function showNumbers(num) {
//   for(let i = 0; i <= num; i++) {
//     console.log(i);     
//   }
// }

// showNumbers(5);

// 2. Стрелочные функции (Arrow functions)
// Можно вызывать ТОЛЬКО после объявления

// const multNumber = (num) => {
//   return num * 2;
// }

// const multNumber = num => num * 2;
// console.log(multNumber(4));

// const sumNumber = (num1, num2) => num1 + num2;
// console.log(sumNumber(4, 6));

// const showNumbers = num => {
//   for(let i = 0; i <= num; i++) {
//     console.log(i);
//   }
// }

// showNumbers(5);

// const addTen = num => num + 10;
// console.log(AddTen(4));

// const multNumber = (num1, num2, num3) => num1 * num2 * num3;
// console.log(multNumber(4, 6, 2));

// const foo = (a, b) => {
//   for(let i = a; i <= b; i++) {
//     console.log(i)
//   }
// } 

// foo(2, 5);

//ДЗ
// 1. Написать цикл for, который выводит в консоль числа от 75 до 89
console.log("Task 01");
const taskOne = () => {
  for(let i = 75; i <= 89; i++) {
    console.log(i);
  }
}
taskOne();
console.log("=======");

// 2. Написать цикл for, который выводит в консоль каждое третье число в диапазоне от 80 до 12 (включительно)
console.log("Task 02");
const taskTwo = () => {
  for(let i = 80; i >= 12; i -= 3) {
    console.log(i);
  }
}
taskTwo();
console.log("=======");

// 3. Написать функцию, которая принимает два числа (основание и степень) и возвращает основание, возведенное в степень
console.log("Task 03");
const taskThree = (a, b) => a ** b; 
console.log(taskThree(2, 8));
console.log("=======");

// 4. Написать функцию, которая принимает число и возвращает 10% от этого числа
console.log("Task 04");
const taskFour = a => a * 0.1; 
console.log(taskFour(31));
console.log("=======");

// 5. Написать функцию, которая принимает два числа a и b (b > a) и выводит числа в консоль от меньшего к большему (от a до b)
console.log("Task 05");
const taskFive = (a, b) => {
  for(let i = a; i <= b; i++) {
    console.log(i)
  }
} 
taskFive(5, 8);
console.log("=======");

// stoczec
// Maksim1001S
// valetronika
// CristinaLupashko
// NecrosysAG
// ktrchernykh
// philip211
// MaksimSip
// RomanBureac