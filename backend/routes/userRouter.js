import { getUsers, getUserById , createUser, updateUser, deleteUser} from "../controllers/userController.js";
import express from 'express';

const router = express.Router()

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;