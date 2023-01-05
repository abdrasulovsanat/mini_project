// //                                          forEach(); - перебирает массив, НЕ возвращает
// let arr = ['hello', 'hosse', 'js', 'py', 'world'];
// arr.forEach((item, index, array) => {
//     console.log(item);
//     console.log(index);
//     console.log(array);
// })
// let newArr = [];
// arr.forEach(item =>{
//     if(item.length > 4){
//         newArr.push(item);
//     };
// });
// console.log(newArr);
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// //                               map() - в результате работы возвращает новый массив
// let arr = [2, 4, 8, 34, 9, 0, 5];
// let newArr = arr.map(item => {
//     if(item % 2 === 0) {
//         return item + 10;
//     };
//     return item;
// });
// console.log(newArr);
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let arr = ['Tom', 'Helen', 'Enrique', 'Monica', 'Hosse'];
// let newArr = [];
// for(let i = 0; i < arr.length; i++){
//     newArr.push(arr[i].length)
// }
// console.log(newArr);
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //arrow func
// let arr = ['Tom', 'Helen', 'Enrique', 'Monica', 'Hosse'];
// let newArr = arr.map(item => item.length);
// console.log(newArr);
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// //func expression
// let arr = ['Tom', 'Helen', 'Enrique', 'Monica', 'Hosse'];
// let newArr = arr.map(function(item){
//     return item.length;
// });
// console.log(newArr);
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//func declaration
// let arr = ['Tom', 'Helen', 'Enrique', 'Monica', 'Hosse'];
// function strToLength(item) {
//     return item.length;
// };
// let newArr = arr.map(strToLength)
// console.log(newArr);
// //console.log(strToLength('Hello, world!'))

// filter();
// let arr = [1, 70, 4, 89, 4, 5, 2];
// let newArr = arr.filter((item, index, array) => {
    // return item % 2 ===0;
// });
// console.log(newArr);

//reduce()
// reduce(() => {}, initialValue);
// let arr = [3, 7, 0, 9, 67, 3, 5];
// let res = arr.reduce((previousItem, item, index, array) => {
//     // console.log(previousItem);
//     return previousItem + item;
// });
// console.log(res);

//includes(); - метод для поиска элемента в массиве вернете true или false
// let arr = ['Jack', 'Helen', 'Monica', 'Bob', 'Tom'];
// let res = arr.includes('Monica');
// console.log(res); //true

//every();
// let arr = ['Jack', 'Helen', 'Monica', 'Bob', 'Tom']; //true
// let arr = ['Jack', 'Helen', 'Monica', 'Bob', 'Tom', 10]; //false
// let res = arr.every((item, index, array) =>{
//     return typeof item === 'string';
// });
// console.log(res);

//some();
// let arr2 = [3, 7, 0, 9, 67, 3, 5, 'hello']; //true
// let arr2 = [3, 7, 0, 9, 67, 3, 5]; //false
// let res2 = arr2.some((item, index, arr) =>{
//     return typeof item === 'string'
// });
// console.log(res2);


//find();
// let arr = [
//     {title: 'Sumsung', price: 1000},
//     {title: 'Xiaomi', price: 500},
//     {title: 'Apple', price: 1500},
// ];

// let res = arr.find(item => item.title === 'Xiaomi');
// console.log(res);


