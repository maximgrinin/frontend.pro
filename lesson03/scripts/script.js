// // 1. Написать цикл, который перемножит все числа от 1 до 20
// let mult = 1;
// for (let i = 2; i <= 20; i++) {
//   mult *= i;
// }
// console.log(mult);

// // 2. Дан массив. Сформировать новый массив из продуктов, чье название начинается на букву l
// const products = ["apple", "orange", "lime", "lemon", "pineapple"];
// const l_products = [];
// for (let i = 0; i < products.length; i++) {
//   if (products[i][0] == "l") {
//     l_products.push(products[i]);
//   }
// }
// console.log(l_products);


// const users = [
//   ["Oleg", "Ushanov", 28],
//   ["Irina", "Petrova", 48],
//   ["Ivan", "Ivanov", 12],
// ];
  
// // 3. Вывести в консоль первую букву имени у первого пользовател
// console.log(users[0][0][0]);

// // 4. Вывести в консоль возраст первого пользователя
// console.log(users[1][2]);
// console.log(users[1][2].toString()[0]);

// // 5. Сформировать массив из имен пользователей
// const names = [];
// for (let i = 0; i < users.length; i++) {
//   names.push(users[i][0]);
// }
// console.log(names);

// // 6. Написать цикл, который считает сумму четных и нечетных чисел от 1 до 30. Вывести обе суммы в консоль.
// let sumEven = 0;
// let sumOdd = 0;
// for (let i = 1; i <= 30; i++) {
//   if (i % 2 == 0) {
//     sumEven += i;
//   } else {
//     sumOdd += i;
//   }
// }
// console.log(sumEven, sumOdd);

// sumEven = 0;
// sumOdd = 0;
// for (let i = 1; i <= 30; i++) {
// 	i % 2 == 0 ? sumEven += i : sumOdd += i;
// }
// console.log(sumEven, sumOdd);



const num = [1, 2, 3, 4, 5, 6]
num.push(7) // добавляет элемент в конец
num.unshift(0) // добавляет один элемент в начало
console.log(num)
num.pop() // удаляет один элемент с конца
num.shift() // удаляет один элемент с начала
console.log(num)


// Дан массив

const numbers = [2, 34, 87, -54, 99, 105, 39, 90, 15];
const new_numbers = [];

// 1. Сформировать новый массив из последних цифр элементов массива
for (let i = 0; i < numbers.length; i++) {
	new_numbers.push(Math.abs(numbers[i] % 10));
}
console.log(new_numbers);

// 2. Добавьте в конец массива numbers число 120 и удалите первое число массива.
numbers.push(120)
numbers.shift()

// 3. Используя обновленный массив, найдите сумму чисел, кратных 3
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    sum += numbers[i];
  }
}
console.log(numbers, sum);

// 5. Написать функцию, которая принимает числовой аргумент n и возращает сумму всех чисел от 1 до n
const getSum = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};
console.log(getSum(4));

// 6. Написать функцию, которая принимает два числа и возвращает наименьшее из них
const getLess = (a, b) => Math.min(a, b);
console.log(getLess(10, 9));

const getMinNum = (a, b) => a < b ? a : b;
console.log(getMinNum(10, 9));

// 7. Написать функцию, которая принимает два числа и выводит в консоль все числа от наименьшего до наибольшего
const printNumbers = (a, b) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  for (let i = min; i <= max; i++) {
    console.log(i);
  }
};
printNumbers(8, 3);

//ДЗ
// 1. Написать функцию, которая принимает две строки и возвращает самую длинную из них
const getLongString = (str1, str2) => (str1.length < str2.length ? str2 : str1);
console.log(getLongString("Фруктовая", "Грушовая"));

// 2. Написать функцию, которая принимает массив со строками и возвращает самую короткую строку из массива
const strings = [
  "Абрикосовая",
  "Виноградная",
  "Тенистая",
  "Вишневая",
  "Грушевая",
  "Зеленая",
  "Прохладная",
  "Сиреневая",
  "Каштановая",
  "Луговая",
];
const getShortString = (arr) => {
  let str = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < str.length) {
      str = arr[i];
    }
  }
  return str;
};
console.log(getShortString(strings));

// *3. Дан массив с разными типами данных. Сформировать новый массив только из числовых элементов из массива arr (почитать про typeof)
const arr = [1, "hello", 66, 89, true, undefined, "hi", 78];
const numArr = [];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    numArr.push(arr[i]);
  }
}
console.log(numArr);
