// 18. Berilgan matnda katta va kichik harflarning sonini toping

// function countCase(str) {
//     let totalUppercase = 0
//     let totalLowercase = 0

//     for(let item of str) {
//         if (/[A-Z]/.test(item)) {
//             totalUppercase++
//         }else if(/[a-z]/.test(item)) {
//             totalLowercase++
//         }
//     }
//     console.log(`${totalUppercase} ta Uppercase bor`);
//     console.log(`${totalLowercase} ta Lowercase bor`);

// }
// countCase("Hello World");

// 19.Berilgan massivdagi juft va toq indekslardagi elementlarning yig'indisini alohida-alohida hisoblang.

// function evenOddIndexSums(arr) {

//     let totalEven = 0
//     let totalOdd = 0
//     arr.forEach((item, ind) => {
//         if (ind % 2 == 0) {
//            totalEven += item
//         }else {
//             totalOdd += item
//         }
//     });

//     let obj = {totalEven,totalOdd}
//     console.log(obj);

// }
// (evenOddIndexSums([1, 2, 3, 4, 5, 6]));

// 20. Berilgan matritsani soat strelkasiga qarama-qarshi yo'nalishda 90 daraja aylantiring.

// function rotateMatrix(matrix) {
//   let arr1 = [];
//   let arr2 = [];
//   let arr3 = [];
//   let result = [];

//   matrix.forEach((val, ind) => {
//     let firstArr = val[0];
//     let secondtArr = val[1];
//     let thirdtArr = val[2]; 

//     arr1.push(firstArr);
//     arr2.push(secondtArr);
//     arr3.push(thirdtArr);
//   });

//   result.push(arr1, arr2, arr3);
//   console.log(result.reverse());
// }
// rotateMatrix([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]);



// 21. Berilgan qator ichidagi barcha bo'shliqlarni olib tashlang.

// function removeSpaces(str) {
//     let newOne = str.split("").filter(val => val !== " ").join("")
//     console.log(newOne);
// }

// removeSpaces("Hello World! How are you?"); 



// 22. Berilgan ikki qatorning anagramma ekanligini tekshiring

// function areAnagrams(str1, str2) {
//     let result = str1.split("").sort().join("")
//     let result2 = str2.split("").sort().join("")
//     return result === result2

// }

// console.log(areAnagrams("listen", "silent")); // true
// console.log(areAnagrams("hello", "world")); // false



// 23. Berilgan massivdagi eng ko'p takrorlangan elementni toping.

// function mostFrequentElement(arr) {
//     let result
//     for (let i = 0; i < arr.length; i++) {
//         for (let g = 0; g < arr.length; g++) {
//           if (arr[i] == arr[g]) {
//             result = arr[g]
//           }
            
//         }
        
//     }
//     return result
// }
// console.log(mostFrequentElement([1, 3, 2, 1, 4, 1, 3, 1, 5, 1,])); // 1



// 24. Berilgan qator ichidagi barcha raqamlarning yig'indisini hisoblang.

// function sumOfDigits(str) {
//     let total = 0
//     let result = str.split("")

//     // console.log(result);
//     for(let item of result) {
//         if (!isNaN(item)) {
//             total += Number(item)
//         }
        
//     }
//     console.log(total);
// }

// console.log(sumOfDigits("abc123def45")); // 15 (1+2+3+4+5)



// 25. Berilgan qator ichidagi har bir harfning chastotasini hisoblang.


// function letterFrequency(str) {
//     let chastota = {}
    
//     let newOne = str.split("").filter(val => val !== " ")
//     for(let item of newOne) {
//         chastota[item] = chastota[item] + 1 || 1
//     }
//     return chastota
// }

// console.log(letterFrequency("hello world")); 
// // {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}