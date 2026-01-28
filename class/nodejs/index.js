// // console.log("Welcome to nodejs")
// // console.log("Objects")

// // import figlet from 'figlet';
// // figlet("Hello World!!", function (err, data) {
// //   if (err) {
// //     console.log("Something went wrong...");
// //     console.dir(err);
// //     return;
// //   }
// //   console.log(data);
// // });

// // export default function sum(a, b) {
// //   return a + b;
// // }
// // sum (2, 3);
// // export { sum };


// function sum(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// export default {sum, sub};


import fs from 'fs';
// console.log(fs)

//write operation
// fs.writeFileSync('./manish.txt', 'Hello from Manish');
// fs.writeFileSync('./manish.pdf', 'Hello from Manish .pdf');
// fs.writeFile('./manish.txt', 'this  is update file', (err) => {
// fs.appendFile('./manish.txt', '\n this is update file content', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('File created');
//   }
// });

fs.unlinkSync('./manish.pdf');
