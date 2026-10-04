// Complete each of the following tasks by writing code to manipulate the provided
// arrays. Your solution should only use the array methods covered in the lesson:
// push(), pop(), unshift(), shift(), includes(), indexOf(), lastIndexOf(),
// concat(), slice(), splice(), sort(), and reverse(). Submit the final version of
// the arrays as specified after each task.


// Tasks
// Task 1: Adding and Removing Elements
// Start with the array:

let fruits = ["apple", "banana", "cherry"];

// Add "orange" to the end of the array.

console.log("First Task Pt 1:");
let addOrange = fruits.push("orange");
console.log(fruits);
console.log(addOrange);

// Remove the first element.

console.log("First Task Pt 2:");
let removeFirstFruit = fruits.shift();
console.log(fruits);
console.log("Removed: " + removeFirstFruit);

// Add "grape" to the beginning of the array.

console.log("First Task Pt 3:");
let addGrape = fruits.unshift("grape");
console.log(fruits);
console.log(addGrape);

// Submit the final fruits array.

console.log(fruits);

// Expected Output:
// ["grape", "banana", "cherry", "orange"]


// Task 2: Query and Access
// Start with the array:

let colors = ["red", "blue", "green", "blue", "yellow"];


// Check if "blue" is in the array (using includes()).

console.log("Second Task Pt 1:");
console.log(colors.includes("blue"));

// Find the first index of "blue" (using indexOf()).

console.log("Second Task Pt 2:");
console.log(colors.indexOf("blue"));

// Find the last index of "blue" (using lastIndexOf()).

console.log("Second Task Pt 3:");
console.log([colors.lastIndexOf("blue")]);

// Submit the results as an array in the following format:
// [includesResult, firstIndex, lastIndex]
// Expected Output:
// [true, 1, 3]

console.log("Second Task Pt 4:");
let includesResult = colors.includes("blue")
let firstIndex = colors.indexOf("blue");
let lastIndex = colors.lastIndexOf("blue");

console.log([includesResult, firstIndex, lastIndex]);

// Task 3: Combining Arrays
// Start with these two arrays:

let teamA = ["Alice", "Bob"];
let teamB = ["Charlie", "Diana"];

// Combine the two arrays into a single array called allTeams.

console.log("Third Task Pt 1:");
let allTeams = teamA.concat(teamB);
console.log(allTeams);

// Add "Eve" to the end of the combined array.

console.log("Third Task Pt 2:");
let addEve = allTeams.push("Eve");
console.log(allTeams);

// Submit the final allTeams array.

console.log("Third Task Pt 3:");
console.log(allTeams);

// Expected Output:
// ["Alice", "Bob", "Charlie", "Diana", "Eve"]


// Task 4: Extracting and Splicing
// Start with the array:

let numbers = [10, 20, 30, 40, 50];

// Use slice() to create a new array called middleNumbers containing only the second and third elements.

console.log("Fourth Task Pt 1:");
let middleNumbers = numbers.slice(1, 3);
console.log(middleNumbers);

// Use splice() to remove the last two elements from the original array and add 60 and 70 in their place.

console.log("Fourth Task Pt 2:");
numbers.splice(3, 5, "60", "70");

// Submit both the middleNumbers and modified numbers arrays.

console.log(numbers);

// Expected Output:
// middleNumbers: [20, 30]
// numbers: [10, 20, 30, 60, 70]


// Task 5: Sorting and Reversing
// Start with the array:

let scores = [85, 70, 95, 60, 75];

// Sort the scores in ascending order.

console.log("Fifth Task Pt 1:");
scores.sort((a, b) => a - b);
console.log(scores);

// Reverse the sorted array.

console.log("Fifth Task Pt 2:");
scores.sort((a, b) => a - b).reverse();

// Submit the final scores array.

console.log(scores);

// Expected Output:
// [95, 85, 75, 70, 60]