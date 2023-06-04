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