import './Immigration.css';
import { Banner } from '../../components';
import immigrationBackground from '../../assets/images/immigration.jpg';
import immigrationData from '../../assets/data/immigration.json';
import { Typography, Accordion, AccordionSummary, AccordionDetails, useTheme, useMediaQuery  } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation, Trans } from 'react-i18next';

const Immigration = () => {
  const [t, i18n] = useTranslation("global");
  const accordions = immigrationData.main.accordions;
  const reqList = immigrationData.main.requirementList;
  const notesList = immigrationData.main.notesList;

  const theme = useTheme({
    breakpoints: {
      values: {
        lg: 1000
      },
    }
  });

  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

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
          {reqList.map((req, idx) => (
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
    </>
  )
}

export default Immigration;