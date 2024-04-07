import { saveStudent, updateUser, removeUser, removeAllUser, findUser, findMembers } from './controller.js';

const router = (app) => {
    // Setting up routes and associating them with corresponding controller functions
    // Route to save a student data using POST method
    app.post('/save-student', saveStudent);
    // Route to update user data using POST method
    app.post('/update', updateUser);
    // Route to remove a user using POST method
    app.post('/remove-user', removeUser);
    // Route to remove all users using POST method
    app.post('/remove-all-user', removeAllUser);
    // Route to find a user using GET method
    app.get('/user', findUser);
    // Route to find all members using GET method
    app.get('/members', findMembers);
};

export default router;
