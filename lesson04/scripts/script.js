// //ДЗ
// // 1. Написать функцию, которая принимает две строки и возвращает самую длинную из них
// const getLongString = (str1, str2) => (str1.length < str2.length ? str2 : str1);
// console.log(getLongString("Фруктовая", "Грушовая"));

// // 2. Написать функцию, которая принимает массив со строками и возвращает самую короткую строку из массива
// const strings = [
//   "Абрикосовая",
//   "Виноградная",
//   "Тенистая",
//   "Вишневая",
//   "Грушевая",
//   "Зеленая",
//   "Прохладная",
//   "Сиреневая",
//   "Каштановая",
//   "Луговая",
// ];
// const getShortString = (arr) => {
//   let str = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     arr[i].length < str.length ? (str = arr[i]) : "";
//   }
//   return str;
// };
// console.log(getShortString(strings));

// // *3. Дан массив с разными типами данных. Сформировать новый массив только из числовых элементов из массива arr (почитать про typeof)
// const arr = [1, "hello", 66, 89, true, undefined, "hi", 78];
// const numArr = [];
// for (let i = 0; i < arr.length; i++) {
//   typeof arr[i] === "number" ? numArr.push(arr[i]) : "";
// }
// console.log(numArr);

// // Дан массив
// const arr2 = [1, "bye", 66, 89, true, undefined, "hi", 78, "good morning"];
// // 1. Сформировать новый массив, в который попадут все значения из исходного массива, но все строки будут заменены на строку 'hello'
// const newArr2 = [];
// for (let i = 0; i < arr2.length; i++) {
//   typeof arr2[i] === "string" ? newArr2.push("hello") : newArr2.push(arr2[i]);
// }
// console.log(newArr2);

// // 2. Сформировать новый массив, в который попадут все элементы кроме строк
// const notForStrings = [];
// for (let i = 0; i < arr2.length; i++) {
//   typeof arr2[i] === "string" ? "" : notForStrings.push(arr2[i]);
//   // typeof arr2[i] !== "string" ? notForStrings.push(arr2[i]) : "";
// }
// console.log(notForStrings);

// // 3. Добавить в конец массива arr числа 65, 7 и строку 'good afternoon'
// arr2.push(65, 7, "good afternoon");
// console.log(arr2);

// callback-функция (функция обратного вызова)
// функция, переданная в другую функцию в качестве аргумента
// функция высшего порядка - функция, принимающая в качестве аргумента другую функцию

// function myFunc(callback) {
//     let a = [4, 5, 6];
//     let element = document.querySelector('.p1');
//     callback(element, a);
// }

// function out(elem, arr) {
//     elem.innerText = arr.join(',');
// }

// myFunc(out);

// const doubleTwo = () => 2 * 2;
// const doubleThree = () => 3 * 2;
// const doubleFour = () => 4 * 2;

// const doubleNum = (a) => a * 2;

// const nums = [1, 2, 3, 4, 5, 6];
// const double_nums = [];

// const doubleNums = () => {
//   for (let i = 0; i < nums.length; i++) {
//     double_nums.push(nums[i] * 2);
//   }
// };
// doubleNums();
// console.log(double_nums);

// const divided_nums = [];

// const dividedNums = () => {
//   for (let i = 0; i < nums.length; i++) {
//     divided_nums.push(nums[i] / 2);
//   }
// };
// dividedNums();
// console.log(divided_nums);

// const powered_nums = [];

// const poweredNums = () => {
//   for (let i = 0; i < nums.length; i++) {
//     powered_nums.push(nums[i] ** 2);
//   }
// };
// poweredNums();
// console.log(powered_nums);

// Универсальная функция
// const changeNums = (arr, func) => {
//   for (let i = 0; i < nums.length; i++) {
//     arr.push(func(nums[i]));
//   }
// };

// const mult_nums = [];
// const pow_nums = [];

// const multNum = (num) => num * 2;
// const powNum = (num) => num ** 2;

// changeNums(mult_nums, multNum);
// changeNums(pow_nums, powNum);

// console.log(mult_nums);
// console.log(pow_nums);

// .forEach() - ничего не возвращает (undefined)! выполняет указанную функцию один раз для каждого элемента массива
// const nums = [1, 2, 3, 4, 5, 6];
// const double_nums = [];
// nums.forEach((el) => double_nums.push(el * 2));
// console.log(double_nums);

// const double_nums2 = [];
// nums.forEach((el) => {
//   if (el > 3) {
//     double_nums2.push(el * 3);
//   }
// });
// console.log(double_nums2);

// const logArrayElements = (element, index, array) => {
//   console.log(`a[${index}] = ${element}`, array);
// };

// nums.forEach(logArrayElements);

// // Дан массив
// const arr = [1, "bye", 66, 89, true, undefined, "hi", 78, "good morning"];
// // 2. Сформировать новый массив, в который попадут все значения из исходного массива, но все строки будут заменены на строку 'hello'
// const new_arr = [];
// arr.forEach((element) =>
//   typeof element === "string" ? new_arr.push("hello") : new_arr.push(element)
// );
// console.log(new_arr);

// // 2. Сформировать новый массив, в который попадут все элементы кроме строк
// const new_arr3 = [];
// arr.forEach((element) =>
//   typeof element !== "string" ? new_arr3.push(element) : ""
// );
// console.log(new_arr3);

// // 4. Дан массив. Сформировтаь новый массив, в который попадут только положительные числа
// const numbers = [55, -9, 8, 90, -3, -1, 87];
// const new_arr4 = [];
// numbers.forEach((element) => (element > 0 ? new_arr4.push(element) : ""));
// console.log(new_arr4);

// // .map - возвращает новый массив (всегда)! выполняет указанную функцию для каждого элемента массива
// // Длина нового массива всегда равна длине исходного массива
// const nums = [1, 2, 3, 4, 5, 6];
// const double_nums = nums.map((element) => element * 2);
// console.log(double_nums);

// // Показательный пример что длины совпадает. Так решать нельзя. Нужно .filter
// const numbers = [55, -9, 8, 90, -3, -1, 87];
// const new_arr = numbers.map((element) => {
//   if (element > 0) {
//     return element;
//   }
// });
// console.log(new_arr);

// // 2. Сформировать новый массив, в который попадут все значения из исходного массива, но все строки будут заменены на строку 'hello'
// const arr = [1, "bye", 66, 89, true, undefined, "hi", 78, "good morning"];
// // const new_arr2 = arr.map((element) => {
// //   if (typeof element === "string") {
// //     return "hello";
// //   } else {
// //     return element;
// //   }
// // });
// const new_arr2 = arr.map((element) =>
//   typeof element === "string" ? "hello" : element
// );
// console.log(new_arr2);

// // 5. Сформировать новый массив, в который попадут все числа из массива numbers, но те числа, которые заканчиваются на 5, умножить на 3
// const new_arr_num = numbers.map((element) =>
//   Math.abs(element % 10) === 5 ? element * 3 : element
// );
// console.log(new_arr_num);

// ДЗ
const numbers = [55, -9, 8, 90, -3, -1, 87];
const arr = [1, "bye", 66, 89, true, undefined, "hi", 78, "good morning"];

// Массив numbers
// 1. Сформировать массив из последних цифр элементов массива
const numbers_task1 = numbers.map((element) => Math.abs(element % 10));
console.log(numbers_task1);

// 2. Сформировать массив из чисел умноженных на 10
const numbers_task2 = numbers.map((element) => element * 10);
console.log(numbers_task2);

// 3. Сформировать массив, где отрицательные числа станут положительными
const numbers_task3 = numbers.map((element) => Math.abs(element));
console.log(numbers_task3);

// Массив arr
// 1. Сформировать массив, в котором все элементы будут заменены на 0
const arr_task1 = arr.map((element) => 0);
console.log(arr_task1);

// 2. Сформировать массив, где все булевые значения будут заменены на 10
const arr_task2 = arr.map((element) =>
  typeof element === "boolean" ? 10 : element
);
console.log(arr_task2);

// 3. Сформировать массив, где строки короче 4 символов будут заменены на строку 'too short string'
const arr_task3 = arr.map((element) =>
  typeof element === "string" && element.length < 4
    ? "too short string"
    : element
);
console.log(arr_task3);
