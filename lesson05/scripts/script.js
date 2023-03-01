// // ДЗ
// const numbers = [55, -9, 8, 90, -3, -1, 87];
// const arr = [1, "bye", 66, 89, true, undefined, "hi", 78, "good morning"];

// // Массив numbers
// // 1. Сформировать массив из последних цифр элементов массива
// const numbers_task1 = numbers.map((element) => Math.abs(element % 10));
// console.log(numbers_task1);

// // 2. Сформировать массив из чисел умноженных на 10
// const numbers_task2 = numbers.map((element) => element * 10);
// console.log(numbers_task2);

// // 3. Сформировать массив, где отрицательные числа станут положительными
// const numbers_task3 = numbers.map((element) => Math.abs(element));
// console.log(numbers_task3);

// // Массив arr
// // 1. Сформировать массив, в котором все элементы будут заменены на 0
// const arr_task1 = arr.map((element) => 0);
// console.log(arr_task1);

// // 2. Сформировать массив, где все булевые значения будут заменены на 10
// const arr_task2 = arr.map((element) =>
//   typeof element === "boolean" ? 10 : element
// );
// console.log(arr_task2);

// // 3. Сформировать массив, где строки короче 4 символов будут заменены на строку 'too short string'
// const arr_task3 = arr.map((element) =>
//   typeof element === "string" && element.length < 4
//     ? "too short string"
//     : element
// );
// console.log(arr_task3);

// .forEach() - ничего не возвращает (undefined)! выполняет указанную функцию один раз для каждого элемента массива
// .map() - возвращает новый массив (всегда)! выполняет указанную функцию для каждого элемента массива
// .filter() - возвращает новый массив, в который войдут те элементы из исходного массива, которые соответствуют переданному условию
// .find() - возвращает первый элемент, который подошел по условиям
// .sort() - сортирует эллементы В ИСХОДНОМ МАССИВЕ

// const numbers = [23, 65, -1, 98, -7, 77, 37, -8, 544, 17];
// const greetings = ['hello', 'Hi', 'hey', 'good afternoon', 'good evening'];

// // 1. Сформировать новый массив, в который войдут все отрицательные числа из массива numbers
// const new_numbers1 = numbers.filter((element) => element < 0);
// console.log(new_numbers1);

// // 2. Сформировать новый массив из numbers, в который войдут все положительные числа, оканчивающиеся на 7
// const new_numbers2 = numbers.filter(
//   (element) => element % 10 === 7
// );
// console.log(new_numbers2);

// // 3. Сформировать новый массив из greetings, в который попадут только приветсвия длиннне 5 символов
// const new_greetings1 = greetings.filter((element) => element.length > 5);
// console.log(new_greetings1);

// // 4. Все приветствия в верхнем регистре
// const new_greetings2 = greetings.map((element) => element.toUpperCase());
// console.log(new_greetings2);

// // 5. Все приветствия в нижнем регистре
// const new_greetings3 = greetings.map((element) => element.toLowerCase());
// console.log(new_greetings3);

// // 6. Сформировать новый массив, в который попадут только те приветствия, которые начинаются с маленькой буквы
// const new_greetings4 = greetings.filter(
//   (element) => element[0] === element[0].toLowerCase()
// );
// console.log(new_greetings4);

// // 7. Сформировать новый массив, в который попадут приветствия, начинающиеся на букву H (регистр может быть любым)
// const new_greetings5 = greetings.filter(
//   (element) => element[0].toLowerCase() === "h"
// );
// console.log(new_greetings5);

// // 8. Сформировать новый массив, в который попадут приветствия длиннее 5 символов, поднятые в верхний регистр
// // => ['GOOD AFTERNOON', 'GOOD EVENING']
// const new_greetings6 = greetings
//   .filter((element) => element.length > 5)
//   .map((element) => element.toUpperCase());
// console.log(new_greetings6);

// // 9. Сформировать новый массив, в который попадут все приветствия с первой большой буквой
// const new_greetings7 = greetings.map(
//   // (element) => `${element[0].toUpperCase()}${element.slice(1)}`
//   (element) => element[0].toUpperCase() + element.slice(1)
// );
// console.log(new_greetings7);

// // 10. Из массива greetings вернуть элементы, длина которых больше 6
// const el = greetings.find((element) => element.length > 6);
// console.log(el + ' <' + typeof el + '>')

// // 11. Отсортировать элементы в массиве numbers от меньшего к большему
// numbers.sort((a, b) => a - b); // исходный массив numbers мутирует
// console.log(numbers)

// // 12. Отсортировать элементы в массиве numbers от большего к меньшему
// numbers.sort((a, b) => b - a); // обновленный массив numbers мутирует
// console.log(numbers)

// // Объекты
// const my_user = {
//   id: 1,
//   firstname: "John",
//   lastname: "Doe",
//   age: 27,
//   online: true,
//   groups: ["31/32", "33/34", "40/41"],
//   address: {
//     street: "Komitas",
//     city: "Moscow",
//     country: "Russia",
//     zipcode: 0013,
//   },
// };

// const user = {
//   id: 1,
//   firstname: "Nelli",
//   lastname: "Efremyan",
//   age: 27,
//   online: true,
//   groups: ["31/32", "33/34", "40/41"],
//   address: {
//     street: "Komitas",
//     city: "Yerevan",
//     country: "Armenia",
//     zipcode: "0033",
//   },
// };

// // const userarrays = [];
// // userarrays.push(user, my_user);
// // console.log(userarrays);

// // console.log(user);
// // console.log(user.groups[1]);
// // console.log(user.address.country);
// // console.log(user["groups"][1]);
// // console.log(user["address"]["country"]);

// // const key = "firstname";
// // console.log(user[key]);

// // 1. Из объекта user сформировать строку из данных пользователя в формате: 'Имя Фамилия (возраст)'. Вывести полученную строку в косноль
// const user_as_string = `${user.firstname} ${user.lastname} (${user.age})`;
// console.log(user_as_string);

// //
// for (let key in user) {
//   if (user.hasOwnProperty(key)) {
//     if (typeof user[key] === "object") {
//       let obj = user[key];
//       for (let subkey in obj) {
//         if (obj.hasOwnProperty(subkey)) {
//           console.log(key + " -> " + subkey + " -> " + obj[subkey]);
//         }
//       }
//     } else {
//       console.log(key + " -> " + user[key]);
//     }
//   }
// }

// // 2. Сформировать строку с полным адресом пользователя
// const user_address_as_string = `${user.address.country}, ${user.address.zipcode} ${user.address.city}, ${user.address.street}`;
// console.log(user_address_as_string);

// let str = "";
// for (let key in user.address) {
//   str = str += user.address[key] + " ";
// }
// console.log(str);

// const users = [
//   {
//     id: 1,
//     name: "Anton",
//     age: 34,
//     online: true,
//   },
//   {
//     id: 2,
//     name: "Oleg",
//     age: 56,
//     online: false,
//   },
//   {
//     id: 3,
//     name: "Irina",
//     age: 22,
//     online: true,
//   },
// ];

// // 3. Сформировать новый массив, в который попадут только пользователи старше 30 лет
// const new_users1 = users.filter((element) => element.age > 30);
// console.log(new_users1);

// // 4. Сформировать массив из имен пользователей, которые онлайн
// // => ['Anton', 'Irina']
// const new_users2 = users
//   .filter((element) => element.online)
//   .map((element) => element.name);
// console.log(new_users2);

// ДЗ
// Дан массив пользователей
const users1 = [
  {
    first_name: 'Ivan',
    last_name: 'Ivanov',
    age: 20,
    salary: 500
  },

  {
    first_name: 'Olga',
    last_name: 'Petrova',
    age: 12,
    salary: 250
  },

  {
    first_name: 'Irina',
    last_name: 'Alexandrova',
    age: 46,
    salary: 1500
  },

  {
    first_name: 'Denis',
    last_name: 'Sokolov',
    age: 30,
    salary: 760
  }
];

// 1. Пройдитесь по массиву с объектами циклом forEach и выведите каждый элемент в консоль
users1.forEach((element) => console.log(element));

// 2. Получите из всех объектов значения last_name и сформируйте из этих имен массив
const new_users2 = users1.map((element) => element.last_name);
console.log(new_users2);

// 3. Получите из этого массива объект, где first_name == "Olga", и сохраните это в какой-нибудь переменной
const new_user3 = users1.find((element) => element.first_name == "Olga");
console.log(new_user3);

// 4. Сформируйте новый массив без объекта, где first_name == "Irina"
const new_user4 = users1
  .filter((element) => element.first_name == "Irina")
  .map((element) => [
    element.first_name,
    element.last_name,
    element.age,
    element.salary,
  ]);
console.log(new_user4);

// 5. Добавьте в конец нового массива объект со значениями:
const new_users5 = users1.slice();
new_users5.push({
  first_name: "Anton",
  last_name: "Gribov",
  age: 36,
  salary: 1760,
});
console.log(new_users5);

// 6. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: <Имя> <Фамилия> (<возраст>): <зарплата>.
// => ['Ivan Ivanov (20): 500', 'Irina Alexandrova (46): 1500', 'Denis Sokolov (30): 760']
const new_users6 = users1
  .filter((element) => element.age >= 16)
  .map(
    (element) =>
      `${element.first_name} ${element.last_name} (${element.age}): ${element.salary}`
  );
console.log(new_users6);
