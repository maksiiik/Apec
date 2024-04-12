import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography, Snackbar } from '@mui/material';
import axios from 'axios';

export default function FormaEnd() {
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
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}
    >
      <Paper
        elevation={2}
        style={{
          padding: '10px',
          textAlign: 'center',
          width: '100%',
          maxWidth: '600px',
          marginTop: 0,
          backgroundColor: 'rgba(128, 159, 196, 0.8)',
          color: 'common.white',
        }}
      >
        <Typography variant="h2" gutterBottom>
          Заполняй форму
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
          <TextField
                id="outlined-basic"
                label="Телефон"
                variant="outlined"
                fullWidth
                value={formData.number}
                onChange={handleChange}
                name="number"
                inputProps={{
                  type: 'tel',
                  pattern: '[0-9]*',
                  maxLength: "12",

                }}
              />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Почта"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              name="email"
              inputProps={{ maxLength: 30 }} // Ограничиваем ввод до 30 символов
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Имя"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              name="name"
              inputProps={{ maxLength: 30 }} // Ограничиваем ввод до 30 символов
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" color="primary" onClick={handleSubmit}>
              Отправить
            </Button>
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
