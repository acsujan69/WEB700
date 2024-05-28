/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Sujan Acharya              Student ID: 152904231                 Date: 21 May, 2024
*
********************************************************************************/ 

// Importing the collegeData module
const collegeData = require('./modules/collegeData');

// Initializing the collegeData module
collegeData.initialize()

  // If initialization is successful, retrieve all students
  .then(() => {
    //console.log('Initialization successful');
    return collegeData.getAllStudents();
  })

  // If students retrieval is successful, log the number of retrieved students and retrieve all courses
  .then(students => {
    console.log(`Successfully retrieved ${students.length} students`);
    return collegeData.getCourses();
  })

  // If courses retrieval is successful, log the number of retrieved courses and retrieve all TAs (Teaching Assistants)
  .then(courses => {
    console.log(`Successfully retrieved ${courses.length} courses`);
    return collegeData.getTAs();
  })

  // If TAs retrieval is successful, log the number of retrieved TAs
  .then(tas => {
    console.log(`Successfully retrieved ${tas.length} TAs`);
  })

  // If any error occurs in the process, log the error
  .catch(err => {
    console.error(err);
  });