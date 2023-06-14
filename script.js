// =============== 1 Pillars

function pillars(numPill, dist, width) {
    if(numPill == 1) {
        return 0;
    }
    if(numPill == 2) {
        return dist*100;
    }
    if(numPill > 2) {
        return dist*100*(numPill-1) + (numPill-2)*width;
    }
}

// =============== 2 Calculate average
function findAverage(array) {    
    if(array.length > 0) {
        let sum = 0;
        for (let i in array) {
            sum += +array[i];
        }
        return sum / array.length;
    }
    return 0;
}

// =============== 3 Beginner Series #1 School Paperwork
function paperwork(n, m) {
    if (n < 0 || m < 0) {
        return 0;
    } else {
        return n*m;
    }
}

// =============== 4 Create Phone Number
function createPhoneNumber(numbers) {
    let str = "";
    for (let i = 0; i < numbers.length; i++) {
        if (i == 0) {
            str += "(" + numbers[i];
        } else if (i == 2) {
            str += numbers[i] + ") ";
        } else if (i == 5) {
            str += numbers[i] + "-";
        } else {
            str += numbers[i];
        } 
    }
    return str;
}

// =============== 5 Sum of two lowest positive integers
function disemvowel(str) {
    function sumTwoSmallestNumbers(numbers) {  
        let first = Math.min(...numbers);
        numbers.splice(numbers.indexOf(first), 1);
        let second = Math.min(...numbers);
        return first + second;
    }
}

// =============== 6 Be Concise IV - Index of an element in an array
function find(a, e) {
    return a.includes(e) ? a.indexOf(e) : "Not found";
}

// =============== 7 Count the number of cubes with paint on
function countSquares(cuts){
    return (cuts ? 6 * Math.pow(cuts, 2) + 2 : 1);
}

// =============== 8 Keep Hydrated!
function litres(time) {
    return Math.floor(time * 0.5);
}

// =============== 9 Total amount of points
function points(games) {
    let sum = 0;
    for (let i = 0; i < games.length; i++) {        
        if (+games[i][0] > +games[i][2]) {
            sum += 3;
        }
        if (+games[i][0] < +games[i][2]) {
            sum += 0;
        }
        if (+games[i][0] == +games[i][2]) {
            sum += 1;
        }
    }    
    return sum;
}

// =============== 10 Training JS #18: Methods of String object--concat() split() and its good friend join()
function splitAndMerge(string, separator) {
    let words = string;
    return words.split(" ").map(index => index.split("").join(separator)).join(" ");
}

// =============== 11 Name Shuffler
function nameShuffler(str){
    let words = str.split(" ");
    return words[1] + " " + words[0];
}

// =============== 12
function joinStrings(string1, string2){
    return `${string1} ${string2}`;
}

// =============== 13
function validateHello(greetings) {
    // let arr = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
    // if (arr.indexOf(greetings.toLowerCase()) != -1) {
    //     return true;
    // } else {
    //     return false;
    // }
    let res =/(hello|ciao|salut|hallo|hola|ahoj|czesc)/i.test(greetings.toLowerCase());
    return res;
}

// =============== 14 Thinkful - Logic Drills: Traffic light
function updateLight(current) { 
    let arr = ["green", "yellow", "red"];
    if (arr.indexOf(current) != -1 && arr.indexOf(current) != arr.length - 1) {
        return arr[arr.indexOf(current) + 1];
    }
    if (arr.indexOf(current) != -1 && arr.indexOf(current) == arr.length - 1) {
        return arr[0];
    }
}

// =============== 15 Is he gonna survive?
function hero(bullets, dragons){
    if (bullets / 2 >= dragons) {
        return true;
    } else {
        return false;
    }
}

// =============== 16 Sum of positive
function positiveSum(arr) {
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

// =============== 17 Convert number to reversed array of digits
function digitize(n) {
    let arr = [];
    if (n == 0) {
        arr[0] = 0;
        return arr;
    } else if (n < 0) {
        arr = `${n}`.split("");
        arr.shift();

    } else {
        arr = `${n}`.split(""); 
        arr.reverse();
        let arrNun = [];
        for (let i = 0; i < arr.length; i++) {
            arrNun[i] = +arr[i];
        } 
        return arrNun;
    }
}

// =============== 18 Opposite number
function opposite(number) {
    return -number;
}

// =============== 19 Grasshopper - Check for factor
function checkForFactor (base, factor) {
    if (base % factor == 0) {
        return true;
    } else {
        return false;
    }
}

// =============== 20 Returning Strings
function greet(name){
    return `Hello, ${name} how are you doing today?`;
}

// =============== 21 Opposites Attract
function lovefunc(flower1, flower2){
    if (flower1 % 2 == 0 && flower2 % 2 != 0 || flower1 % 2 != 0 && flower2 % 2 == 0) return true;
    return false;
}

// =============== 22 Get the mean of an array
function getAverage(marks){
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return Math.floor(sum / marks.length);
}

// =============== 23 Abbreviate a Two Word Name
function abbrevName(name) {
    let arr = name.split(" ");
    return `${arr[0][0].toUpperCase()}.${arr[1][0].toUpperCase()}`;
}

// =============== 24 Count Odd Numbers below n
function oddCount(n) {
    // let arr = [];
    // for (let i = 0; i < n; i++) {
    //     if (i % 2 != 0) {
    //         arr.push(i);
    //     }
    // }
    // return arr.length;
    return Math.floor(n / 2);
}

// =============== 25 String repeat
function repeatStr (n, s) {
    let str = "";
    for (let i = 0; i < n; i++) {
            str += s;
    }
    return str;
}

// =============== 26 Function 1 - hello world
function greet() {
    return "hello world!";
}

// =============== 27 Century From Year
function century(year) {
    return Math.floor(year / 100) + ((year % 100) ? 1 : 0);
}

// =============== 28 Is n divisible by x and y?
function isDivisible(n, x, y) {
    if (n % x == 0 && n % y == 0) return true;
    return false;
}

// =============== 29 Reversed Strings
function solution(str) {
    return str.split("").reverse().join("");
}

// =============== 30 Multiply 
function multiply(a, b) {
    return a * b;
}

// =============== 31 Reversed Words
function reverseWords(str) {
    return str.split(" ").reverse().join(" ");
}

// =============== 32 Beginner Series #2 Clock
function past(h, m, s) {
    return h * 3600000 + m * 60000 + s * 1000;
}

// =============== 33 Powers of 2
function powersOfTwo(n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        arr.push(2 ** i);
    }
    return arr;
}

// =============== 34 Beginner - Reduce but Grow
function grow(x) {
    let mult = 1;
    for (let i = 0; i < x.length; i++) {
        mult *= x[i];
    }
    return mult;
}

// =============== 35 Grasshopper - Summation
var summation = function (num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

// =============== 36 You Can't Code Under Pressure #1
function doubleInteger(i) {
    return i * 2;
}

// =============== 37 Third Angle of a Triangle
function otherAngle(a, b) {
    return 180 - a - b;
}

// =============== 38 Remove First and Last Character Part Two
function array(string) {
    let arr = string.split(",");
    if (arr.length < 3) {
        return null;
    } else {
        arr.shift();
        arr.pop();
        return arr.join(" ");
    }    
}

// =============== 39 Invert values
function invert(array) {
    let arrayNew = array.map((elem) => -elem);
    return arrayNew;
}

// =============== 40 Function 2 - squaring an argument
function square(n) {
    return n * n;
}

// =============== 41 Removing Elements
function removeEveryOther(arr) {
    let arrayNew = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arrayNew.push(arr[i]);
        }
    }
    return arrayNew;
}

// =============== 42 Remove the time
function shortenToDate(longDate) {
    return longDate.split(", ")[0];
}

// =============== 43 Grasshopper - Messi goals function
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// =============== 44 Remove First and Last Character
function removeChar(str){
    let arr = str.split("");
    arr.shift();
    arr.pop();
    return arr.join("");
}

// =============== 45 Miles per gallon to kilometers per liter
function converter (mpg) {
    return +(mpg / 4.54609188 * 1.609344).toFixed(2);
}

// =============== 46 Testing 1-2-3
var number = function(array) {
    let arrayNew = [];
    for (let i = 0; i < array.length; i++) {
        arrayNew.push(`${i+1}: ${array[i]}`);
    }
    return arrayNew;
}

// =============== 47 Sum - Square Even, Root Odd
const sumSquareEvenRootOdd = nums => {
    let sum = 0;
    let arrNew = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            arrNew.push(nums[i] * nums[i]);
        } else {
            arrNew.push(Math.sqrt(nums[i]));
        }
    }
    for (let i = 0; i < arrNew.length; i++) {
        sum += arrNew[i];
    }
    return +sum.toFixed(2);
}

// =============== 48 Product of Largest Pair
function maxProduct(a) {
    let max1 = 0;
    let max2 = 0;
    for (let i = 0; i < a.length; i++) {
        if (max1 < a[i]) {
            max2 = max1;
            max1 = a[i];
        } else if (max2 < a[i]) {
            max2 = a[i];
        }
    }
    return max1 * max2;
}

// =============== 49 Running out of space
function spacey(array) {
    let arrayNew = [];
    let str = "";
    for (let i = 0; i < array.length; i++) {
        str += array[i];
        arrayNew.push(str);
    }
    return arrayNew;
}

// =============== 50 Length and two values
function alternate(n, firstValue, secondValue){
    let arr = [];
    if (n > 0) {
        for (let i = 0; i < n; i++) {
            if (i % 2 == 0) {
                arr.push(firstValue);
            } else {
                arr.push(secondValue);
            }
        }
    }
    return arr;    
}

// =============== 51 If you can't sleep, just count sheep!!
let countSheep = function (num) {
    let str = "";
    if (num > 0) {
        for (let i = 0; i < num; i++) {
            str += `${i+1} sheep...`;
        }
    }
    return str;
}

// =============== 52 Calculate BMI
function bmi(weight, height) {
    let bmi = weight / (height * height);
    if (bmi <= 18.5) return "Underweight";
    if (bmi <= 25.0) return "Normal";
    if (bmi <= 30.0) return "Overweight";
    if (bmi > 30) return "Obese";
}

// =============== 53 Cat years, Dog years
let humanYearsCatYearsDogYears = function(humanYears) {
    let cat = 0;
    let dog = 0;
    if (humanYears == 1) dog = 15, cat = 15;
    if (humanYears == 2) dog = 15 + 9, cat = 15 + 9;
    if (humanYears > 2) dog = ((humanYears - 2) * 5) + 15 + 9, cat = ((humanYears - 2) * 4) + 15 + 9;
    return [humanYears,cat,dog];
}

// =============== 54 Remove String Spaces
function noSpace(x) {
    let arr = x.split(" ");
    return arr.join("");
}

// =============== 55 Chuck Norris VII - True or False? (Beginner)
function ifChuckSaysSo() {
    return 0 !== 0;
}

// =============== 56 Collatz
function collatz(n) {
    let arr = [];
    while (n != 1) {
        arr.push(n);
        if (n % 2 == 0) {
            n = n / 2;
        } else {
            n = (3 * n) + 1;        
        }
    }
    arr.push(1);
    return arr.join("->");
}

// =============== 57 Ore Numbers
function isOre(n) {
    let arr = [];
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if(n % i == 0) {
            arr.push(i);
        }
    }
    // for (let i = 0; i < arr.length; i++) {
    //     sum += 1 / arr[i];
    // }
    // return Number.isInteger(arr.length / sum);
    let ore = Math.round((arr.length / arr.reduce((a, b)=> a + 1 / b, 0)) * 1000) / 1000;
    return ore == parseInt(ore);
}

// =============== 58 Two Sum
function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let k = i + 1; k < numbers.length; k++) {
            if (numbers[i] + numbers[k] == target) {
                return [i, k]
            }
        }
    }
}

// =============== 59 Detect Pangram
function isPangram(string) {
    let symb = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arr = string.split(" ").join("").split("");
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < symb.length; k++) {
            if(arr[i].toLowerCase() == symb[k]) {
                symb.splice(k, 1);
            }
        }
    }
    return symb.length == 0;
}

// =============== 60 Character with longest consecutive repetition
function longestRepetition(s) {
    let c = 0;
    let symb = ''; 
    return s.toLowerCase().split('').reduce((a, b) => {
      if(b == symb) {
        c++;
      } else {
        c = 1;
      }  
      if(c > a[1]) {
        a[1] = c;
        a[0] = b;
      }  
      symb = b;
      return a;
    }, ['', 0]);
}

// =============== 61 Simple multiplication
function simpleMultiplication(number) {
    if (number % 2 == 0) {
        return number * 8;
    } else {
        return number * 9;
    }
}

// =============== 62 Unexpected parsing
function getStatus(isBusy) {
    let msg = (isBusy ? "busy" : "available");
    let obj = {
        status: msg,
    };
    return obj;
}

// =============== 63 Counting sheep
function countSheeps(arrayOfSheep) {
    let count = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            count++;
        }
    }
    return count;
}

// =============== 64 Power
function numberToPower(number, power) {
    let n = 1;
    if (power == 0) {
        return n;
    }
    for (let i = 0; i < power; i++) {
        n *= number;
    }
    return n;
}

// =============== 65 All Star Code Challenge #18
function strCount(str, letter) {  
    let count = 0;
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        if (letter == arr[i]) {
            count++;
        }
    }
    return count;
}

// =============== 66 Square(n) Sum
function squareSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] * numbers[i];
    }
    return sum;
}

// =============== 67 ASCII Total
function uniTotal(string) {
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
        sum += string.charCodeAt(i);
    }
    return sum;
}

// =============== 68 Exclusive "or" (xor) Logical Operator
function xor(a, b) {
    return a != b;
}

// =============== 69 Even or Odd
function evenOrOdd(number) {
    if (number % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// =============== 70 Return to Sanity
function mystery() {
    let results = {
        sanity: 'Hello',
    };
    return results;
}

// =============== 71 Scramblies
function scramble(str1, str2) {
    let arr1 = str1.split("");
    let arr2 = str2.split("");
    for (let i = 0; i < arr1.length; i++) {
        for (let k = 0; k < arr2.length; k++) {
            if (arr1[i] == arr2[k]) {
                arr2.splice(k, 1);
            }
        }
    }
    return arr2.length == 0;
}

// =============== 72 Reversed sequence
const reverseSeq = n => {
    let arr = [];
    for (let i = n; i > 0; i--) {
        arr.push(i);
    }
    return arr;
}

// =============== 73 Jenny's secret message
function greet(name) {
    if(name === "Johnny") return "Hello, my love!";
    return "Hello, " + name + "!";
}

// =============== 73 Array plus array
function arrayPlusArray(arr1, arr2) {
    const array = arr1.concat(arr2);
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// =============== 74 Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (mpg * fuelLeft >= distanceToPump) {
        return true;
    } else {
        return false;
    }
}

// =============== 75 Convert a String to a Number!
const stringToNumber = function(str) {
    return +str;
}

// =============== 76 altERnaTIng cAsE <=> ALTerNAtiNG CaSe
String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a == a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('');
}

// =============== 77 Grasshopper - Debug sayHello
function sayHello(name) {
    return `Hello, ${name}`;
}

// =============== 78 Find Maximum and Minimum Values of a List
var min = function(list) {
    let min = list[0];
    for (let i = 0; i < list.length; i++) {
        if (min > list[i]) {
            min = list[i];
        }
    }
    return min;
}
var max = function(list) {
    let max = list[0];
    for (let i = 0; i < list.length; i++) {
        if (max < list[i]) {
            max = list[i];
        }
    }
    return max;
}

// =============== 79 Enumerable Magic #4 - True for None?
function none(arr, fun) {
    for(let i = 0; i < arr.length; i++) {
      if(fun(arr[i])) return false;
    }
    return true;
}

// =============== 80 Remove exclamation marks
function removeExclamationMarks(s) {
    let arr = s.split("");
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == "!") {
            arr.splice(i, 1);
        }
    }
    return arr.join("");
}

// =============== 81 Sum The Strings
function sumStr(a, b) {
    return `${+a + +b}`;
}

// =============== 82 Basic variable assignment
// a = "code";
// b = "wa.rs";
// name = a + b;

// =============== 83 String Templates - Bug Fixing #5
function buildString(...template) {
    return `I like ${template.join(', ')}!`;
}

// =============== 84 Switch it Up!
function switchItUp(number) {
    str = "";
    switch (number) {
        case 0: 
            str = "Zero";
            break;
        case 1: 
            str = "One";
            break;
        case 2: 
            str = "Two";
            break;
        case 3: 
            str = "Three";
            break;
        case 4: 
            str = "Four";
            break;
        case 5: 
            str = "Five";
            break;
        case 6: 
            str = "Six";
            break;
        case 7: 
            str = "Seven";
            break;
        case 8: 
            str = "Eight";
            break;
        case 9: 
            str = "Nine";
            break;
    }
    return str;
}

// =============== 85 Grasshopper - Basic Function Fixer
function addFive(num) {
    var total = num + 5;
    return total;
}

// =============== 86 Keep up the hoop
function hoopCount(n) {
    if (n >= 10) return "Great, now move on to tricks";
    return "Keep at it until you get it";   
}

// =============== 87 Grasshopper - Messi Goals
var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;
var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

// =============== 88 Are You Playing Banjo?
function areYouPlayingBanjo(name) {
    if (name[0] == "R" || name[0] == "r") {
        return name + " plays banjo";
    } else {
        return name + " does not play banjo";
    }
}

// =============== 89 Super Duper Easy
function problem(x) {
    if (typeof x == "string") {
        return "Error";
    } else {
        return x * 50 + 6;
    }
}

// =============== 90 Alan Partridge II - Apple Turnover
function apple(x) {
    if (+x * +x > 1000) {
        return "It's hotter than the sun!!";
    } else {
        return "Help yourself to a honeycomb Yorkie for the glovebox.";
    }
}

// =============== 91 Count the Monkeys!
function monkeyCount(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}

// =============== 92 Sum of angles
function angle(n) {
    return 180 * (n - 2);
}

// =============== 93 Two Oldest Ages
function twoOldestAges(ages) {
    let max1 = 0;
    let max2 = 0;
    for (let i = 0; i < ages.length; i++) {
        if (max1 < ages[i]) {
            max2 = max1;
            max1 = ages[i];
        } else if (max2 < ages[i]) {
            max2 = ages[i];
        }
    }
    return [max2, max1];
}

// =============== 94 Two to One
function longest(s1, s2) {
    let str = s1.concat(s2);
    let arr = str.split("");
    let set = new Set(arr);
    let arrNew = Array.from(set);
    arrNew.sort();
    return arrNew.join("");
}

// =============== 95 Sum of odd numbers
function rowSumOddNumbers(n) {
	return n * n * n;
}

// =============== 96 Printer Errors
function printerError(s) {
    return `${s.replace(/[a-m]/g, "").length}/${s.length}`;
}

// =============== 97 Vowel Count
function getCount(str) {
    let s = str.trim().split(" ");
    let s1 = s.join("");
    return s1.length - s1.replace(/[a, e, i, o, u]/g, "").length;
}

// =============== 98 Exes and Ohs
function XO(str) {
    let x = str.toLowerCase().replace(/[x]/g, "");
    let o = str.toLowerCase().replace(/[o]/g, "");
    return x.length == o.length;
}

// =============== 99 Mumbling
function accum(s) {
	let arr = s.split("");
    let arrNew = [];
    for (let i = 0; i < arr.length; i++) {
        let str = "";
        for (let k = 0; k <= i; k++) {            
            if (k == 0) {
                str += arr[i].toUpperCase();
            } else {
                str += arr[i].toLowerCase();
            }            
        }
        arrNew.push(str);
    }
    return arrNew.join("-");
}

// =============== 100 String ends with?
function solution(str, ending) {
    return str.endsWith(ending);
}

// =============== 101 Basic Mathematical Operations
function basicOp(operation, value1, value2) {
    if (operation == '+') return value1 + value2;
    if (operation == '-') return value1 - value2;
    if (operation == '*') return value1 * value2;
    if (operation == '/') return value1 / value2;
}

// =============== 102 Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
    let sum = 0;
    let count = 0;
    if (input.length == 0) return [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            count++;
        }
        if (input[i] < 0) {
            sum += input[i];
        }
    }
    return [count, sum];
}

// =============== 103 You only need one - Beginner
function check(a, x) {
    return a.indexOf(x) != -1;
}

// =============== 104 MakeUpperCase
function makeUpperCase(str) {
    return str.toUpperCase();
}

// =============== 105 Return the day
function whatday(num) { 
    switch (num) {
        case 1:
            return "Sunday";
            break;
        case 2:
            return "Monday";
            break;
        case 3:
            return "Tuesday";
            break;
        case 4:
            return "Wednesday";
            break;
        case 5:
            return "Thursday";
            break;
        case 6:
            return "Friday";
            break;
        case 7:
            return "Saturday";
            break;
        default: 
            return "Wrong, please enter a number between 1 and 7";
    }
}

// =============== 106 Enumerable Magic - Does My List Include This?
function include(arr, item) {
    return arr.indexOf(item) != -1;
}

// =============== 107 Beginner Series #4 Cockroach
function cockroachSpeed(s) {
    return Math.floor(s / 3.6 * 100);
}

// =============== 108 Area or Perimeter
const areaOrPerimeter = function(l , w) {
    if (l == w) {
        return l * w;
    } else {
        return (2 * l) + (2 * w);
    }
}

// =============== 109 Multiplication table for number
function multiTable(number) {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
        let str = "";
        str += `${i} * ${number} = ${i * number}`;
        arr.push(str);
    }
    return arr.join("\n");
}

// =============== 110 Type of sum
function typeOfSum(a, b) {
    return typeof (a + b);
}

// =============== 111 Convert to Binary
function toBinary(n) {
    return +n.toString(2);
}

// =============== 112 I love you, a little , a lot, passionately ... not at all
function howMuchILoveYou(nbPetals) {
    let arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    if (nbPetals < 7) {
        return arr[nbPetals - 1];
    } else {
        if (nbPetals % 6 == 0) return arr[0];
        return arr[(nbPetals % 6) - 1];
    }
}

// =============== 113 Convert boolean values to strings 'Yes' or 'No'.
function boolToWord(bool) {
    if (bool) return 'Yes';
    return 'No';
}

// =============== 114 Switch/Case - Bug Fixing #6
function evalObject(value) {
    var result = 0;
    switch(value.operation) {
      case'+': result = value.a + value.b; break;
      case'-': result = value.a - value.b; break;
      case'/': result = value.a / value.b; break;
      case'*': result = value.a * value.b; break;
      case'%': result = value.a % value.b; break;
      case'^': result = Math.pow(value.a, value.b);
    }
    return result;
}

// =============== 115 Remove duplicates from list
function distinct(a) {
    let set = new Set(a);
    return Array.from(set);
}

// =============== 116 Grasshopper - Personalized Message
function greet (name, owner) {
    if (name == owner) return 'Hello boss';
    return 	'Hello guest';
}

// =============== 117 Get Planet Name By ID
function getPlanetName(id){
    let name = "";
    switch(id){
      case 1:
        name = 'Mercury';
        break;
      case 2:
        name = 'Venus';
        break;
      case 3:
        name = 'Earth';
        break;
      case 4:
        name = 'Mars';
        break;
      case 5:
        name = 'Jupiter';
        break;
      case 6:
        name = 'Saturn';
        break;
      case 7:
        name = 'Uranus';
        break;
      case 8:
        name = 'Neptune';
        break;
    }
    return name;
}

// =============== 118 For Twins: 1. Types
function typeValidation(variable, type) {
    return typeof variable == type;
}

// =============== 119 Mr. Freeze
// Object.freeze(MrFreeze);

// =============== 120 Count by X
function countBy(x, n) {
    let z = [];
    for (let i = x; i <= n * x; i = i + x) {
        z.push(i);
    }
    return z;
}

// =============== 121 Convert a string to an array
function stringToArray(string) {
    return string.split(" ");
}

// =============== 122 Bin to Decimal
function binToDec(bin) {
    return parseInt(bin, 2);
}

// =============== 123 What is between?
function between(a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
        arr.push(i);
    }
    return arr;
}

// =============== 124 Find numbers which are divisible by given number
function divisibleBy(numbers, divisor) {
    let arr = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % divisor == 0) {
            arr.push(numbers[i]);
        }        
    }
    return arr;
}

// =============== 125 Double Char
function doubleChar(str) {
    let arr = str.split("");
    let arrNew = [];
    for (let i = 0; i < arr.length; i++) {
        arrNew.push(arr[i]);
        arrNew.push(arr[i]);        
    }
    return arrNew.join("");
}  

// =============== 126 Factorial
function factorial(n) {
    let mult = 1;
    for (let i = 1; i <= n; i++) {
        mult *=  i;       
    }
    return mult;
}

// =============== 127 Find the stray number
function stray(numbers) {
    let arr = numbers.sort();
    if (arr[0] != arr[1]) {
      return arr[0];
    } else {
      return arr[arr.length - 1];
    }
}

// =============== 128 Power of two
function isPowerOfTwo(n) {
    return Math.log2(n) % 1 == 0 ? true : false;
}

// =============== 129 No oddities here
function noOdds(values) {
    let arr = [];
    for (let i = 0; i < values.length; i++) {
        if (values[i] % 2 == 0) arr.push(values[i]);   
    }
    return arr;
}

// =============== 130 Between Extremes
function betweenExtremes(numbers) {
    let min = numbers[0];
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (min > numbers[i]) min = numbers[i];
        if (max < numbers[i]) max = numbers[i];   
    }
    return max - min;
}

// =============== 131 Sum even numbers
function sumEvenNumbers(input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 == 0) sum += input[i];   
    }
    return sum;
}

// =============== 132 How many consecutive numbers are needed?
function consecutive(arr) {
    arr.sort((a, b) => a - b);
    let arrNew = [];
    for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
        arrNew.push(i);
    }
    return arrNew.length - arr.length;
}

// =============== 133 Largest Elements
function largest(n, array) {
    let arrNew = [];
    array.sort((a, b) => a - b);
    array.reverse();
    for (let i = 0; i < n; i++) {
        arrNew.push(array[i]);
    }
    return arrNew.reverse();
}

// =============== 134 Odd-Even String Sort
function sortMyString(s) {
    let arr = s.split("");
    let ar1 = [];
    let ar2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            ar1.push(arr[i]);
        } else {
            ar2.push(arr[i]);
        }
    }
    return `${ar1.join("")} ${ar2.join("")}`
}

// =============== 135 C.Wars
function initials(n) {
    let arr = n.split(" ");
    let arrNew = [];
    for (let i = 0; i < arr.length - 1; i++) {
        arrNew.push(arr[i].split("")[0].toUpperCase());
    }
    let arr1 = arr[arr.length - 1].split("");
    let arrNew1 = [];
    for (let i = 0; i < arr1.length; i++) {
        if (i == 0) {
            arrNew1.push(arr1[i].toUpperCase());
        } else {
            arrNew1.push(arr1[i]);
        }
    }
    arrNew.push(arrNew1.join(""));
    return arrNew.join(".");
}

// =============== 136 Convert a Number to a String!
function numberToString(num) {
    return num.toString();
}

// =============== 137 Sum Mixed Array
function sumMix(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += +x[i];
    }
    return sum;
}

// =============== 138 Hex to Decimal
function hexToDec(hexString) {
    return parseInt(hexString, 16);
}

// =============== 139 get character from ASCII Value
function getChar(c) {
    return String.fromCharCode(c);
}

// =============== 140 Is this my tail?
function correctTail(bod, tail) {     
    if (bod[bod.length - 1] == tail) {
        return true;
    } else {
        return false;
    }
}

// =============== 141 Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
    let arr = arr1.concat(arr2);
    let set = new Set(arr.sort((a, b) => a - b));
    return Array.from(set);
}

// =============== 142 Fake Binary
function fakeBin(x) {
    let arr = x.split("");
    let arrNew = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 5) {
            arrNew.push(0);
        } else {
            arrNew.push(1);
        }
    }
    return arrNew.join("");
}

// =============== 143 Find the smallest integer in the array
class SmallestIntegerFinder {
    findSmallestInt(args) {
        let min = args[0];
        for (let i = 0; i < args.length; i++) {
            if (min > args[i]) {
                min = args[i];
            }
        }
        return min;
    }
}

// =============== 144 Capitalization and Mutability
function capitalizeWord(word) {
    let newStr = word[0].toUpperCase() + word.slice(1); 
    return newStr;
}

// =============== 145 Well of Ideas - Easy Version
function well(x) {
    let count = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] == 'good') count++;
    }
    if (count == 0) {
        return 'Fail!';
    } else if (count == 1) {
        return 'Publish!';
    } else if (count > 1) {
        return 'I smell a series!';
    }
}

// =============== 146 FIXME: Replace all dots
let replaceDots = function(str) {
    return str.split(".").join("-");
}

// =============== 147 Find the position!
function position(letter) {
    let symb = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return `Position of alphabet: ${symb.indexOf(letter) + 1}`;
}

// =============== 148 Sum without highest and lowest number
function sumArray(array) {
    if (array == null || array.length < 2) return 0;
    array.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 1; i < array.length - 1; i++) {
        sum += array[i];
    }
    return sum;
}

// =============== 149 Reverse List Order
function reverseList(list) {
    return list.reverse();
}

// =============== 150 Define a card suit
function defineSuit(card) {
    let s = card.substr(-1);
    switch(s) {
       case '♣': return 'clubs';
       case '♦': return 'diamonds';
       case '♥': return 'hearts';
       default: return 'spades';
    }
}

// =============== 151 Stringy Strings
function stringy(size) {
    let str = "";  
    for (let i = 0; i < size; i++) {
        if (i % 2 == 0) {
            str += 1;
        } else {
            str += 0;
        }
    }
    return str;
}

// =============== 152 Lario and Muigi Pipe Problem
function pipeFix(numbers) {
    let arr = [];
    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
        arr.push(i);
    }
    return arr;
}

// =============== 153 USD => CNY
function usdcny(usd) {
    return `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
}

// =============== 154 Sentence Smash
function smash(words) {
    return words.join(" ");
}

// =============== 154 Hello, Name or World!
function hello(name) {
    if (name) { 
        return "Hello, " + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!';
    } else {
        return "Hello, World!";
    }
}

// =============== 155 Sum of Multiples
function sumMul(n,m) {
    sum = 0;
    if (m > n) {
        for (let i = n; i <= m; i++) {
            if (i % n == 0) {
                sum += i;
            }
        }
        return sum;
    } else {
        return "INVALID";
    }
}

// =============== 156 A Needle in the Haystack
function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf("needle")}`;
}

// =============== 157 Ensure question
function ensureQuestion(s) {
    if (s[s.length - 1] == "?") {
        return s;
    } else {
        return s + "?";
    }
}

// =============== 158 Grasshopper - Function syntax debugging
function main(verb, noun) {
  return verb + noun;
}

// =============== 159 Incorrect division method
const solve = (x, y) => x / y;

// =============== 160 Are arrow functions odd?
function odds(values) {
    let arr = [];
    for (let i = 0; i < values.length; i++) {
        if (values[i] % 2 != 0) {
            arr.push(values[i]);
        }
    }
    return arr;
}

// =============== 161 Divide and Conquer
function divCon(x) {
    let s1 = 0;
    let s2 = 0;
    for (let i = 0; i < x.length; i++) {
        if ( typeof x[i] == "number") {
            s1 += x[i];
        } else {
            s2 += +x[i];
        }
    }
    return s1 - s2;
}

// =============== 162 Palindromes Here and There
function convertPalindromes(numbers) {
    let arr = [];
    for (let i = 0; i < numbers.length; i++) {
        if (`${numbers[i]}` == `${numbers[i]}`.split("").reverse().join("")) {
            arr.push(1);
        } else {
            arr.push(0);
        }
    }
    return arr;
}

// =============== 163 Heron's formula
function heron(a, b, c) {
    let s = (a + b + c) / 2;
    return +Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);
}

// =============== 164 Ch4113ng3
function nerdify(txt) {
    txt=txt.replace(/a|A/g,'4');
    txt=txt.replace(/e|E/g,'3');
    txt=txt.replace(/l/g,'1');
    return txt;
}

// =============== 165 Greet Me
// let greet = function(n) {
//     return 'Hello ' + n.slice(0, 1).toUpperCase() + n.slice(1).toLowerCase() + '!';
// }

// =============== 166 SpeedCode #2 - Array Madness
function arrayMadness(a, b) {
    let s1 = 0;
    let s2 = 0;
    for (let i = 0; i < a.length; i++) {
        s1 += Math.pow(a[i], 2);
    }
    for (let i = 0; i < b.length; i++) {
        s2 += Math.pow(b[i], 3);
    }
    return s1 > s2;
}

// =============== 167 Find the Difference in Age between Oldest and Youngest Family Members
function differenceInAges(ages) {
    let arr = ages.sort((a, b) => a - b);
    return [arr[0], arr[arr.length - 1], (arr[arr.length - 1] - arr[0])];
}


// =============== 168 get ascii value of character
function getASCII(c) {
    return c.charCodeAt(0);
}

// =============== 169 Triple Trouble
function tripleTrouble(one, two, three) {
    let str = "";
    let c = 0;
    while (c < one.length) {
        str += one[0 + c];
        str += two[0 + c];
        str += three[0 + c];
        c++;
    }
    return str;
}

// =============== 170 Grasshopper - Terminal game combat function
function combat(health, damage) {
    let a = health - damage;
    if (a < 0) {
        return 0;
    } else {
        return a;
    }
}

// =============== 171 easy logs

function logs(x , a, b) {
    return (Math.log(a*b) / Math.log(x));
}

// =============== 172 Reversing Words in a String
function reverse(string) {
    return string.split(" ").reverse().join(" ");
}

// =============== 173 Get number from string
function getNumberFromString(s) {
    let i = /[0-9]/g;
    return +s.match(i).join("");
}

// =============== 174 validate code with simple regex
function validateCode(code) {
    let str = "" + code;
    let arr = str.split("");
    if (+arr[0] == 1 || +arr[0] == 2 || +arr[0] == 3) {
        return true;
    } else {
        return false;
    }
}

// =============== 175 Simple Comparison?
function add(a, b) {
	return +a == +b;
}

// =============== 176 Grasshopper - Combine strings
function combineNames(a, b) {
    return a + " " + b;
}

// =============== 177 Formatting decimal places #0
function twoDecimalPlaces(n) {
    return +n.toFixed(2);
}

// =============== 178 Printing Array elements with Comma delimiters
function printArray(array) {
    return array.join(",");
}

// =============== 179 Improving Math.round(x)
Math.roundTo = function(number, precision) {
    return number.toFixed(precision);
}

// =============== 180 Grasshopper - Order of operations
function orderOperations() {
    return (2 + 2) * (2 + 2) * 2;
}

// =============== 181 draw me a chessboard
function chessBoard(rows, columns) {
    let arr = [];
    for (let i = 0; i < rows; i++) {
        let ar = [];
        for (let k = i; k < columns + i; k++) {
            if (k % 2 == 0) {
                ar.push("O");
            } else {
                ar.push("X");
            }
        }
        arr.push(ar);
    }
    return arr;
}

// =============== 182 Ciphers #1 - The 01 Cipher
function encode(plaintext) {
    let symb = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arr = plaintext.split("");
    let arrNew = [];
    for (let i = 0; i < arr.length; i++) {
        if (symb.indexOf(arr[i].toLowerCase()) != -1) {
            if (symb.indexOf(arr[i].toLowerCase()) % 2 == 0) {
                arrNew.push("0");
            } else {
                arrNew.push("1");
            }
        } else {
            arrNew.push(arr[i]);
        }
    }
    return arrNew.join("");
}

// =============== 183 Arithmetic progression
function arithmeticSequenceElements(a, d, n) {
	let arr = [];
    let out = a;
    arr.push(out);
    for (let i = 1; i < n; i++) {
        out += d;
        arr.push(out);
    }
    return arr.join(", ");
}

// =============== 184 Fix string case
// function solve(s) {
//     let up=s.split('').filter(v=>v.match(/[A-Z]/)).length
//     let down=s.split('').filter(v=>v.match(/[a-z]/)).length
//     return down>=up?s.toLowerCase():s.toUpperCase();
// }

// =============== 185 Geometric Progression Sequence
function geometricSequenceElements(a, r, n) {
    let arr = [];
    let out = a;
    arr.push(out);
    for (let i = 1; i < n; i++) {
        out *= r;
        arr.push(out);
    }
    return arr.join(", ");
}

// =============== 186 Reverse words
function reverseWords(str) {
    // return str.split(" ").reverse().join(" ");
    let arr = str.split(" ");
    let arrNew = [];
    for (let i = 0; i < arr.length; i++) {
        arrNew.push(arr[i].split("").reverse().join(""));
    }
    return arrNew.join(" ");
}

// =============== 187 Descending Order
function descendingOrder(n) {
    let str = "" + n;
    let ar = str.split("");
    let arr = ar.sort((a, b) => a - b);
    return +arr.reverse().join("");
}

// =============== 188 Count consonants
function consonantCount(str) {
    let s = /[a, e, i, o, u]/gi;
    let strNew = str.match(s);
    return str.length - strNew.length;
}

// =============== 189 Sum of Minimums!
function sumOfMinimums(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i][0];
        for (let k = 0; k < arr[i].length; k++) {
            if (min > arr[i][k]) {
                min = arr[i][k];
            }
        }
        sum += min;
    }
    return sum;
}

// =============== 190 Sum of integers in string
function sumOfIntegersInString(s){
    return s.split(/([^0-9])/g).map(x => parseInt(x)).filter(Boolean).reduce((acc, el) => acc + el, 0)
}

// =============== 191 Debug Sum of Digits of a Number
function getSumOfDigits(integer) {
    let sum = 0;
    let str = "" + integer;
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        sum += +arr[i];
    }
    return sum;
}

// =============== 192 Beginner Series #3 Sum of Numbers
function getSum(a, b) {
    let sum = 0;
    let i1;
    let i2;
    if (a < b) {
        i1 = a;
        i2 = b;     
    } else {
        i1 = b;
        i2 = a;
    }
    for (let i = i1; i <= i2; i++) {
        sum += i;
    }
    return sum;
}

// =============== 193 Dictionary from two lists
function createDict(keys, values) {
    let obj = {};
    for (let i = 0; i < keys.length; i++) {
        if (values[i] != undefined) {
            obj[keys[i]] = values[i];
        } else {
            obj[keys[i]] = null;
        }
    }
    return obj;
}

// =============== 194 Powers of i
function pofi(n) {
    return ["1","i","-1","-i"][n % 4];
}

// =============== 195 Shortest Word
function findShort(s) {
    let arr = s.split(" ");
    let min = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i].length) {
            min = arr[i].length;
        }
    }
    return min;
}

// =============== 196 Grasshopper - Array Mean
// let findAverage = function(nums) {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//     }
//     return sum / nums.length;
// }

// =============== 197 Shifty Closures
var name;
function greet_abe() {
  name = 'Abe';
  return "Hello, " + name + '!';
} 
function greet_ben() {
  name = 'Ben'; 
  return "Hello, " + name + '!';
}

// =============== 198 Highest and Lowest
function highAndLow(numbers) {
    let ar = numbers.split(" ");
    let arr = ar.sort((a, b) => a - b);
    return `${arr[arr.length - 1]} ${arr[0]}`;
}

// =============== 199 List Filtering
function filter_list(l) {
    let ar = [];
    for (let i = 0; i < l.length; i++) {
        if (typeof l[i] == "number") {
            ar.push(l[i]);
        }
    }
    return ar;
}

// =============== 200 Leap Years
function isLeapYear(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) return true;
    return false;
}

// =============== 201 Sort Numbers
function solution(nums) {
    if (nums == null) return [];
    return nums.sort((a, b) => a - b);
}

// =============== 202 5 without numbers !!
function unusualFive() {
    return "abcde".length;
}

// =============== 203 Find Multiples of a Number
function findMultiples(integer, limit) {
    let arr = [];
    for (let i = integer; i <= limit; i++) {
        if (i % integer == 0) {
            arr.push(i);
        }
    }
    return arr;
}

// =============== 204 Return Negative
function makeNegative(num) {
    if (num > 0) {
        return -num;
    } else {
        return num;
    }
}

// =============== 205 Multiple of index
function multipleOfIndex(array) {
    let ar = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % i == 0) {
            ar.push(array[i]);
        }
    }
    return ar;
}

// =============== 206 Contamination #1 -String-
function contamination(text, char) {
    let str = "";
    for (let i = 0; i < text.length; i++) {
        str += char;
    }
    return str;
}

// =============== 207 Vowel remover
function shortcut (string) {
    return string.split(/[aeiou]/g).join('')
}

// =============== 208 Add Length
function addLength(str) {
    let ar = str.split(" ");
    let arr = [];
    for (let i = 0; i < ar.length; i++) {
        let str = "";
        str += `${ar[i]} ${ar[i].length}`;
        arr.push(str);
    }
    return arr;
}

// =============== 209 What's the real floor?
function getRealFloor(n) {
    if (n <= 0) return n;
    if (n > 0 && n < 13) return n - 1;
    if (n > 13) return n - 2;
}