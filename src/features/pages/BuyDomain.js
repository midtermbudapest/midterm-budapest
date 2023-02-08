import React, { useEffect, useRef } from 'react'
import './buy-domain.css'

export const BuyDomain = () => {
  const ref = useRef()
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'inherit'
    }
  }, [])

  return (
    <div className="page-buy-domain">
      <iframe
        ref={ref}
        src="https://docs.google.com/forms/d/e/1FAIpQLSeb2ygXv3MW9yS613htuv2BBe-O1yqnylZhDtFFa-6anzu6Zw/viewform?embedded=true"
        width="640"
        height="1520"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Buy this domain"
      />
    </div>
  )
}
