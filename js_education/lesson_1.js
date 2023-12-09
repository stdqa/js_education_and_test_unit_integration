// js introduction, variable, simple operations, cycles, functions ...


var x 
function variables_test(){
    var x = 3;
    name = 'Victor';
    let g = 4;
    return x, name, g;
}


function testA(a){
    var x = a;
    return x;
}


function testSum(a, b){
    return a + b;
}


function testOperation(a, b) {
    let x;
    x = 2 * ((a * b) % (a + b));

    return x;
}


function testIf(a, b){
    let x;
    if (a > b){
        x = a + b;
    }
    else {
        x = a * b;
    }
    return x;
}


function testELIF(a, b){
    let x;
    if (a < b){
        x = a + b;
    } else if (a > b){
        x = a - b;
    } else {
        x = a * b;
    }
    return x;
}


function testFactorial(a) {
    let x = 1;
    for (let i = 1; i < a + 1; i++){
        x *= i; 
    }
    return x;
}


function cont(){
    for (let i = 1; i < 10; i = i + 1) {
        if (i == 5) {
          continue;
        }
        console.log('i= ' + i);
      }
}


var printText = function(a) {console.log(a);};



var textString = "Hello, world!";
//console.log(textString.length);
//console.log(textString.toUpperCase())



function Person(name, age, year){
    this.name = name;
    this.age = age;
    this.year = year;
}

var empl1 = new Person('Tork', '26', '2000');
//console.log(empl1.name)

empl1.name = 'Torin';
//console.log(empl1.name)
//console.log(empl1)

var person1 = {}
person1.sayAge = function(n){
    console.log('Person is ' + n + ' years old');
}
//person1.sayAge(15);

var pers = {
    name : 'Roma',
    age: 26,
    hiredYear: 2016
}
pers.sayAll = function() {
    for (let i in this) {
        if (typeof this[i] !== 'function') {
            console.log(i + ' is ' + this[i]);
        }
       
    }
}
//pers.sayAll();


var cat = 'Cat';
var dog = 'dog';
var bla = 'bla';
var long_string = 'this,is,message,with,comma'
// console.log(cat.charAt(0));
// console.log(cat.concat(dog, bla));
// console.log(long_string.split(','));

function testStr(a, b) {
    let x = '';
    return x.concat(a.toUpperCase(), b.toLowerCase());
}
//console.log(testStr('Hello', 'World!'))


var g = 'TopGTopGTopG'
// console.log(g.slice(1,4))
// console.log(g.replace('G', ''))



var myArray = new Array(10);
myArray[3] = "Кузнецов";
myArray[0] = "Иванов";
myArray.push("Сидоров", 2); 
myArray.unshift("Сергеев", "Дмитриев") 
//console.log(myArray)

myString = myArray.join("_");
//console.log(myString)
//console.log(myArray.concat("Смит")); 

function testArray(a, b) {
    let array = (a + b).split('');
    array.unshift('Иванов');
    return array.reverse().join('');
}

console.log(testArray(4326, 297515))
