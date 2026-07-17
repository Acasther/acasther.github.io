import './Sidebar.css';
import React from 'react';
import { Stack, Link, NativeSelect } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Sidebar = ((props) => {
  const {pages, languages, activeTab, lang, handleLanguage, navigateLink, handleMenu} = props;

  return (
    <div className='sidebar-container'>
      <Stack direction='column' spacing={4} className='sidebar-stack'> 
        {pages.map((page) => (
          <Link onClick={() => { navigateLink(page.link); handleMenu() }} underline="none" className='menuItem' color='inherit' 
            sx={{ color: page.id === activeTab ? '#6695fa' : '#FFFFFF' }} key={page.name}>
            {page.name}
          </Link>
        ))}
      </Stack>
      <div className='lang-dropdown-container'>
        <NativeSelect className='lang-dropdown' IconComponent={KeyboardArrowDownIcon} value={lang} 
          onChange={(event) => { handleLanguage(event); handleMenu()}}>
          {languages.map((language) => (
            <option value={language.id} key={language.id} style={{color: 'black'}}>{language.name}</option>
          ))}
        </NativeSelect>
      </div>
    </div>
  )
});
