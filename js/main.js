// Where all of my Javascript will live!

// EVERYTHING IN JAVASCRIPT IS AN OBJECT

// camelCase is the preferred naming convention with Javascript
var yearIPhoneWasMade = 2007;
var currentYear = 2016;

var companyThatMakesIPhones = "Apple";

// The parens here are to "group" the math.
var yearsIPhonesHaveExisted = (currentYear - yearIPhoneWasMade);

var namesOfRecentIphones = ["7 Plus", "7", "6S", "6S Plus", "SE", "5S"];

// Objects are for complex data... we can have *as many* layers to what we
//   store as we would like.

// Curly brackets signify that we are using an object!
var iphone7SPlusData = {
  // Colons `:` signify a property/value pair (aka key/value pair)
  name: "iPhone 7 Plus",
  // Each key/value pair is separated by... a "comma" `,`
  backCameraMegaPixels: 12,
  frontCameraMegaPixels: 7,
  soundType: "stereo",
  currentlyProduced: true,
  // The last instance of key/value in an object DOES NOT have a "comma"
  yearsProduced: [ 2015, 2016 ]
};

// Shows us output... of what we pass as arguments
// ARGUMENTS are things that exist between `()` parens
//   These are typically separated by `,` commas
//   ORDER DOES MATTER
console.log(iphone7SPlusData.yearsProduced[1]);

// `objectVariableNameReference.propertyName` -- this is an example of
//    "reaching" into an object with "Dot Syntax" to read the value of that
//    specified property.

// I would like to output in a string of
//   "<name of iphone> has a <megapixel value of front camera> front camera"
//   We use "Concatenation" to "add" strings together.
//   Added blank spaces between the letters/variable references to
//   increase readability between concat's
var frontCameraOutputString = iphone7SPlusData.name + " has a " + iphone7SPlusData.frontCameraMegaPixels + "MP front camera";

console.log(frontCameraOutputString);

var firstName = "Jason";
var lastName = "Vanderslice";
var blankSpace = " ";

console.log(firstName + blankSpace + lastName);

var dogYearMultiplier = 7;
var ageOfDog = 3;
// Psuedo coding... need to multiply age of my dog times the multiplier
var dogAgeInHumanYears = ageOfDog * dogYearMultiplier;

console.log(dogAgeInHumanYears);

// To reverse the equation of dog/human years...
//   human year version of dog age DIVIDED by multiplier
var reverseMath = dogAgeInHumanYears / dogYearMultiplier;

var outputOfReverseDogHumanEquation = "My dog is " + reverseMath;

console.log(outputOfReverseDogHumanEquation);




var campusData = {
  // first key/value pair inside of parent object
  // To the RIGHT of a colon... is a property assignment
  rooms: [
    {
      number: 1,
      capacity: 30,
      chairs: 20,
      projectorOn: true,
      markers: [
        "blue", "red", "black"
      ]
    },
    {
      number: 2,
      capacity: 12,
      projectorOn: false,
      markers: [
        "blue"
      ]
    }
  ]
}

var arrayOfNames = ["Jason", "Stephanie"];
var name1 = "Jason";

console.log(typeof arrayOfNames);
