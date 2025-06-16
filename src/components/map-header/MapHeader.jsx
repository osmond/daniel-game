import React from 'react';

import './styles.scss';

const MapHeader = ({ title, className = '' }) => {
  return (
    <div className={`map-header__container ${className}`.trim()}>
      <span className="map-header__title">{title}</span>
    </div>
  );
};

export default MapHeader;
