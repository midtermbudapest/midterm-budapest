import React from 'react'
import { CommentoProvider } from '../../libs/commento/CommentoProvider';
import './review.css'

export const Review = () => {
  return (
    <div className="reviews-container" id="reviews">
      <h1>Reviews</h1>
      <div className="reviews">
        <CommentoProvider />
      </div>
    </div>
  )
}
