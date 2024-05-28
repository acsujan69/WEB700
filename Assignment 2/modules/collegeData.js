const fs = require('fs'); // Importing the file system module
const path = require('path'); // Importing the path module

// Class to represent the data collection of students and courses
class Data {
  constructor(students, courses) {
    this.students = students; // Array containing student data
    this.courses = courses; // Array containing course data
  }
}

let dataCollection = null; // Variable to store the data collection

// Function to initialize the data collection by reading JSON files
function initialize() {
  return new Promise((resolve, reject) => {
    // Reading students.json file
    fs.readFile(path.join(__dirname, '../data/students.json'), 'utf8', (err, data) => {
      if (err) {
        reject('Unable to read students.json'); // Rejecting the promise if file reading fails
        return;
      }
      let students = JSON.parse(data); // Parsing student data from JSON
      // Reading courses.json file
      fs.readFile(path.join(__dirname, '../data/courses.json'), 'utf8', (err, data) => {
        if (err) {
          reject('Unable to read courses.json'); // Rejecting the promise if file reading fails
          return;
        }
        let courses = JSON.parse(data); // Parsing course data from JSON
        dataCollection = new Data(students, courses); // Creating a new data collection object
        resolve(); // Resolving the promise once data collection is initialized
      });
    });
  });
}

// Function to retrieve all students from the data collection
function getAllStudents() {
  return new Promise((resolve, reject) => {
    if (!dataCollection) {
      reject('Data collection not initialized'); // Rejecting the promise if data collection is not initialized
      return;
    }
    if (dataCollection.students.length === 0) {
      reject('No results returned'); // Rejecting the promise if no students are found
      return;
    }
    resolve(dataCollection.students); // Resolving the promise with the array of students
  });
}

// Function to retrieve all TAs (Teaching Assistants) from the data collection
function getTAs() {
  return new Promise((resolve, reject) => {
    if (!dataCollection) {
      reject('Data collection not initialized'); // Rejecting the promise if data collection is not initialized
      return;
    }
    let tas = dataCollection.students.filter(student => student.TA); // Filtering students to find TAs
    if (tas.length === 0) {
      reject('No results returned'); // Rejecting the promise if no TAs are found
      return;
    }
    resolve(tas); // Resolving the promise with the array of TAs
  });
}

// Function to retrieve all courses from the data collection
function getCourses() {
  return new Promise((resolve, reject) => {
    if (!dataCollection) {
      reject('Data collection not initialized'); // Rejecting the promise if data collection is not initialized
      return;
    }
    if (dataCollection.courses.length === 0) {
      reject('No results returned'); // Rejecting the promise if no courses are found
      return;
    }
    resolve(dataCollection.courses); // Resolving the promise with the array of courses
  });
}

// Exporting functions to be used by other modules
module.exports = { initialize, getAllStudents, getTAs, getCourses };
