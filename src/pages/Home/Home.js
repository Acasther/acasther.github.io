import './Home.css';
import homeBackground from '../../assets/images/playa_lagosta.jpg';
import homeData from '../../assets/data/home';
import { Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [t, i18n] = useTranslation("global");
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
          <Typography variant='body1'>Trejos Montealegre, San Rafael de Escazú, San José</Typography>
          <Typography variant='body1'>Edificio Monterrico, {t("home.location.floor")}</Typography>

          <Typography variant='body1' style={{ paddingTop: '15px'}}>{t("contact.phone")}: +506 8390-8070</Typography>
          <Typography variant='body1'>{t("contact.email")}: info@costalegalcr.com</Typography>
        </div>
        <div className='location-map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491.24768568894433!2d-84.13277344849534!3d9.935498188093286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fda0a0d22a9f%3A0x4c65f0b3a1e30ccb!2sEdificio%20Monterrico!5e0!3m2!1sen!2scr!4v1706296702025!5m2!1sen!2scr" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home;