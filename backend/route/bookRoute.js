import express from 'express';
import { getBook, createBook } from '../controllers/bookController.js';

const router = express.Router();

router.get('/', getBook);
router.post ('/newbook', createBook)

export default router;