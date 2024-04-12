import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import axios from 'axios';

export default function ModalFor({ open, handleClose }) {
  const [formData, setFormData] = useState({
    number: '',
    name: '',
    email: '',
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [error, setError] = useState('');

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
        handleClose(); // Close the modal after successful submission
      }
    } catch (error) {
      setSnackbarMessage('Ошибка при отправке данных');
      setSnackbarOpen(true);
      setError('Ошибка при отправке данных');
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          width: '70%',
          maxWidth: 400, // Max width of 400px
          outline: 'none',
        }}
      >
        <h2 id="parent-modal-title">Оставить заявку</h2>
        {error && (
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            message={snackbarMessage}
          />
        )}
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
              id="name-field"
              name="name"
              label="Имя"
              variant="outlined"
              style={{ marginBottom: '10px', width: '100%' }}
              value={formData.name}
              onChange={handleChange}
              required
              inputProps={{ maxLength: 30 }} // Limit input to 30 characters
            />
            <TextField
              id="email-field"
              name="email"
              label="Почта"
              variant="outlined"
              style={{ marginBottom: '10px', width: '100%' }}
              value={formData.email}
              onChange={handleChange}
              required
              inputProps={{ maxLength: 30 }} // Limit input to 30 characters
            />
          </Box>
          <Button type="submit" variant="contained" color="primary">
            Отправить
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
