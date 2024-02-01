import "./Contact.css";
import { Banner } from '../../components';
import immigrationBackground from '../../assets/images/immigration.jpg';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Grid from "@mui/material/Unstable_Grid2";
import { Stack, Typography, TextField, Button } from "@mui/material"; 

const Contact = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <>
    <Banner bannerImage={immigrationBackground} title={t("contact.title")} />
    <div className="contact-container">
      <Grid className='contact-grid' container columns={{ xs: 1, lg: 12 }} direction={{xs: 'column', sm: 'row'}} spacing={2} sx={{ marginLeft: { xs: 0 }}}>
        <Grid xs={5} className='contact-page-form'>
          <Typography variant='h2'>{t("links.contactUs")}</Typography>
          <span className='article-divider'></span>
          <Stack spacing={3} className="contact-stack">
            <TextField required color='info' sx={{ background: '#FFFFFF', width: `500px`, marginTop: 2 }} label={t("common.name")} variant='outlined' size='medium' />
            <TextField required sx={{ background: '#FFFFFF', width: `500px`, marginTop: 2, accentColor: '#99A7CA' }} label={t("contact.email")} variant='outlined' size='medium' />
            <TextField required 
              sx={{ background: '#FFFFFF', width: `500px`, marginTop: 2 }} 
              label={t("common.message")} variant='outlined' size='medium' multiline={true} minRows={9} />
            <div className='submit-btn'>
              <Button sx={{ textTransform: 'none', width: 130}}>{t("common.submit")}</Button>
            </div>
          </Stack>
        </Grid>
        <Grid xs={7}>
          <div className='location-map'>
            <Typography variant="h2">San José, Costa Rica</Typography>
            <span className='article-divider'></span>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491.24768568894433!2d-84.13277344849534!3d9.935498188093286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fda0a0d22a9f%3A0x4c65f0b3a1e30ccb!2sEdificio%20Monterrico!5e0!3m2!1sen!2scr!4v1706296702025!5m2!1sen!2scr" width="100%" height="465" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            <Typography variant='h3' sx={{ paddingTop: '20px'}}>Escazú</Typography>
            <Typography variant='body1'>Trejos Montealegre, San Rafael de Escazú, San José</Typography>
            <Typography variant='body1'>Edificio Monterrico, {t("home.location.floor")}</Typography>

            <Typography variant='body1' style={{ paddingTop: '15px'}}>{t("contact.phone")}: +506 8390-8070</Typography>
            <Typography variant='body1'>{t("contact.email")}: info@costalegalcr.com</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
    </>
  )
}

export default Contact;
