import './Immigration.css';
import { Banner } from '../../components';
import immigrationBackground from '../../assets/images/immigration.jpg';
import immigrationData from '../../assets/data/immigration.json';
import { Typography, Accordion, AccordionSummary, AccordionDetails, useTheme, useMediaQuery  } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';

const Immigration = () => {
  const [t, i18n] = useTranslation("global");
  const accordions = immigrationData.main.accordions;
  console.log('accordions', accordions);

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
    </div>
    </>
  )
}

export default Immigration;