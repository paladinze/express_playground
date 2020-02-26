import { Router } from 'express';
import { createProf, getProfs, updateProf, deleteProf } from '../controllers/prof';

const router = Router();

router.post('/', createProf);

router.get('/', getProfs);

router.patch('/:id', updateProf);

router.delete('/:id', deleteProf);

export default router;