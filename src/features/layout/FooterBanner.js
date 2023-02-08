import { Link } from "react-router-dom";
import React, { useCallback, useEffect, useState } from 'react';
import './footer-banner.css';

export const FooterBanner = ({ isOpenMenu }) => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const hasSeenCookies = JSON.parse(localStorage.getItem('has_seen_cookies') || JSON.stringify(false))
    setIsVisible(!hasSeenCookies)
  }, [])

  const hideBanner = useCallback(() => {
    const hasSeenCookies = true
    setIsVisible(!hasSeenCookies)
    localStorage.setItem('has_seen_cookies', JSON.stringify(hasSeenCookies))
  }, [])

  useEffect(() => {
    const hasSeenCookies = JSON.parse(localStorage.getItem('has_seen_cookies') || JSON.stringify(false))
    setIsVisible(!hasSeenCookies && !isOpenMenu)
  }, [isOpenMenu])

  const containerClassName = ["footer-banner", isVisible && 'visible'].filter(Boolean)
  return (
    <footer className={containerClassName.join(' ')}>
      <div className="footer-banner-content cookie-notice">
        <div className="footer-text">
          We use cookies to enhance your experience while using our website. To learn more about the cookies we use and the data we collect, please check our <Link to="privacy">privacy policy</Link>.
        </div>
        <div className="footer-cta">
          <button type="button" onClick={hideBanner}>I Accept</button>
        </div>
      </div>
    </footer>
  )
}
