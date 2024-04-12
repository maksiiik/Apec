import React from 'react';
import { Card, CardContent, Typography, Grid, CardMedia, makeStyles } from '@mui/material';

export default function Reviews() {
  return (
    <div style={{ textAlign: 'center', marginTop: '5%', backgroundColor: 'rgba(128, 159, 196, 0.8)', color: 'white' }}>
      <Typography variant="h2" gutterBottom>
        Отзывы
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Card style={{ backgroundColor: 'rgba(128, 159, 196, 0.8)', color: 'white' }}>
            <img src="images/otz1.jpeg" alt="Отзыв 1" style={{ width: '100%' }} />
            <CardContent>
              <Typography variant="body1">"Отличный продукт!"</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card style={{ backgroundColor: 'rgba(128, 159, 196, 0.8)', color: 'white' }}>
            <img src="images/otz2.jpeg" alt="Отзыв 2" style={{ width: '100%' }} />
            <CardContent>
              <Typography variant="body1">"Продукт оправдал ожидания. Спасибо за качественный сервис!"</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card style={{ backgroundColor: 'rgba(128, 159, 196, 0.8)', color: 'white' }}>
            <img src="images/otz3.jpeg" alt="Отзыв 3" style={{ width: '100%' }} />
            <CardContent>
              <Typography variant="body1">"Отличное обслуживание. Рекомендую всем!"</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
