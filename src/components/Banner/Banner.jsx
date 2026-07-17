import React from 'react';
import { Typography } from '@mui/material';
import './Banner.css';

export const Banner = ((props) => {
  const { bannerImage, title } = props;

  return (
    <div className='top-banner' style={{ backgroundImage:`url(${bannerImage})` }}>
      <Typography variant='h1'>{title}</Typography>
    </div>
  )
})

export default Banner;