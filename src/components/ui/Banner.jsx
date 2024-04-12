import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

export default function Banner() {
  return (
    <Paper
      sx={{
        position: 'relative',
        color: 'common.white',
        marginBottom: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('images/Mos.png')`,
        height: '300px', 
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '60px',
      }}
    >
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <div
            style={{
              textAlign: 'center', 
              width: '100%',
              height: '90%', 
              position: 'relative',
              color: 'common.black',
              backgroundColor: 'rgba(128, 159, 196, 0.8)',
              padding: '20px',
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              Карты АТЭС
            </Typography>
            <Typography component="h3" variant="h6" color="inherit" gutterBottom>
              Это ваш допуск в посещение 18 государств
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
