import React, { useEffect, useState } from 'react';
import logo from '../../assets/logos/costa_legal_wt.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button, Grid, IconButton, Stack, TextField, Typography, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation, redirect } from "react-router-dom";
import { sendContactEmail } from "../../api/email";
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation("global");
  const location = useLocation();

  const [contactPage, setContactPage] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitContactForm = async() => {
    console.log('Sending Email!!');
    const res = await sendContactEmail(name, email, message, `${name} ${t('contact.hasSentMessage')}`);
    console.log('Response (Contact.js)', res);
  }

  useEffect(() => {
    const currentPath = location.pathname.endsWith('/') ? location.pathname.slice(0, -1) : location.pathname;
    currentPath === '/contact' ? setContactPage(true) : setContactPage(false);
  }, [location]);

  return (
    <div className='contact'>
      <Grid container spacing={2} direction={{xs: 'column', sm: 'row'}} className='contact-grid' sx={{ marginLeft: { xs: 0 }}}>
        {/* Contact Grid */}
        <Grid item xs={8} className='contact-form'>
          {contactPage ? (            
            <div className='footer-left'>
              <img src={logo} alt="logo" className='contact-logo' />
              <Link className='footer-location' underline='none' sx={{ cursor: 'pointer' }} onClick={() => window.open("https://maps.app.goo.gl/dyZssRASjqPcViRSA", "_blank")} >
                <LocationOnIcon sx={{ fontSize: '1.9rem', color: '#FFFFFF'}} />
                <Typography variant='body1' sx={{ color: '#FFFFFF'}}>
                  Escazú, San José. Edificio Monterrico, {t("home.location.floor")}
                </Typography>
              </Link>
            </div>
          ) : (
            <>
            <Typography variant='h2'>{t("common.getInTouch")}</Typography>
            <Stack spacing={3}>
              <TextField required color='info' sx={{ background: '#e6e6e6', width: `500px`, marginTop: 2, accentColor: '#99A7CA' }} label={t("common.name")} variant='filled' size='medium'
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }} />
              <TextField required sx={{ background: '#e6e6e6', width: `500px`, marginTop: 2, accentColor: '#99A7CA' }} label={t("contact.email")} variant='filled' size='medium'
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }} />
              <TextField required 
                sx={{ background: '#e6e6e6', width: `500px`, marginTop: 2, accentColor: '#99A7CA' }} 
                label={t("common.message")} variant='filled' size='medium' multiline={true} minRows={6}
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                }} />
              <div className='submit-btn'>
                <Button sx={{ textTransform: 'none', width: 130}} onClick={() => submitContactForm()}>{t("common.submit")}</Button>
              </div>
            </Stack>
            </>
          )}
        </Grid>

        {/* Info Grid */}
        <Grid item xs={12} sm={4}>
          <div className='contact-info'>
            {!contactPage && <img src={logo} alt="logo" className='contact-logo' />}
            <Typography variant='h3' sx={{ color: '#99A7CA', fontSize: '34px'}}>{t("contact.phone")}</Typography>
            <Link underline='none' sx={{ color: '#FFFFFF'}} href="tel:+50683908070">
              <Typography variant='body1' sx={{ paddingBottom: 7}}>+506 2100-4465</Typography>
            </Link>

            <Typography variant='h3' sx={{ color: '#99A7CA', fontSize: '34px'}}>{t("contact.email")}</Typography>
            <Link underline='none' sx={{ color: '#FFFFFF'}} href="mailto:info@costalegalcr.com">
              <Typography variant='body1' sx={{ paddingBottom: 7}}>info@costalegalcr.com</Typography>
            </Link>

            <Typography variant='h3' sx={{ color: '#99A7CA', fontSize: '34px'}}>{t("contact.social")}</Typography>
            <Grid container spacing={{ sm: 3, lg: 0.5 }}>
              <Grid item xs={6} sm={1} sx={{ textAlign: { xs: 'end'}}}>
                <IconButton sx={{ padding: 0 }} size='small' color='inherit'>
                  <InstagramIcon sx={{ fontSize: '1.9rem'}} />
                </IconButton>
              </Grid>
              <Grid item xs={6} sm={1} sx={{ textAlign: { xs: 'start'}}}>
                <IconButton sx={{ padding: 0 }} size='small' color='inherit' onClick={() => window.open("https://www.facebook.com/costalegalcr/", '_blank')}>
                  <FacebookIcon sx={{ fontSize: '1.9rem'}} />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer;
