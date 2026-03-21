// Reverse hello

// check if a number is even

// Find the largest number in an array
// Sum all numbers in an array
// Remove duplcates from an array
// check if a string is palindrome
//Count characters in a string
// Find the first element greater than 10
//Sort numbers in an array
//Convery an array to an object

//You are building a system for a hospital to prioritize patients based on severity.
// Each patient has:
// id – a unique identifier
// severity – an integer from 1 to 10 (10 = most severe)
// arrivalTime – an integer representing the time the patient arrived (in minutes since the hospital opened)
// The hospital wants to process patients using the following rules:
// Patients with higher severity should be treated first.
// If two patients have the same severity, the patient who arrived earlier should be treated first.
// Task :Write a function that takes an array of patient records and returns an array of patient IDs in the order they should be treated.

// const patients = [
//   { id: "P1", severity: 3, arrivalTime: 10 },
//   { id: "P2", severity: 5, arrivalTime: 15 },
//   { id: "P3", severity: 5, arrivalTime: 5 },
//   { id: "P4", severity: 2, arrivalTime: 20 },
// ];
// const prioritizePatients = (patients) => {
//   return patients
//     .sort((a, b) => {
//       if (b.severity !== a.severity) {
//         return b.severity - a.severity;
//       }
//       return a.arrivalTime - b.arrivalTime;
//     })
//     .map((patient) => patient.id);
// };
// console.log(prioritizePatients(patients));
