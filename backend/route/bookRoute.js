import express from 'express';
import { getBook, createBook, BookById, postBookUpdate, bookDelete } from '../controllers/bookController.js';

const router = express.Router();

router.get('/', getBook);
router.post ('/newbook', createBook);
router.get('/newbook/:id', BookById);

router.post('/update/:id' , postBookUpdate);
router.delete('/delete/:id' ,  bookDelete);



export default router;