import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AccordionExpandIcon() {
  return (
    <div>
      <div style={{ marginTop: '5vh', backgroundColor: 'rgba(128, 159, 196, 0.8)', color: 'white' }}>
        <Typography variant="h3" align="center" gutterBottom>
          Необходимые документы
        </Typography>

        <Typography variant="body1" component="div">
          <p>
            Подать заявку в МИД на получение карты APEC возможно только посредством предоставления в
            Российский союз промышленников и предпринимателей (или соответствующую посредническую
            организацию другой страны) необходимых документов:
          </p>
          <ul>
            <li>прошение о содействии аккредитированного посредника в оформлении карты;</li>
            <li>заявка на выдачу карты для деловых поездок;</li>
            <li>справка о несудимости;</li>
            <li>учетная карточка предприятия с информацией о деятельности компании;</li>
            <li>анкета для доступных поездок в Австралию (заполняется по желанию);</li>
            <li>копии всех страниц заграничного паспорта;</li>
            <li>копии заполненных страниц национального паспорта;</li>
            <li>две фотографии 6*4 см.</li>
          </ul>
        </Typography>
      </div>
      <div style={{ marginTop: '5vh', backgroundColor: 'rgba(128, 159, 196, 0.8)', color: 'white' }}>
        <Typography variant="h3" align="center" gutterBottom>
          Часто задаваемые вопросы
        </Typography>
        <Accordion style={{ backgroundColor: 'rgba(128, 159, 196, 0.8)', color: 'common.white' }}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Обман это или правда?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Правда. Выпуск карты регламентируется постановлением Правительства Российской Федерации
              от 2.10.2009 №773 «Об участии Российской Федерации в системе использования карт для
              деловых и служебных поездок в страны-участницы форума АТЭС» и Указом Президента РФ от
              5.06.2012 № 777. Бизнес-карточка подходит для регулярных безвизовых деловых поездок, а
              также продолжительного пребывания в развитых странах Азии и Тихоокеанского региона. BTC
              может получить каждый совершеннолетний гражданин, который соответствует требованиям
              законодательства о выдаче карт и имеет положительную правовую репутацию. С детьми по
              данной карте пересекать границы без виз нельзя, как и посетить зону «Шенгена».
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ backgroundColor: 'rgba(128, 159, 196, 0.8)', color: 'common.white' }}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Сколько действует карта АТЭС?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Business Travel Card является действительной в течение пяти лет. Если актуальность
              заграничного паспорта менее пяти лет, срок действия карты может быть сокращен до 36
              месяцев.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ backgroundColor: 'rgba(128, 159, 196, 0.8)', color: 'common.white' }}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography>Кто выдает карту АТЭС?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Бизнес-карта АТЭС является международным документом, выпускаемым на официальных
              основаниях Министерством иностранных дел РФ и выдается в МИД в Москве. Госпошлина в
              министерстве не уплачивается, но организации-посредники устанавливают свои размеры
              пошлины, которую придется уплатить при оформлении карты.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ backgroundColor: 'rgba(128, 159, 196, 0.8)', color: 'common.white' }}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <Typography>Как выглядит карта АТЭС?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Документ внешне напоминает пластиковую банковскую карточку. На ней указана личная
              информация владельца, серийный номер карты и заграничного паспорта, а также данные о
              стране выдачи и государствах для безвизовых поездок.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ backgroundColor: 'rgba(128, 159, 196, 0.8)', color: 'common.white' }}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel5-content"
            id="panel5-header"
          >
            <Typography>Нужно ли находится в РФ при оформлении карты АТЭС?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Нет. Оформить карту АТЭС можно дистанционно. Поскольку заявление в МИД подается
              посредством аккредитированных организаций, письмо-обращение и другие документы в эти
              учреждения можно подать в электронном виде или заказным письмом.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
