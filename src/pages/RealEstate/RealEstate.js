import React from 'react';
import './RealEstate.css';
import realEstateBackground from '../../assets/images/real_estate.jpg';
import data from "../../assets/data/realEstate";
import { Banner } from '../../components';
import { useTranslation, Trans } from 'react-i18next';
import { Typography, Button  } from '@mui/material';
import { useNavigate } from "react-router-dom";

const RealEstate = () => {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  return (
    <>
    <Banner bannerImage={realEstateBackground} title={t("home.realEstate.title")} />
    <div className='real-estate'>
      <div className='real-estate-summary'>
        <Typography variant='h2'>{t("realEstate.titleCR")}</Typography>
        <span className='article-divider'></span>
        <Typography variant='body2' className='real-estate-paragraph'>{t("realEstate.summary.paragraph1")}</Typography>
        <Typography variant='body2' className='real-estate-paragraph'>{t("realEstate.summary.paragraph2")}</Typography>
        <Typography variant='body2' className='real-estate-paragraph'><Trans i18nKey="realEstate.summary.paragraph3">{t("realEstate.summary.paragraph3")}</Trans></Typography>
      </div>
      <div className='real-estate-services'>
        {data.map((item, idx) => (
          <div className='real-estate-service' key={idx}>            
            <Typography variant='h2'>{t(item.title)}</Typography>
            <span className='article-divider'></span>
            <div className='real-estate-service-content'>
              <Typography variant='body2'><Trans i18nKey={item.desc}>{t(item.desc)}</Trans></Typography>
              <img src={item.image} width={650} />
            </div>
          </div>
        ))}
      </div>
      <div className='real-estate-contact'>
        <Typography variant='h2' sx={{ paddingBottom: '10px'}}>{t("common.readyMove")}</Typography>
        <Button onClick={() => navigate('/contact')}>{t("contact.contactNow")}</Button>
      </div>
    </div>
    </>
  )
}

export default RealEstate;
