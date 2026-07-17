import React from 'react';
import "./Contact.css";
import Banner from '../../components/Banner/Banner';
import immigrationBackground from '../../assets/images/immigration.jpg';
import { useTranslation } from 'react-i18next';
import Info from '../../components/Info/Info';

const Contact = () => {
  const [t, i18n]  = useTranslation("global");

  return (
    <>
    <Banner bannerImage={immigrationBackground} title={t("contact.title")} />
    <div className="contact-container">
      <Info></Info>
    </div>
    </>
  )
}

export default Contact;
