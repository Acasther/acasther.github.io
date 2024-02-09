import './Immigration.css';
import Banner from '../../components/Banner/Banner';
import immigrationBackground from '../../assets/images/immigration.jpg';
import immigrationData from '../../assets/data/immigration.json';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Button  } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation, Trans } from 'react-i18next';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Immigration = () => {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const { accordions, requirementList, notesList } = immigrationData;
  const isMobile = useSelector(state => state.mobile.isMobile);

  return (
    <>
    <Banner bannerImage={immigrationBackground} title={t("home.immigration.title")} />
    <div className='immigration-summary'>
      <Typography variant='h2'>{t("immigration.titleCR")}</Typography>
      <span className='article-divider'></span>
      <Typography variant='body2'>{t("immigration.summary")}</Typography>
    </div>

    <div className='immigration-container'>
      <Typography variant='h2'>{t("immigration.residencyServices")}</Typography>
      <span className='article-divider'></span>
      {accordions.map((item, idx) => (
        <Accordion defaultExpanded={isMobile ? false : true} key={idx} slotProps={{ transition: { unmountOnExit: true } }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${idx}-content`} id={`panel${idx}-header`}>
            <Typography variant='h3'>{t(item.title)}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='body2'>{t(item.desc)}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>

    <div className='immigration-container'>
      <Typography variant='h2'>{t("immigration.requirements.title")}</Typography>
      <span className='article-divider'></span>
      <Typography variant='body2'>{t("immigration.requirements.description")}</Typography>
      <div className='immigration-list'>
        <ol>
          {requirementList.map((req, idx) => (
            <li className='immigration-list-item' key={idx}>
              <Typography variant='body2' key={idx}><Trans i18nKey={req}>{t(req)}</Trans></Typography>
            </li>
          ))}
        </ol>
      </div>
      <Typography variant='h3'>{t("immigration.requirements.notes.title")}</Typography>
      <div className='immigration-list'>
        <ul>
          {notesList.map((req, idx) => (
            <li className='immigration-list-item' key={idx}>
              <Typography variant='body2' key={idx}><Trans i18nKey={req}>{t(req)}</Trans></Typography>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className='immigration-contact'>
      <Typography variant='h2' sx={{ paddingBottom: '10px'}}>{t("common.readyMove")}</Typography>
      <Button onClick={() => navigate('/contact')}>{t("contact.contactNow")}</Button>
    </div>
    </>
  )
}

export default Immigration;