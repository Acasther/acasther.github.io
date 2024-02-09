import React from 'react';
import './Insurance.css';
import insuranceBackground from '../../assets/images/insurance.jpg';
import insLogo from '../../assets/logos/ins_white.png';
import data from "../../assets/data/insurance";
import Banner from '../../components/Banner/Banner';
import { Typography, Button  } from '@mui/material';
import { useTranslation, Trans } from 'react-i18next';
import { useNavigate } from "react-router-dom";

const Insurance = () => {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  return (
    <>
    <Banner bannerImage={insuranceBackground} title={t("home.insurance.title")} />
    <div className='insurance-partner-container'>
      <Typography variant='h2' sx={{ color: '#FFFFFF'}}>{t("insurance.partner")}</Typography>
      <img src={insLogo} />
    </div>
    <div className='insurance'>
      <div className='insurance-summary'>
        <Typography variant='h2'>{t("insurance.titleCR")}</Typography>
        <span className='article-divider'></span>
        <Typography variant='body2' className='insurance-paragraph'>{t("insurance.summary.paragraph1")}</Typography>
        <Typography variant='body2' className='insurance-paragraph'>{t("insurance.summary.paragraph2")}</Typography>
        <Typography variant='body2' className='insurance-paragraph'>{t("insurance.summary.paragraph3")}</Typography>
      </div>
      <div className='insurance-services'>
        {data.map((item, idx) => (
          <div className='insurance-service' key={idx}>            
            <Typography variant='h2'>{t(item.title)}</Typography>
            <span className='article-divider'></span>
            <div className='insurance-service-content'>
              <Typography variant='body2'><Trans i18nKey={item.desc} components={{ space: <span />}}>{t(item.desc)}</Trans></Typography>
              <img src={item.image} width={650} alt="Content"/>
            </div>
          </div>
        ))}
      </div>
      <div className='insurance-contact'>
        <Typography variant='h2' sx={{ paddingBottom: '10px'}}>{t("common.moreInfo")}</Typography>
        <Button onClick={() => navigate('/contact')}>{t("contact.contactNow")}</Button>
      </div>
    </div>
    </>
  )
}

export default Insurance;
