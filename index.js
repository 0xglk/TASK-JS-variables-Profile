/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

// Part 1 answer 👇🏻 ...






/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it to: My name is {fullName}
 * 2. yearOfBirthString   -> assign it to: I am {YOUR_AGE}, and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it to: My hobby is {YOUR_HOBBY}
 * 
 * Uncomment the following lines and start interpolating.
 * You can uncomment a line by removing the // at the start
 */

// const fullNameString = `My name is ${}`;
// const yearOfBirthString =
// const hobbyString =




/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let stars = 0;
let fullName = `My name is abdullah`;
let yearOfBirth = `I am ${2022-1998}`;
let hobby = "My hobby is coding";
let funFact = "I don't know how to code ;p"; 
const image ="https://www.blexar.com/avatar.png";
function incrementBy1() {
  // Increment stars by 1 👇🏻
  ++stars;
}
function decrementBy1() {
  // decrement stars by 1 👇🏻
  --stars;
}

function incrementBy2() {
  // Increment stars by 2 👇🏻
  newStar= stars+2;
  stars=newStar;

}
function decrementBy2() {
  // decrement stars by 2 👇🏻
  newStar= stars-2;
  stars=newStar;

}
