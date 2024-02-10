import express from 'express';
import { sendQuote } from '../controllers/quoteController';

const router = express.Router();

router.post('/', sendQuote);

export default router;
