import "./Contact.css";
import Banner from '../../components/Banner/Banner';
import immigrationBackground from '../../assets/images/immigration.jpg';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Grid from "@mui/material/Unstable_Grid2";
import ReCAPTCHA from "react-google-recaptcha";
import { Stack, Typography, TextField, Button } from "@mui/material";
import { sendContactEmail } from "../../api/email";
import { EMAIL_ADDRESS, PHONE_NUMBER, OFFICE_LOCATION_LONG, OFFICE_BUILDING } from "../../utils/constants";

const Contact = () => {
  const [t, i18n]  = useTranslation("global");
  const reCaptchaRef = React.createRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitContactForm = async() => {
    if (reCaptchaRef.current.getValue()) {
      const res = await sendContactEmail(name, email, message, `${name} ${t('contact.hasSentMessage')}`);
      console.log('Response (Contact.js)', res);
    }
  }

  return (
    <>
    <Banner bannerImage={immigrationBackground} title={t("contact.title")} />
    <div className="contact-container">
      <Grid className='contact-grid' container columns={{ xs: 1, lg: 12 }} direction={{xs: 'column', sm: 'row'}} spacing={2} sx={{ marginLeft: { xs: 0 }}}>
        <Grid xs={5} className='contact-page-form'>
          <Typography variant='h2'>{t("links.contactUs")}</Typography>
          <span className='article-divider'></span>
          <Stack spacing={3} className="contact-stack">
            <TextField required color='info' sx={{ background: '#FFFFFF', width: `500px`, marginTop: 2 }} label={t("common.name")} variant='outlined' size='medium'
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }} />
            <TextField required sx={{ background: '#FFFFFF', width: `500px`, marginTop: 2, accentColor: '#99A7CA' }} label={t("contact.email")} variant='outlined' size='medium'
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }} />
            <TextField required
              sx={{ background: '#FFFFFF', width: `500px`, marginTop: 2 }} 
              label={t("common.message")} variant='outlined' size='medium' multiline={true} minRows={9}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }} />
            <div className='contact-submit-btn'>
              <ReCAPTCHA ref={reCaptchaRef} className="contact-recaptcha" sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                hl={i18n.language} />
              <Button sx={{ textTransform: 'none', width: '100%'}} onClick={() => submitContactForm()}>{t("common.submit")}</Button>
            </div>
          </Stack>
        </Grid>
        <Grid xs={7}>
          <div className='location-map'>
            <Typography variant="h2">San José, Costa Rica</Typography>
            <span className='article-divider'></span>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491.2476583364029!2d-84.1330552236084!3d9.935516400548698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fd2eb06f74ad%3A0x37de80cc38ee1a24!2sCosta%20Legal!5e0!3m2!1sen!2scr!4v1707262689628!5m2!1sen!2scr" width="600" height="450" title="map" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            <Typography variant='h3' sx={{ paddingTop: '20px'}}>Escazú</Typography>
            <Typography variant='body1'>{OFFICE_LOCATION_LONG}</Typography>
            <Typography variant='body1'>{OFFICE_BUILDING}, {t("home.location.floor")}</Typography>

            <Typography variant='body1' style={{ paddingTop: '15px'}}>{t("contact.phone")}: {PHONE_NUMBER}</Typography>
            <Typography variant='body1'>{t("contact.email")}: {EMAIL_ADDRESS}</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
    </>
  )
}

export default Contact;
