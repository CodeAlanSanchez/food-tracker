import express from 'express';
import { getLogs, createLog, updateLog } from '../controllers/logController.js';

const router = express.Router();

router.get('/', getLogs);
router.post('/', createLog);
router.patch('/:id', updateLog);

export default router;
