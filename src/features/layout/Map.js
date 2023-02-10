import React, { useCallback, useRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import './map.css';

export const Map = () => {
  const ref = useRef()
  const scrollToReview = useCallback((e) => {
    e.preventDefault()
    const anchor = document.querySelector('#reviews');
    anchor.scrollIntoView({
      behavior: 'smooth',
    });
    window.gtag('event', 'cta_click_reviews');
  }, [])
  return (
    <div className="map-container">
      <MapContainer center={[47.4879, 19.0402]} zoom={13} scrollWheelZoom={false} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.midtermbudapest.org/copyright">OSM</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <div className="banner-container">
          <div className="banner">
            <button onClick={scrollToReview} type="button" ref={ref}>Read reviews</button>
          </div>
        </div>
      </MapContainer>
    </div>
  )
}
