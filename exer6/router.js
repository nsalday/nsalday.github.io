import {saveStudent, updateUser, removeUser, removeAllUser, findUser, findMembers} from './controller.js';

const router = (app) =>{
    app.post('/save-student', saveStudent);
    app.post('/update', updateUser);
    app.post('/remove-user', removeUser);
    app.post('/remove-all-user', removeAllUser);
    app.get('/user', findUser);
    app.get('/members', findMembers);
}

export default router;