import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Grid } from '@mui/material';

const rows = [
  { country: 'Австралия', visaFreePeriod: '90 дней однократная с визой', cardProcessingTime: '60 дней' },
  { country: 'Бруней', visaFreePeriod: '14 дней без визы', cardProcessingTime: '90 дней' },
  { country: 'Вьетнам', visaFreePeriod: '15 дней без визы', cardProcessingTime: '60 дней' },
  { country: 'Гонконг', visaFreePeriod: '14 дней без визы', cardProcessingTime: '60 дней' },
  { country: 'Индонезия', visaFreePeriod: '30 дней без визы', cardProcessingTime: '60 дней' },
  { country: 'Китай', visaFreePeriod: '30 дней с визой', cardProcessingTime: '60 дней' },
  { country: 'Малайзия', visaFreePeriod: '30 дней без визы', cardProcessingTime: '60 дней' },
  { country: 'Мексика', visaFreePeriod: '180 дней с визой', cardProcessingTime: '90 дней' },
  { country: 'Новая Зеландия', visaFreePeriod: '30/90 дней с визой', cardProcessingTime: '60 дней' },
  { country: 'Папуа Новая Гвинея', visaFreePeriod: '30 дней с визой', cardProcessingTime: '60 дней' },
  { country: 'Перу', visaFreePeriod: '90 дней без визы', cardProcessingTime: '90 дней' },
  { country: 'Сингапур', visaFreePeriod: '4/30 дней с визой', cardProcessingTime: '60 дней' },
  { country: 'Тайвань', visaFreePeriod: '30/60/90 дней с визой', cardProcessingTime: '90 дней' },
  { country: 'Таиланд', visaFreePeriod: '30 дней с визой', cardProcessingTime: '90 дней' },
  { country: 'Филиппины', visaFreePeriod: '30 дней без визы', cardProcessingTime: '59 дней' },
  { country: 'Чили', visaFreePeriod: '30 дней без визы', cardProcessingTime: '90 дней' },
  { country: 'Южная Корея', visaFreePeriod: '60 дней без визы', cardProcessingTime: '90 дней' },
  { country: 'Япония', visaFreePeriod: '15/30/90 дней с визой', cardProcessingTime: '60 дней' }
];

export default function CustomTable() {
  return (
    <Grid container spacing={2} style={{ marginTop: '20px' }}>
      <Grid item xs={12} md={6}>
        <TableContainer component={Paper} style={{ marginBottom: '20px', backgroundColor: 'rgba(128, 159, 196, 0.8)', color: 'white' }}>
          <Typography variant="h2" gutterBottom align="center">
            Какие страны входят в АТЭС
          </Typography>
          <Table sx={{ minWidth: 100 }}>
            <TableHead>
              <TableRow>
                <TableCell align="center">Страна</TableCell>
                <TableCell align="center">Безвизовый период</TableCell>
                <TableCell align="center">Срок получения </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row" align="center">
                    {row.country}
                  </TableCell>
                  <TableCell align="center">{row.visaFreePeriod}</TableCell>
                  <TableCell align="center">{row.cardProcessingTime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper style={{ padding: '20px', backgroundColor: 'rgba(128, 159, 196, 0.8)', color: 'white' }}>
        <Typography component="h2" style={{ fontSize: '24px' }} gutterBottom align="center">
  Преимущества бизнес-карты АТЭС
</Typography>
          <Typography variant="body1" paragraph>
            В состав форума входит 21 государство, среди которых и Россия. Интересы РФ в азиатско-тихоокеанской организации представляет Союз промышленников и предпринимателей (РСПП). Посредниками между предпринимателями и МИД стран-участниц выступают общероссийская общественная организация малого и среднего предпринимательства «Опора России», Торгово-промышленная палата, а также РСПП.
          </Typography>
          <Typography variant="body1" paragraph>
            Выгоду от владения Business Travel Card (BTC) в полной мере могут ощутить предприниматели и топ-менеджеры, которые по роду своей деятельности вынуждены осуществлять частые заграничные поездки. Наличие карты предоставляет своему владельцу одновременно несколько преференций, которые позволяют не только упростить ведение предпринимательства, но и получить возможность путешествовать в туристических целях в любое время.
          </Typography>
          <img src="images/apec.jpg" alt="Карта" style={{ width: '100%', marginBottom: '20px' }} />
          <Typography variant="body1" paragraph>
            Экономия времени. Одной из целей оформления карты является экономия времени предпринимателей 18 государств, так как исключает процедуру регулярного получения виз. Благодаря карте предприниматели оперативнее решают бизнес-вопросы, поскольку получают возможность отправиться в командировку или на деловую встречу без необходимости ожидания визы. Таким образом, владелец бизнеса экономит 2-4 недели при организации путешествия.
          </Typography>
          <Typography variant="body1" paragraph>
            Финансовая выгода. Карта предоставляется на 5 лет, что позволяет сократить расходы на регулярное оформление виз с целью частого пересечения границ.
          </Typography>
      
        </Paper>
      </Grid>
    </Grid>
  );
}
