import React from 'react';
import logo from '../../assets/logos/costa_legal_wt.png';
import { PHONE_NUMBER, EMAIL_ADDRESS, OFFICE_LOCATION, OFFICE_BUILDING } from '../../utils/constants';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Grid, IconButton, Typography, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation("global");

  return (
    <div className='contact'>
      <Grid container spacing={2} direction={{xs: 'column', sm: 'row'}} className='contact-grid' sx={{ marginLeft: { xs: 0 }}}>
        {/* Contact Grid */}
        <Grid item xs={8} className='contact-form'>
          <div className='footer-left'>
            <img src={logo} alt="logo" className='contact-logo' />
            <Link className='footer-location' underline='none' sx={{ cursor: 'pointer' }} onClick={() => window.open("https://maps.app.goo.gl/WyTyBSpMBhj5M1Sb8", "_blank")} >
              <LocationOnIcon sx={{ fontSize: '1.9rem', color: '#FFFFFF'}} />
              <Typography variant='body1' sx={{ color: '#FFFFFF'}}>{OFFICE_LOCATION}. {OFFICE_BUILDING}, {t("home.location.floor")}</Typography>
            </Link>
          </div>
        </Grid>

        {/* Info Grid */}
        <Grid item xs={12} sm={4}>
          <div className='contact-info'>
            <Typography variant='h3' sx={{ color: '#99A7CA', fontSize: '34px'}}>{t("contact.phone")}</Typography>
            <Link underline='none' sx={{ color: '#FFFFFF'}} href="tel:+50621004465">
              <Typography variant='body1' sx={{ paddingBottom: 7}}>{PHONE_NUMBER}</Typography>
            </Link>

            <Typography variant='h3' sx={{ color: '#99A7CA', fontSize: '34px'}}>{t("contact.email")}</Typography>
            <Link underline='none' sx={{ color: '#FFFFFF'}} href={`mailto:${EMAIL_ADDRESS}`}>
              <Typography variant='body1' sx={{ paddingBottom: 7}}>{EMAIL_ADDRESS}</Typography>
            </Link>

            <Typography variant='h3' sx={{ color: '#99A7CA', fontSize: '34px'}}>{t("contact.social")}</Typography>
            <Grid container spacing={{ sm: 3, lg: 0.5 }}>
              <Grid item xs={6} sm={1} sx={{ textAlign: { xs: 'end'}}}>
                <IconButton sx={{ padding: 0 }} size='small' color='inherit' onClick={() => window.open("https://www.instagram.com/costalegalcr/", '_blank')}>
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
