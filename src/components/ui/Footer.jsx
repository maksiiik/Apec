import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box } from '@mui/material';

export default function Footer() {
  return (
    <div>
      <CssBaseline />
      <footer
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
          marginBottom: '20px',
        }}
      >
        <Container>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center' }}>
            <a href="https://t.me/89850306009">
              <img src="images/tel.png" alt="telegram" style={{ width: '30px', height: '30px' }} />
            </a>
            <a href="https://viber.com/send?phone=89850306009">
              {' '}
              {/* Замените "89850306009" на нужный вам номер телефона */}
              <img src="images/viber.png" alt="viber" style={{ width: '30px', height: '30px' }} />
            </a>
            <a href="https://wa.me/89850306009">
              <img
                src="images/whatsap.png"
                alt="whatsapp"
                style={{ width: '30px', height: '30px' }}
              />
            </a>
            <a href="mailto:ApecInfo@yandex.ru">
              <img src="images/poch.png" alt="email" style={{ width: '30px', height: '30px' }} />
            </a>
          </Box>
        </Container>
      </footer>
    </div>
  );
}
