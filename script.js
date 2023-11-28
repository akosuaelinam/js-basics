console.log("Hello World");

//Weird scope-Don't use
//ver x = 5;
//Regular old variable
let y = 6;
y=10;//You can change the value

const z =7; //This is a constant .Can't be changed
// z=10; //this throw and error

console.log(y,z);
console.log(y+z);
console.log(y-z);
console.log(y*z);
console.log(y/z);
console.log(y%z); //This does division but returns the reaminder
console.log(y**z); // exponents

let fname="Gloria"; // this os a string
let lname="Adumatta";
console.log(fname + " " + lname)

console.log(`${ fname } ${ 5*9 }`);
console.log( lname + 6 );
console.log( "6" );   

let user = "Jefff";
let pass = "foo";

user ="Jeff";
if (user =="Jeff") {
 console.log('you are ' + user);
}

user = "jeff";
if (user == "jeff") {
    console.log(`you are ` + user);
} else {
    console.error("DENIED");
}

user = "jeff";
if (user == "jeff" && pass == "foo") {
 console.log(`you are ` + user + ` and your pass is ` + pass);
} else {
    console.error("DENIED");
}

const license =18;
const jrop = 16;
const rental = 25;



function checkAge( myAge  ) {
    console.log(`RUNNING ...`+myAge);
if (myAge < license && myAge>= jrop) {
    console.log(`you can have a Jrop License`);
}

if (myAge >= license) {
    console.log(`you can have a regular license `);
}

if (myAge >=rental) {
    console.log(`you can rent a car`);
}

if (myAge < jrop) {
    console.log("You,re too young to drive");
  }
}

checkAge(6);
checkAge(17);
checkAge(19);
checkAge(37);