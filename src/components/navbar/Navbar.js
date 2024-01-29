import './Navbar.css';
import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Select, FormControl, Stack, Link, Fade, useMediaQuery, useTheme, Box, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/logos/costa_legal_wt.png';
import usFlag from '../../assets/icons/us_flag.png';
import crFlag from '../../assets/icons/costa_rica_flag.png';
import { Sidebar } from '../Sidebar/Sidebar';
import { KeyboardArrowDown } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [t, i18n] = useTranslation("global");
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState('en');
  const [activeTab, setActiveTab] = useState('');
  
  const pages = [
    {
      "id": "home",
      "name": t("links.home"),
      "link": "/"
    },
    {
      "id": "immigration",
      "name": t("links.immigration"),
      "link": "/immigration"
    },
    {
      "id": "realEstate",
      "name": t("links.realEstate"),
      "link": "/real-estate"
    },
    {
      "id": "insurance",
      "name": t("links.insurance"),
      "link": "/insurance"
    },
    {
      "id": "contact",
      "name": t("links.contactUs"),
      "link": "/contact"
    }
  ];

  const languages = [
    {
      "id": "en",
      "name": "English",
      "flag": usFlag
    },
    {
      "id": "es",
      "name": "Español",
      'flag': crFlag
    }
  ]

  const theme = useTheme({
    breakpoints: {
      values: {
        lg: 1000
      },
    }
  });

  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const handleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  const renderLangOption = (selectedLang) => {
    const selectedLanguageObj = languages.find(item => item.id === selectedLang);
    return selectedLanguageObj.name.substring(0, 2).toUpperCase();
  }

  const handleLanguage = (event) => {
    changeLanguage(event.target.value)
  }

  const changeLanguage = (newLang) => {
    setLang(newLang);
  }

  const navigateLink = (link) => {
    navigate(link)
  }

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [i18n, lang]);

  useEffect(() => {
    menuOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
  }, [menuOpen]);

  useEffect(() => {
    console.log('Location', location);
    const currentPath = location.pathname.endsWith('/') ? location.pathname.slice(0, -1) : location.pathname;
    console.log('currentPath', currentPath)
    let tab = pages.find(page => page.link === currentPath);
    tab = tab ? tab : pages[0];
    setActiveTab(tab.id);
    console.log('Active tab', activeTab);
  }, [pages, location, activeTab]);

  const AppMenu =() => {
    return (
    isMobile ? (
      <>
      <div className='navbar-icon-btn'>
        <IconButton className='navbar-icon' aria-label='menu' size='large' color='inherit' onClick={handleMenu}>
          {menuOpen ? ( <CloseIcon /> ) : ( <MenuIcon /> )}
        </IconButton>
      </div>
      <Fade in={menuOpen}>
        <Box sx={{ zIndex: 1}}>
          <Sidebar pages={pages} activeTab={activeTab} languages={languages} lang={lang} handleLanguage={handleLanguage} navigateLink={navigateLink} />
        </Box>
      </Fade>
      </>
    ) : (
      <Stack direction='row' spacing={2} className='menuStack'> 
        {pages.map((page) => (
          <Link onClick={() => navigateLink(page.link)} underline="none" className='menuItem' color='inherit' 
            sx={{ color: page.id === activeTab ? '#6695fa' : '#FFFFFF', transition: 'color 0.3s ease-in-out' }} key={page.name}>
            {page.name}
          </Link>
        ))}
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <Select sx={{ fontSize: '20px', fontWeight: 500, color: 'white', fill: 'white' }} defaultValue={lang} value={lang} IconComponent={KeyboardArrowDown}
            onChange={handleLanguage} className='language-button' renderValue={renderLangOption}>
            {languages.map((language) => (
              <MenuItem sx={{ fontWeight: lang === language.id ? 600 : 400, fontSize: '20px', width: '170px'}} value={language.id} key={language.id}>
                <div className='language-option'>
                  <div className='language-name'>{language.name}</div>
                  <div className='language-flag-container'><img src={language.flag} alt='logo' className='language-flag-image' /></div>
                </div>
                </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    ));
  }

  return (
    <AppBar position='sticky' color='transparent' style={{ background: 'black',
      boxShadow: 'none', transition: 'background 0.3s ease-in-out'}}>
      <Toolbar>
        <div style={{ flexGrow: 1}} className='icon'>
          <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{ padding: '3px'}}>
            <img src={logo} alt="logo" className='navbar-logo' />
          </IconButton>
        </div>
        <AppMenu />
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;