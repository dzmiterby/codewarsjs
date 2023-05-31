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