import express from 'express';
import { createContact } from '../Controller/ContactController.js';

const router = express.Router()

router.post("/send",createContact)

export default router;