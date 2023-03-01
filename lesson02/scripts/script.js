// 1. Дан массив. Вывести все числа в консоль, используя цикл for
// const numbers = [4, 23, 7, 39, 19, 0, 9, 14];
// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// 2. Вывысти в консоль каждый второй элемент массива, умноженный на 2
// const numbers = [4, 23, 7, 39, 19, 0, 9, 14];
// for(let i = 0; i < numbers.length; i += 2) {
//     console.log(numbers[i] * 2);
// }

// 3. Написать функцию, которая принимает массив в качестве аргумента и выводит в консоль все элементы этого массива
// const showElems = arr => {
//   for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// showElems([1, 2, 3]);
// showElems(['hello', 'hi', 'good morning']);
// const numbers = [4, 23, 7, 39, 19, 0, 9, 14];
// showElems(numbers);

// 4. Написать функцию, которая принимает массив и индекс элемента. И выводит в консоль элемент из массива по переданному индексу
// const getElem = (arr, idx) => console.log(arr[idx]);
// getElem([4, 23, 7, 39, 19, 0, 9, 14], 2);

// Объект math

// const a = Math.max(4, 23, 7, 39, 19, 0, 9, 14);
// const b = Math.min(4, 23, 7, 39, 19, 0, 9, 14);

// console.log(a);
// console.log(b);

// const c = Math.ceil(7.88);  // 8 - округляет вверх (потолок)
// const d = Math.floor(7.88); // 7 - округляет вниз (пол)
// const e = Math.round(7.88); // 8 - округляет по правилам математики

// console.log(c);
// console.log(d);
// console.log(e);

// const f = Math.pow(2, 8);
// const g = Math.sqrt(4);

// console.log(f);
// console.log(g);

// const random = Math.random(); // генерирует случайное дробное число от 0 до 1
// console.log(random);

// // 1. Сгенерировать случайное целое число от 0 до 10
// const random1 = Math.round(Math.random() * 10);
// console.log(random1);

// // 1.1. Сгенерировать случайное целое число от 2 до 12
// const random1 = Math.round(Math.random() * 10) + 2;
// console.log(random1);

// // 2. Сгенерировать случайное целое число от 1 до 10
// const random2 = 1 + Math.floor(Math.random() * 10);
// console.log(random2);

// 2.1. Сгенерировать случайное целое число от min до max
// const getRandInt1 = (min, max) =>  Math.floor(min + Math.random() * (max + 1 - min));
// console.log(getRandInt1(2, 12));

// const getRandInt2 = (min, max) =>  Math.round(min - 0.5 + Math.random() * (max - min + 1));
// console.log(getRandInt2(2, 12));

// 5. Создать генератор бросаемых костей
// Создать функцию, которая генерирует случайно число от 1 до 6
// Создать строку, внутри которой вызывать эту функцию в двух местах
// const getChance1 = () => 1 + Math.floor(Math.random() * 6);
// console.log(getChance1() + ' x ' + getChance1())

// const getChance2 = () => Math.round(1 + Math.random() * 5);
// console.log(getChance2() + ' x ' + getChance2())

// 6. Создать функцию, которая принимает 5 чисел и возвращает самое большое
// const getMax = (num1, num2, num3, num4, num5) =>  Math.max(num1, num2, num3, num4, num5);
// console.log(getMax(4, 23, 7, 39, 19));

// 7. Дан массив. Написать функцию которая принимает массив, берет каждый элемент массива и находит квадратный корень из числа. Из полученных чисел сформировать новый массив nums_sqrt
// const nums = [16, 9, 81, 4];
// const getSqrt = arr => {
//   let res = [];
//   for(let i = 0; i < arr.length; i++) {
//     res.push(Math.sqrt(arr[i]));
//   }
//   return res;
// }
// const nums_sqrt = getSqrt(nums);
// console.log(nums_sqrt);

// const greetings = ["hello", "hi", "good morning", "good afternoon"];
// const long_greetings = [];
// for (let i = 0; i < greetings.length; i++) {
//   if (greetings[i].length > 6) {
//     long_greetings.push(greetings[i]);
//   }
// }
// console.log(long_greetings);

// const new_nums = [1, 5, -100, 98, -3, 15];
// const positive_nums = [];
// for (let i = 0; i < new_nums.length; i++) {
//   if (new_nums[i] > 0) {
//     positive_nums.push(new_nums[i]);
//   }
// }
// console.log(positive_nums);

// const extra_new_nums = [1, 5, -100, 98, -3, 15];
// const shape_new_nums = extra_new_nums;
// shape_new_nums.shift();
// console.log(shape_new_nums);

// Дан массив numbers
const numbers = [55, 43, 1, -7, 88, 13, -83, 15, 4];

// 1. С помощью цикла for выведите все числа из массива numbers в консоль
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 2. Сформировать новый массив, в который попадут только отрицательные числа из массива numbers
const numbers_task2 = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        numbers_task2.push(numbers[i]);
    }
}
console.log(numbers_task2);

// 3. Сформировать новый массив, в который попадут только четные числа из массива 
const numbers_task3 = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        numbers_task3.push(numbers[i]);
    }
}
console.log(numbers_task3);

// 4. Сформировать новый массив, в который попадут только положительные числа из массива numbers, заканчивающиеся на цифру 4
const numbers_task4 = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0 && numbers[i] % 10 == 4) {
        numbers_task4.push(numbers[i]);
    }
}
console.log(numbers_task4);

// 5. *Напишите цикл, который считает сумма чисел из массива numbers
let sum_task5 = 0;
for (let i = 0; i < numbers.length; i++) {
    sum_task5 += numbers[i];
}
console.log(sum_task5);


// 6. *Напишите цикл, который считает сумму чисел от 1 до 10
let sum_task6 = 0;
for (let i = 1; i <= 10; i++) {
    sum_task6 += i;
}
console.log(sum_task6);
