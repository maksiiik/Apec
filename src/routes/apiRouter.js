import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: 'Yandex',
  auth: {
    user: 'ApecInfo@yandex.ru', 
    pass: 'fodnvubcqzsqsoee',
  },
});

router.post('/send-email', async (req, res) => {
  try {
    const { number, name, email } = req.body; 
    if (!number || !name || !email) {
      return res.status(400).json({ message: 'Пожалуйста, заполните все поля' });
    }
    const mailOptions = {
      from: 'ApecInfo@yandex.ru', 
      to: 'ApecInfo@yandex.ru',
      subject: `Имя: ${name}!\n Ваш номер: ${number}\n Почта: ${email}.`, // Тема письма
      text: `Имя: ${name}!\n Ваш номер: ${number}\n Почта: ${email}.`, 
    };
    await transporter.sendMail(mailOptions); 
    res.sendStatus(200); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка отправки электронного письма' });
  }
});

export default router;
