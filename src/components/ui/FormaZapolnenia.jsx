import React, { useState } from 'react';
import { Paper, TextField, Button, Typography, Grid, Snackbar } from '@mui/material';
import axios from 'axios';

export default function FormaZapolnenia() {
  const [formData, setFormData] = useState({
    number: '',
    name: '',
    email: '',
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Проверяем, что введенный символ является цифрой
    if (name === 'number' && isNaN(value)) {
      return; // Прекращаем обработку, если введен символ, не являющийся цифрой
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/send-email', formData);
      console.log(response);
      if (response.status === 200) {
        setFormData({
          number: '',
          name: '',
          email: '',
        });
        setSnackbarMessage('Данные успешно отправлены');
        setSnackbarOpen(true);
      }
    } catch (error) {
      setSnackbarMessage('Ошибка при отправке данных');
      setSnackbarOpen(true);
    }
  };



  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '20vh' }}
    >
      <Paper
        elevation={5}
        style={{
          padding: '20px',
          textAlign: 'center',
          width: '100%',
          maxWidth: '800px',
          backgroundColor: 'rgba(128, 159, 196, 0.8)',
          color: 'common.white',
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Форма заполнения
            </Typography>
            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
                <TextField
              id="number-field"
              name="number"
              label="Номер телефона"
              variant="outlined"
              style={{ marginBottom: '10px', width: '100%' }}
              value={formData.number}
              onChange={handleChange}
              required
              inputProps={{ maxLength: 12 }} // Limit input to 30 characters
            />
              <TextField
                name="email"
                label="Почта"
                variant="outlined"
                style={{ marginBottom: '10px', width: '100%' }}
                value={formData.email}
                onChange={handleChange}
                required
                type="text"
                inputProps={{ maxLength: 30 }}
              />
              <TextField
                name="name"
                label="Имя"
                variant="outlined"
                style={{ marginBottom: '10px', width: '100%' }}
                value={formData.name}
                onChange={handleChange}
                required
                type="text"
                inputProps={{ maxLength: 30 }}
              />
              <Button type="submit" variant="outlined" color="primary" style={{ width: '100%' }}>
                Отправить
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{ textAlign: 'center' }}>
              <img src="images/card.jpg" alt="Карта" style={{ width: '100%' }} />
              <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
                70.000
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Оформление карты АТЭС без лишних вопросов и очередей
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </div>
  );
}
