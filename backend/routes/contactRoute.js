import express from 'express';
import { sendContactFormEmail } from '../controllers/contactConroller.js';

const contactRouter = express.Router();

contactRouter.post('/submit', sendContactFormEmail);

export default contactRouter;
