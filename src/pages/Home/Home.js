import './Home.css';
import homeBackground from '../../assets/images/playa_lagosta.jpg';
import homeData from '../../assets/data/home';
import { Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { EMAIL_ADDRESS, OFFICE_LOCATION_LONG, OFFICE_BUILDING, PHONE_NUMBER } from '../../utils/constants';

const Home = () => {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  return (
    <>
    <header className="banner" style={{ backgroundImage:`url(${homeBackground})` }}>
      <div className='welcome'>
        <Typography variant='h1'>{t("home.welcome")}</Typography>
        <div className='banner-btn'>
          <Button size='large' sx={{ textTransform: 'none'}} onClick={() => navigate('/contact')}>{t("home.welcomeBtn")}</Button>
        </div>
      </div>
    </header>


    <section className='about-us'>
      <Typography variant='h2' sx={{ paddingBottom: 1 }}>{t("home.aboutUs.title")}</Typography>
      <span className='divider'></span>
      <Typography variant='body1'>{t("home.aboutUs.description")}</Typography>
    </section>


    <section className='services'>
      <Typography variant='h2' sx={{ textAlign: 'center', paddingBottom: 1 }}>{t("common.services")}</Typography>
      <span className='divider' style={{ marginBottom: 45 }}></span>

      {homeData && homeData.map((service, idx) => (
        <div key={idx} className='service-background' style={{ backgroundImage: `url(${service.background})` }}>
          <Typography variant='h2' >{t(service.title)}</Typography>

          <Typography variant='body1' sx={{ paddingTop: 3, paddingRight: 30, paddingBottom: 5}}>{t(service.desc)}</Typography>

          <div className='banner-btn'>
            <Button sx={{ textTransform: 'none'}} onClick={() => navigate(service.link)}>{t("common.readMore")}</Button>
          </div>
        </div>
      ))}
      
    </section>


    <section className='location'>
      <Typography variant='h2' sx={{ paddingBottom: 1 }}>{t("home.location.title")}</Typography>
      <span className='divider' style={{ marginBottom: 15 }}></span>

      <div className='location-content'>
        <div className='location-text'>
          <Typography variant='h3'>Escazú</Typography>
          <Typography variant='body1'>{OFFICE_LOCATION_LONG}</Typography>
          <Typography variant='body1'>{OFFICE_BUILDING}, {t("home.location.floor")}</Typography>

          <Typography variant='body1' style={{ paddingTop: '15px'}}>{t("contact.phone")}: {PHONE_NUMBER}</Typography>
          <Typography variant='body1'>{t("contact.email")}: {EMAIL_ADDRESS}</Typography>
        </div>
        <div className='location-map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491.2476583364029!2d-84.1330552236084!3d9.935516400548698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fd2eb06f74ad%3A0x37de80cc38ee1a24!2sCosta%20Legal!5e0!3m2!1sen!2scr!4v1707262689628!5m2!1sen!2scr" width="600" height="450" title='map' style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home;