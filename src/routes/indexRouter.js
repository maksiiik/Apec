import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

// Отправка страницы IndexPage при GET-запросе
router.get('/', (req, res) => {
  res.render('IndexPage');
});

export default router;
