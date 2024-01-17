/*fullname = (fname, lname) => {
  return fname + lname;
};
setAge = (age) => "age = " + age;

console.log(fullname("souka", "seesoupha"));
console.log(200 + " " + "years");

// spread Operator ສາມາດສົ່ງໄດ້ຫຼາຍຈຳນວນ
const colors = ["blue", "white", "red"];
const allcolors = ["pink", "gray", ...colors];

console.log(allcolors);

//Rest parameter ສາມາດສົ່ງໄດ້ຫຼາຍຈຳນວນ
summation = (...numberArr) => {
  let result = 0;
  for (let number of numberArr) result += number;
  return result;
};

console.log(summation(500, 1000));

//Destructuring
// array
const colors = ["blue", "white", "red"];
// const [blue, white, red] = colors;

const [, , red] = colors;
console.log(red);

//object
const product = {
  productName: "Computer",
  price: 6700000,
  stock: 10,
};

const { productName: productName, price: price, stock: stock } = product;

console.log(productName);
console.log(price);
console.log(stock);


// Default parameter
getDataCustomer = (customerName, customerAddress) => {
  const address = `ຊື່ລູກຄ້າ : ${customerName} 
  ທີ່ຢູ່: ${customerAddress}`;
  return address;
};
console.log(getDataCustomer("sooloth", "vangvieng"));

//array join change array to string
const data = [100, 200, 300];
console.log(data);
console.log(data.join());

//+ array concat
const data1 = [200, 300, 400];
const data2 = [500, 100];

const Alldata = data1.concat(data2);
console.log(Alldata);

//push, pop , shift , unshift
//push ເພີ່ມສະມາຊິກອາເລ
const data = [10, 20, 30];
data.push(203);
data.push(...[300, 500, 1000]);
console.log(data);
// ລົບສະມາຊິທ້າຍ
data.pop();
console.log(data);
data.pop();
console.log(data);

// shift ລົບທາງໜ້າອາເລ
data = [21, 30, 40];
data.shift();
console.log(data);

// unshift ເພີ່ມສະມາຊິກທາງດ້ານໜ້າ Array
data.unshift(...[10, 20, 3000]);
console.log(data);

// splice & slice
// splice(ຕຳແໜ່ງທີ່ຈະລົບ,ຈຳນວນທີ່ຈະລົບ,ສາມາດເພີ່ມສະມາຊິກໄດ້)
// slice (ຕຳແໜ່ງເລີ່ມຕົ້ນ,ຕຳແໜ່ງສຸດທ້າຍ)


data.splice(1, 3, 999);
console.log(data);

// slice ດຶງອາເລມາໃຊ້ງານ
const data = [10, 20, 30, 40, 50];
console.log(data);
const lastdata = data.slice(1, 3);
console.log(lastdata);

//array for loop, forEach, forOf
const data = [10, 20, 30, 40, 50];
for (let i = 0; i < data.length; i++) {
  if (data[i] >= 30) break;
  console.log(`ລຳດັບທີ່ ${i} = ${data[i]}`);
}

// forEach
const data = [10, 20, 30, 40, 50];

data.forEach((element) => {
  console.log(element);
});

// forOf
const data = [10, 20, 30, 40, 50];
for (const element of data) {
  console.log(`ສະມາຊິກ array = ${element}`);
}

//ຄົ້ນຫາຂໍ້ມູນໃນ array
// indexOf(ຂໍ້ມູນ) => ຜົນການຄົ້ນຫາຈະໄດ້ຕໍາແໜ່ງ index ທີ່ຄົ້ນເຈິ ຖ້າຄົ້ນບໍເຈິຈະໄດ້ -1
// find (ຂໍ້ມູນ) ຜົນການຄົ້ນຫາຈະໄດ້ຂໍ້ມູນທີ່ຄົ້ນເຈິ ຖ້າຄົ້ນບໍເຈິຈະໄດ້ undefinded
// findIndex(ຂໍ້ມູນ) ຜົນການຄົ້ນຫາຈະໄດ້ຕໍາແໜ່ງ index ທີ່ຄົ້ນເຈິ ຖ້າຄົ້ນບໍເຈິຈະໄດ້ -1

// index0f
const colors = ["red", "blue", "green", "pink", "white"];
const index = colors.indexOf("black");
console.log(index);

// find
const colors = ["red", "blue", "green", "pink", "white"];
const search = colors.find((e) => e === "yellow");

//findeIndex
const colors = ["red", "blue", "green", "pink", "white"];
const search = colors.find((e) => e === "pink");
console.log(search);
console.log(search);

// Array Map
const numbers = [10, 20, 30, 40];

const result = numbers.map((e) => e * 2);
console.log(result);

const data = [
  "rain",
  "shine",
  "fa_hong",
  "dad_hon",
  "fon_tok",
  "a_kard_d",
  "mork",
];
const result = data.map((e, i) => {
  return `ວັນທີ່ ${i + 1}, ສະພາບອາກາດ = ${e}`;
});
console.log(result);

const data = [
  { day: "01/03/2022", weather: "ແດດຮ້ອນ", temp: 27 },
  { day: "02/03/2022", weather: "ຝົນຕົກ", temp: 20 },
  { day: "03/03/2022", weather: "ໜາວ", temp: 19 },
];
const result = data.map((e) => e.temp);
console.log(`ອຸນຫະພູມແມ່ນ : ${result}`);

// Array filter
const data = [10, 20, 30, 40];
const result = data.filter((e) => e >= 20);
console.log(result);

//Array object filter
const data = [
  { name: "sooloth", salary: 2000000, department: "support" },
  { name: "ok", salary: 3000000, department: "marketing" },
  { name: "sarunwut", salary: 4000000, department: "support" },
  { name: "pkham", salary: 5000000, department: "account" },
  { name: "sit", salary: 6000000, department: "support" },
];
const result = data.filter(
  (e) => e.salary >= 3100000 && data.filter((e) => e.department === "support")
);

console.log(result);

// Array Reduce //Array.reduce((ຄ່າທີ່ຖືກປະມວນຜົນ,e)=>{},ຄ່າເລີ່ມຕົ້ນ)//value = 0
const data = [10, 20, 30, 40];
const sumation = data.reduce((value, e) => e + value, 0);
console.log(sumation);

// Array Reduce with object
const cart = [
  { name: "ກະເປົາ", price: "50000" },
  { name: "ໜັງສື", price: "50000" },
  { name: "ກ້ອງຖ່າຍຮູບ", price: "5000000" },
];

const sumation = cart.reduce((value, e) => e.price + value, 0);

console.log(sumation);

//component
// classcomponent
class HelloComponents extends React.Component{
  render(){
    return <h1>hello</h1>
  }
}
ReactDOM.render(<HelloComponents />, document.getElementById("root"));
// functioncomponent
function HelloComponents() {
  return <h1>hello react</h1>;
}
ReactDOM.render(<HelloComponents />, document.getElementById("root"));

// Reacts JSX
// 1. ສາມາດຂຽນໃນ <div>/section/article/fragment/<> ກໍ່ໄດ້ ແລະ ຕ້ອງມີແທັກເປີດປິດ ທຸກຄັ້ງ
// 2. ການໃສ່ class style ທີ່ເປັນ Attribute in jsx ຈະມີການກຳນົດ className ແທນ class ເນື່ອງຈາກຄຳວ່າ class ເປັນ keyworld

// ຮູບບແບບການຂຽນ React JSX 
function HelloComponents(){
  return (<div>
     <div><h1>Hello component external</h1></div> 
  </div>)
}
//section / article
function HelloComponent(){
  return(
    <section>
    <article><h3>Hello react</h3></article>
    </section>
  )
}
//React.Fragment
function HelloComponent(){
  return(
    <React.Fragment>
    <article><h3>Hello react</h3></article>
    </React.Fragment>
  )
}


// command React Hook
useState;
import { useState } from "react";
[ຊື່ State, ຟັງຊັ່ນທີ່ໃຊ້ປ່ຽນແປງຂໍ້ມູນໃນ state] = useState(ຄ່າເລີ່ມຕົ້ນຂອງ state)

useEffect ຜົນກະທົບທີ່ເກີດຂື້ນພາຍໃນ component ໃຊ້ເພື່ອຕ້ອງການອັບເດດຫຼືປ່ຽນແປງຫຍັງແດ່ພາຍໃນ component ຈົນສົ່ງຜົນໃຫ້ component ເກີດການ render ໃໝ່ 
ໂດຍສາເຫດຫຼັກທີ່ເກີດການ render ຈະມາຈາກການປ່ຽນແປງຄ່າພາຍໃນ Props and State;


useReducer;
useContext;
useMemo;
useCallback;

// Context API (Global State)
.Provider(Parent) ດູແລແລະຈັດການຂໍ້ມູນແລ້ວນຳໄປສົ່ງໃຫ້ Consumer 
.Consumer(Children) ນໍາຂໍ້ມູນທີ່ໄດ້ຈາກ Provider ໄປສ້າງຫຼືສະແດງຜົນໃນ component 

// ======================================================================
// ======================================================================
// ======================================================================
// ES6 Classes
class Car {
  constructor(name) {
    this.brand = name;
  }
  present = () => {
    return "i have a" + this.brand;
  };
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a" + this.model;
  }
}
const mycar = new Model("Ford", "Mustang");
document.write(mycar.show());

// Arrow Function
hello = () => {
  return (
    (document.getElementById("demo1").innerHTML = x),
    (document.getElementById("demo2").innerHTML = x)
  );
};

let x = 10;

{
  let x = 2;
}

// const
// array
const Cars = ["vigo", "Revo", "volvo"];

// change element
Cars[0] = "Toyota";
console.log(Cars);

// Add an element
Cars.push("Audi");
console.log(Cars);

// but can not reassign the array
Cars = ["Toyota", "Volvo", "Audi"];

//Const object
const Car = { type: "fiat", model: "500", color: "white" };
console.log(Car);
// change properties
Car["color"] = "red";
console.log(Car);
//Add a property
Car.owner = "SLX";
console.log(Car);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

// common HTML Events
onchange       ====>   An HTML element has been changed 
onclick        ====>   The user clicks an HTML element 
etc... 


let answer1 = "It's alright";
let answer2 = "He is called 'johnny'";
let answer3 = 'He is called "johnny"';

document.getElementById("demo").innerHTML =
  answer1 + "<br>" + answer2 + "<br>" + answer3;

let text = "ABCDRFGHIJKLMNOPQRESTUVCCC";
document.getElementById("demo").innerHTML = text.length;

// slice()
let str = "Apple, Banana, Kiwi";
// document.getElementById("demo").innerHTML = str.slice(7, 13);
document.getElementById("demo").innerHTML = str.slice(-12, -3);
//substr similar slice but can not accept negative indexes
let str = "Apple, Banana, Kiwi";
let part = str.substr(7);

let str = "Apple, Banana, Kiwi";
let part = str.substr(-4);

//replace()
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

//the replace with uppercase will not be replaced
function myFunction() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML = text.replace(
    "MICROSOFT",
    "W3Schools"
  );
}

// To replace case insensitive, use a regular expression with an /i flag (insensitive):
let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools");

function myFunction() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML = text.replace(
    /MICROSOFT/i,
    "W3Schools"
  );
}

// To replace all matches, use a regular expression with a /g flag (global match):
function myFunction() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML = text.replace(
    /Microsoft/g,
    "W3Schools"
  );
}

// javaScript String toUpperCase()
// javaScript String toLowerCase()
function myFunction() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML = text.toUpperCase();
}

//concat() joins two or more strings
let text1 = "Hello";
let text2 = "World!";
let text3 = text1.concat("", text2);
document.getElementById("demo").innerHTML = text3;

// The trim() method removes whitespace from both sides of a string:
let text1 = "          Hello World!          ";
let text2 = text1.trim();

document.getElementById("demo").innerHTML =
  "Length before text1=" +
  text1.length +
  "<br>length2 after text2=" +
  text2.length;

// JavaScript String padStart()
let text = "5";
let padded = text.padStart(4, 0);

// JavaScript String padEnd()
let text = "5";
let padded = text.padEnd(4, 0);

// Extracting String Characters
// JavaScript String charAt()
// The charAt() method returns the character at a specified index (position) in a string:

let text = "HELLO WORLD";
document.getElementById("demo").innerHTML = text.charAt(9);

// JavaScript String charCodeAt()
The charCodeAt() method returns the unicode of the character at a specified index in a string:
The method returns a UTF-16 code (an integer between 0 and 65535)

let text = "HELLO WORLD";
document.getElementById("demo").innerHTML = text.charCodeAt(4);

//properties access
let str = "HELLO WORLD";
document.getElementById("demo").innerHTML = str[7];

// JavaScript String split()
// A string can be converted to an array with the split() method:
text.split(",")    // Split on commas

text.split("|")    // Split on pipe

let text = "a,b,c,d,e,f,g";
const myArray = text.split(",");
document.getElementById("demo").innerHTML = myArray[0];
 
// text.split(" ")    // Split on spaces

let text = "Hello World";
const myArr = text.split("");
text = "";
for (let i = 0; i < myArr.length; i++) {
  text += myArr[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;

JavaScript Search Methods
String indexOf()
String lastIndexOf()
String startsWith()
String endsWith()

// String indexOf()
// The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
let str = "please locate where 'locate' occurs!";
document.getElementById("demo").innerHTML = str.indexOf("locate");
// JavaScript String lastIndexOf()
// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
let str = "Please locate where 'locate' occurs!";
str.lastIndexOf("locate");
// Both indexOf() and lastIndexOf() return -1 if the text is not found
let str = "Please locate where 'locate' occurs!";
str.lastIndexOf("John");
// Both methods accept a second parameter as the starting position for the search:
let str = "Please locate where 'locate' occurs!";
str.indexOf("locate", 15);
// The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.
// Back-Tics Syntax
let text = `Hello World!`;
// Quotes Inside Strings
let text = `He's often called "Johnny"`;
// Multiline Strings
let text = `The quick
brown fox
jumps over
the lazy dog`;

//Template Literals
//Template Strings
//String Templates
//Back-Tics Syntax
// Interpolation
// ${...}
// Variable Substitutions

let firstName = "john";
let lastName = "Woo";
let text = `Welcome ${firstName}, ${lastName}!`;
document.getElementById("demo").innerHTML = text;
// Expression Substitution
let price = 10;
let VAT = 0.07;
let total = `Total:${(price * (1 + VAT)).toFixed(2)}`;

document.getElementById("demo").innerHTML = total;


// HTML Template
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h1>${header}</h1><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}
html += `</ul>`;
document.getElementById("demo").innerHTML = html;

// Integer Precision
// Integer(numbers without a period or exponent notation) are accurate up to 15 digits

let x = 999999999999999;
let y = 9999999999999999;

document.getElementById("demo").innerHTML = x + "<br>" + y;

let x = 0.2 + 0.1;
document.getElementById("demo1").innerHTML = "0.2 + 0.1 = " + x;
let y = (0.2 * 10 + 0.1 * 10) / 10;
document.getElementById("demo2").innerHTML = "0.2 + 0.1 =" + y;

//Numeric Strings
// JavaScript will try to convert strings to numbers in all numeric operations
let x = "100";
let y = "10";
let z = x / y;
// NaN - Not a Number
let x = 100 / "Apple";
// You can use the global JavaScript function isNaN() to find out if a value is a not a number:
let x = 100 / "Apple";
isNaN(x);
// NaN is a number: typeof NaN returns number:

typeof NaN;
// Infinity

let myNumber = 2;
let txt = "";
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
  txt = txt + myNumber + "<br>";
}
document.getElementById("demo").innerHTML = txt;
//

let x = 2 / 0;
let y = -2 / 0;
document.getElementById("demo").innerHTML = x + "<br>" + y;


console.log(typeof Infinity);
// Hexadecimal
let x = 0xff;
document.getElementById("demo").innerHTML = "0xFF =" + x;

let myNumber = 32;
document.getElementById("demo").innerHTML =
  "32 = " +
  "<br>" +
  "Decimal = " +
  myNumber.toString(10) +
  "<br>" +
  "Hexadecimal = " +
  myNumber.toString(16) +
  "<br>" +
  "Octal = " +
  myNumber.toString(8) +
  "<br>" +
  "Binary = " +
  myNumber.toString(2);


let x = 500;
let y = new Number(500);
document.getElementById("demo").innerHTML = x === y;
// When using the === operator, x and y are not equal.
// (x == y) true or false?
 
//x is an object
let x = new Number(500);
// y is an object
let y = new Number(500);
document.getElementById("demo").innerHTML = x == y;

// (x === y) true or false?
let x = new Number(500);
let y = new Number(500);
document.getElementById("demo").innerHTML = x === y;
// JavaScript Number Methods
// The toString() method returns a number as a string.

let x = 123;
document.getElementById("demo").innerHTML =
  x.toString() + "<br>" + (123).toString() + "<br>" + (100 + 23).toString();
  */
// The toExponential() Method
// toExponential() returns a string, with a number rounded and written using exponential notation.
let x = 9.656;
document.getElementById("demo").innerHTML =
  x.toExponential() +
  "<br>" +
  x.toExponential(2) +
  "<br>" +
  x.toExponential(4) +
  "<br>" +
  x.toExponential(6);

// The toFixed() Method
// toFixed() returns a string, with the number written with a specified number of decimals:
