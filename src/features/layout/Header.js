import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

export const Header = ({ openMenu }) => {
  return (
    <header className="header">
      <div className="mobile_header">
        <div className="mobile-logo">
          <Link to="/">
            <div className="logo">
              <div>
                <span>M</span>idterm<span className="delimiter">-</span>Budapest
              </div>
              <div className="suffix">Reviews</div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
