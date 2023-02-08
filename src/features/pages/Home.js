import React from 'react'

import { Map } from '../layout/Map';

import { Preview } from '../layout/Preview';
import { Review } from '../layout/Review';
import './home.css'

export const Home = () => {
  return (
    <div className="page-content">
      <Map />
      <Preview />
      <Review />
    </div>
  )
}
