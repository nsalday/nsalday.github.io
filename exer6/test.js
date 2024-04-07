import pkg from "needle";
const { post, get } = pkg;

const url = "http://localhost:3000";

const studentData = [
  { stdnum: "20210001", fname: "Mary Jane", lname: "Watson", age: 22 },
  { stdnum: "20210002", fname: "Peter", lname: "Parker", age: 22 },
  { stdnum: "20210003", fname: "Otto", lname: "Octavius", age: 48 },
  { stdnum: "20210004", fname: "Miles", lname: "Morales", age: 14 },
  { stdnum: "20210005", fname: "Gwen", lname: "Stacy", age: 15 },
];

// Function to create new student entries.
const savestudentData = () => {
    studentData.forEach(student => {
        post(`${url}/save-student`, student, { json: true }, (err, res) => {
            if (err) console.error('Error in save-student:', err);
            else console.log('Response from save-student:', res.body);
        });
    });
};

// Function to update a student's information.
const updateStudent = () => {
    const updateData = { fname: 'Mary Jane', lname: 'Parker' }; 
    post(`${url}/update`, updateData, { json: true }, (err, res) => {
        if (err) console.error('Error in update:', err);
        else console.log('Response from update:', res.body);
    });
};

// Function to remove a specific student.
const removeStudent = () => {
    const removeData = { stdnum: '20210001' }; // Remove Mary Jane
    post(`${url}/remove-user`, removeData, { json: true }, (err, res) => {
        if (err) console.error('Error in remove-user:', err);
        else console.log('Response from remove-user:', res.body);
    });
};

// Function to remove all studentData.
const removeAllstudentData = () => {
    post(`${url}/remove-all-user`, {}, { json: true }, (err, res) => {
        if (err) console.error('Error in remove-all-user:', err);
        else console.log('Response from remove-all-user:', res.body);
    });
};

// Function to find a student by student number.
const findStudent = () => {
    const query = { stdnum: '20210001' }; // Find Mary Jane
    get(`${url}/user?stdnum=${query.stdnum}`, (err, res) => {
        if (err) console.error('Error in user:', err);
        else console.log('Response from user:', res.body);
    });
};

// Function to retrieve all studentData.
const findMembers = () => {
    get(`${url}/members`, (err, res) => {
        if (err) console.error('Error in members:', err);
        else console.log('Response from members:', res.body);
    });
};

// Running the test functions in sequence.
// Uncomment to test
console.log('Starting tests...');
// savestudentData();
// findMembers();
// updateStudent(); 
// findStudent();
// findMembers();
// removeStudent();
// findStudent();
// // findMembers();
// removeAllstudentData();
// setTimeout(findMembers, 1000);
