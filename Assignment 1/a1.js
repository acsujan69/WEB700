/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Sujan Acharya Student ID: 152904231 Date: 18 May, 2024
*
********************************************************************************/ 

console.log("Hello World");

const studentName = "Sujan Acharya";
const studentEmail = "sacharya35@myseneca.ca";

const serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
const serverResponses = [
  "Welcome to WEB700 Assignment 1",
  "This assignment was prepared by " + studentName,
  studentName + ": " + studentEmail,
  "User Logged In",
  "Main Panel",
  "Logout Complete"
];

function httpRequest(httpVerb, path) {
  for (let i = 0; i < serverPaths.length; i++) {
      if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
      return `200: ${serverResponses[i]}`;
    }
  }
  // If no match is found, return a 404 error message
  return `404: Unable to process ${httpVerb} request for ${path}`;
}

// Manually testing httpRequest function
console.log(httpRequest("GET", "/"));
console.log(httpRequest("GET", "/about"));
console.log(httpRequest("GET", "/contact"));
console.log(httpRequest("POST", "/login"));
console.log(httpRequest("GET", "/panel")); 
console.log(httpRequest("POST", "/logout"));
console.log(httpRequest("PUT", "/")); 

// Function to get random integer
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Define automateTests function
function automateTests() {
  const testVerbs = ["GET", "POST"];
  const testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

  // Define randomRequest function
  function randomRequest() {
    const randVerb = testVerbs[getRandomInt(testVerbs.length - 1)];
    const randPath = testPaths[getRandomInt(testPaths.length - 1)];
    console.log(httpRequest(randVerb, randPath));
  }

  // Set interval to repeat randomRequest every 1 second
  setInterval(randomRequest, 1000);
}

// Call automateTests function to start automated testing
automateTests();