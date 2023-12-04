import { testData, data } from "./data.js";

let tempNum = [];

let total = 0;

let letterHolder = [];

let found = false;

// For each letter in the array, loop through the length of the array and add each letter to a var, and check each time if the word matches one of the numbers

let constructedNumber = "nine";

function numChecker(str) {
    switch (str) {
        case "one":
            return "1";
            break;
        case "two":
            return "2";
            break;
        case "three":
            return "3";
            break;
        case "four":
            return "4";
            break;
        case "five":
            return "5";
            break;
        case "six":
            return "6";
            break;
        case "seven":
            return "7";
            break;
        case "eight":
            return "8";
            break;
        case "nine":
            return "9";
            break;
        default:
            return false;
            break;
    }
}

// Loop through entire list of test data
for (let i = 0; i < testData.length; i++) {
    // Find the first numerical number and add to tempNum arr
    for (let n = 0; n < testData[i].split("").length; n++) {
        if (parseInt(testData[i].split("")[n] % 1) <= 0) {
            tempNum.push(testData[i].split("")[n]);
            break;
        }
        for (let y = 0; y < 7; y++) {
            letterHolder.push(testData[i].split("")[y]);
            if (!numChecker(letterHolder.join("")) === false) {
                tempNum.push(numChecker(letterHolder.join("")));
                found = true;
                break;
            }
        }
        if (found === true) {
            found === false;
            break;
        }
    }

    letterHolder = [];
    // Find the second numerical number and add to tempNum arr
    for (let n = testData[i].length; n >= 0; n--) {
        // Check if it's a number
        if (parseInt(testData[i].split("")[n] % 1) <= 0) {
            tempNum.push(testData[i].split("")[n]);
            break;
        }
        // Loop through the characters to see if any match
        for (let y = 0; y < 7; y++) {
            letterHolder.unshift(testData[i].split("").reverse()[y]);
            if (!numChecker(letterHolder.join("")) === false) {
                tempNum.push(numChecker(letterHolder.join("")));
                found = true;
                break;
            }
        }
        if (found === true) {
            found === false;
            break;
        }
        letterHolder = [];
    }

    // Concatonate and parse the tempNum arr, add it to the total
    console.log(tempNum);
    total += parseInt((tempNum[0] += tempNum[1]));
    tempNum = [];
    letterHolder = [];
}

console.log(total);
