// №1
// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
// let num = 5;
// if(num > 0) {
//     console.log('true')
// }

// №2
// Дана строка. Выведите в консоль длину этой строки.
// let str = 'Hello my friend'
// console.log(str.length);

// №3
// Дана строка. Выведите в консоль последний символ строки.
// let str = 'Hello'
// console.log(str[str.length - 1]);

// №5
// Даны два слова. Проверьте, что первые буквы этих слов совпадают.
// let strOne = 'Michael';
// let strTwo = 'Maksim';
// console.log(strOne[0] === strTwo[0]);

// Уровень 1.2 задачника JavaScript
// №1
// Дано число. Выведите в консоль первую цифру этого числа.
// let num = 547;
// console.log(('' + num)[0])

// №2
// Дано число. Выведите в консоль последнюю цифру этого числа.
// let num = 123;
// let str = num + '';
// console.log(str.at(-1) )
// console.log(str[str.length - 1])

// №3
// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
// let num = 123456789;
// let str = num.toString();
// console.log(Number(str[0]) + Number(str[str.length -1]));

// №4
// Дано число. Выведите количество цифр в этом числе.
// let num = 12345678;
// let str = num.toString();
// console.log(str.length)

// №5
// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
// let num1 = 123;
// let num2 = 156;
// let str1 = num1.toString()
// let str2 = num2.toString()
// console.log(str1[0] === str2[0])

// Уровень 1.3 задачника JavaScript
// №1
// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
// let str = 'hello my friend';
// if(str.length > 1){
//     console.log(str[str.length - 2])
// }

// №2
// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
// let num1 = 15;
// let num2 = 3;
// console.log(num1 % num2 === 0);

// Уровень 1.4 задачника JavaScript
// №1
// Выведите в консоль все целые числа от 1 до 100.
// for (let i = 1; i <= 100; i++){
//     console.log(i);
// }

// №2
// Выведите в консоль все целые числа от -10 до 0.
// for (let i = -10; i <= 0; i++){
//     console.log(i);
// }

// №4
// Выведите в консоль все четные числа из промежутка от 1 до 100.
// for(let i = 0; i <= 100; i++){
//     if(i%2 === 0){
//         console.log(i)
//     }
// }

// №5
// Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
// for(let i = 1; i <= 100; i++){
//     if(i % 3 === 0){
//         console.log(i)
//     }
// }

// Уровень 1.5 задачника JavaScript
// №1
// Найдите сумму всех целых чисел от 1 до 10.
// let arrayNums = [];
// for (let i = 1; i <= 10; i++){
//     arrayNums.push(i)
// }
// let result = arrayNums.reduce((sum, current) => sum + current, 0);
// console.log(result)

// №2
// Найдите сумму всех целых четных чисел в промежутке от 1 до 10.
// let arrayNums = [];
// for (let i = 1; i <= 10; i++){
//     if(i % 2 === 0) {
//         arrayNums.push(i)
//     }
// }
// let res = arrayNums.reduce((sum, current) => sum + current, 0);
// console.log(res)

// №3
// Найдите сумму всех целых нечетных чисел в промежутке от 1 до 10.
// let arr = [];
// for (let i = 1; i <= 10; i++){
//     if(i % 2 !== 0) {
//         arr.push(i)
//     }
// }
// let res = arr.reduce((sum, current) => sum + current, 0);
// console.log(res)

// №4
// Даны два целых числа. Найдите остаток от деления первого числа на второе.
// let num1 = 13;
// let num2 = 3;
// console.log(num1 % num2);

// №5
// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
// let str = 'hello my friend';
// let strRev = str.split('').reverse().join('');
// console.log(strRev)

// Уровень 1.6 задачника JavaScript
// №1
// Дан массив с числами. Найдите сумму квадратов элементов этого массива.
// let arr = [1, 2, 3];
// let arrPow = [];
// arr.forEach((item) => arrPow.push(Math.pow(item, 2)));
// let res = arrPow.reduce((sum, current) => sum + current, 0);
// console.log(res)

// Уровень 1.7 задачника JavaScript
// №1
// Дана строка:

// 'abcde'
// Получите массив букв этой строки.
// let str = 'abcde';
// let res = str.split('');
// console.log(res)

// №2
// Дано некоторое число:

// 12345
// Получите массив цифр этого числа.
// let num = 12345;
// let array = ('' + num).split('').map(function(digit){
//     return +digit;
//   });
// console.log(array)

// №3
// Дано некоторое число:
// 12345
// Переверните его:
// 54321
// let num = 12345;
// let array = ('' + num).split('').reverse().map(function (x) {
//     return +x;
// });
// let res = array.join('');
// console.log(res);

// №4
// Дано некоторое число:
// 12345
// Найдите сумму цифр этого числа.
// let num = 12345;
// let str = num + '';
// let arr = str.split('').map( (x) => { return +x });
// let res = arr.reduce((sum, current) => sum + current, 0);
// console.log(res)

// Уровень 1.9 задачника JavaScript
// №1
// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
// let arr = ['http://canyon', 'Hello', 'Michael', 'http://mchl', 'http://inga'];
// let res = [];
// arr.forEach((el)=> {
//     if(el.slice(0, 7) === 'http://'){
//         res.push(el);
//     }
// })
// let res = arr.filter(el => el.slice(0, 7) === 'http://');
// let res = arr.filter(el => el.includes('http://'));

// console.log(res);

// №2
// Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
// let arr = ['http://canyon.html', 'Hello', 'Michael', 'http://mchl.html', 'http://inga.html'];
// let res = arr.filter(el => el.includes('.html'));
// console.log(res)

// №3
// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
// let arrNum = [1, 22, 55, 125, 155];
// let res = arrNum.map(el => el * 1.1);
// console.log(res.map(el => Number(el.toFixed(1))))

// Уровень 1.10 задачника JavaScript

// №3
// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:
// [1, 2]
// [3, 4]
// [5, 6]
// let arrNum = [1, 2, 3, 4, 5, 6];
// let res = [];
// for(let i = 0; i < arrNum.length; i +=2 ){
//     res.push(arrNum.slice(i, i + 2));
// }
// console.log(res)

// Уровень 2.1 задачника JavaScript
// №1
// Дана некоторая строка. Найдите позицию первого нуля в строке.
// let str = 'dwfv04sdr0tewsd0f';
// let arr = str.split('');
// console.log(arr.indexOf('0'));


// №4
// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Найдите сумму первой половины элементов этого массива.
// let arr = [1, 2, 3, 4, 5, 6];
// let half_length = Math.ceil(arr.length / 2);    
// let leftSide = arr.slice(0, half_length);
// let res = leftSide.reduce((sum, current) => {
//     return sum + current;
// })
// console.log(res)

// №2
// Дан массив с числами. Оставьте в нем только положительные числа.
// let arr = [1, -2, 3, -4, 5, 6];
// let res = [];
// arr.forEach(el => {if(el > 0){
//     res.push(el);
// }})
// console.log(res);

// №3
// Дана строка. Удалите предпоследний символ из этой строки.
// let str = "stringify";
// let res = str.slice(0, str.length - 2) + str.slice(str.length - 1);
// console.log(res)

// Уровень 2.3 задачника JavaScript
// №1
// Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.
// let str1 = 'Michael';
// let str2 = 'Lion';
// console.log(str1[str1.length - 1].toLowerCase() == str2[0].toLocaleLowerCase());

// №4
// Дана дата в следующем формате:
// '2025-12-31'
// Преобразуйте эту дату в следующий объект:
// {
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }
// let date = '2025-12-31';
// let objDate = {};
// // применяю деструктуризацию
// [objDate.year, objDate.month, objDate.day] = date.split('-');
// console.log(objDate);

// Уровень 2.4 задачника JavaScript
// №1
// Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
// let str = 'xd5cfghjm2345054njk';
// let arr = str.split('');
// let res = [];
// arr.forEach(el => {
//     if(!isNaN(el)){
//         res.push(arr.indexOf(el));
//     };
// });
// console.log(res[0]);

// №2
// Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
// let myObj = {
//     name: 'Michael',
//     age: 33,
//     IsProgrammer: true
// }
// let objKeys = Object.keys(myObj);
// let objValues = Object.values(myObj);
// console.log(objKeys, objValues);

// №3
// Дано число. Выведите в консоль количество четных цифр в этом числе.
// let num = 123456789;
// let arr = String(num).split('');
// let res = [];
// arr.forEach(el => {
//     if(el % 2 == 0) {
//         res.push(el)
//     }
// })
// console.log(res.length)

// №5
// Дана некоторая строка со словами:
// 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:
// 'Aaa Bbb Ccc'
// let str = 'Aaa Bbb Ccc';
// let strClean = str.replaceAll(' ', '');
// let arr = strClean.split('');
// let arrOfsubArr = [];
// for(let i = 0; i < arr.length; i += 3){
//     arrOfsubArr.push(arr.slice(i, i + 3));
// }
// let res = arrOfsubArr.flat();
// for(let i = 2; i < res.length; i += 4){
//     res.splice(i + 1, 0, ' ');
// }
// console.log(res.join(''));

// Уровень 2.5 задачника JavaScript
// №1
// Дана некоторая строка, например, вот такая:
// '023m0df0dfg0'
// Получите массив позиций всех нулей в этой в строке.
// let str = '023m0f0dg0';
// let arr = str.split('');
//нашел в нете функцию на поиск дубликатов и решил через нее
// Array.prototype.getDuplicates = function () {
//     let duplicates = [];
//     for (let i = 0; i < this.length; i++) {
//         if(duplicates.hasOwnProperty(this[i])) {
//             duplicates[this[i]].push(i);
//         } else if (this.lastIndexOf(this[i]) !== i) {
//             duplicates[this[i]] = [i];
//         }
//     }
//     return duplicates[0];
// };
// console.log(arr.getDuplicates());
//написал сам
// let res = [];
// let obj = Object.assign({}, arr);
// for(let key in obj){
//     if(obj[key] === '0'){
//         res.push(key);
//     }
// }
// console.log(res);

// №2
// Дана некоторая строка:
// 'abcdefg'
// Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:
// 'abdeg'
// let str = 'abcdefg';
// let arr = str.split('');
// for (let i = 2; i <= arr.length; i += 2){
//     arr.splice(i, 1);
// }
// console.log(arr.join(''))

// Уровень 2.6 задачника JavaScript
// №1
// Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.
// let str = 'edc3oih5oijh7hj8kj';
// let arr = str.split('');
// let obj = Object.assign({}, arr);
// let res = [];
// for(let key in obj){
//     if(!isNaN(obj[key])){
//         res.push(key);
//     }
// }
// console.log(res);

// №5
// Дан некоторый массив с числами, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Слейте пары элементов вместе:
// [12, 34, 56]
// let arr = [1, 2, 3, 4, 5, 6];
// let subArr = [];
// for(let i = 0; i < arr.length; i+=2){
//     subArr.push(+arr.slice(i, i + 2).join(''));
// }
// console.log(subArr)

// Уровень 2.7 задачника JavaScript
// №3
// Дано некоторое число, например, такое:
// 123789
// Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:
// 28
// let num = 123789;
// let str = num + '';
// let arr = str.split('');
// let res = arr.filter(el => el % 2 == 0);
// console.log(res.join(''));

// Уровень 2.9 задачника JavaScript
// №1
// Дано некоторое число:
// 123456
// Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:
// 12 + 34 + 56
// let num = 123456;
// let str = num + '';
// let arr = str.split(''):
// let subArr = [];
// for(let i = 0; i < arr.length; i+=2){
//     subArr.push(+arr.slice(i, i + 2).join(''));
// }
// let res = subArr.reduce((sum, current) => sum + current);
// console.log(res);

// Уровень 3.1 задачника JavaScript
// №2
// Дан массив:
// [1, '', 2, 3, '', 5]
// Удалите из массива все пустые строки.
// let arr = [1, '', 2, 3, '', 5];
// let res = arr.filter(el => el !== '');
// console.log(res);

// Уровень 3.2 задачника JavaScript
// №3
// Дана некоторая переменная с числом:
// let num = 5;
// Сделайте строку, содержащую столько нулей, сколько указано в переменной.
//  В нашем случае получится такая строка:
// '00000'
// let num = 5;
// let arr = [];
// for(let i = 0; i < num; i++){
//     arr.push(0);
// }
// console.log(arr.join(''))

// Уровень 3.3 задачника JavaScript
// №1
// Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.
// let arr = ['привет', 'как', 'дела', 'у', 'тебя'];
// let res = arr.filter(el => {
//     return el.length <= 3
// })
// console.log(res);

// №2
// Дано некоторое число:
// 1357
// Проверьте, что все цифры этого числа являются нечетными.
// let num = 1357;
// let flag;
// let arr = num.toString().split('');
// let res = arr.forEach(el => {
//     if(el % 2 !== 0){
//         flag = true;
//     }
// });
// console.log(flag);

// Уровень 3.4 задачника JavaScript
// №1
// Выведите в консоль все числа в промежутке от 10 до 100, у которых первая цифра четная.
// let arrNum = [];
// for(let i = 10; i <= 100; i++){
//     arrNum.push(i + '');
// }
// arrNum.forEach(el => {
//     if(el[0] % 2 == 0){
//         console.log(el)
//     }
// })