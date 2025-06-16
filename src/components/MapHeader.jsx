import React from 'react';
import realms from '../data/realms';

import './map-header/styles.scss';

const MapHeader = ({ currentFloor }) => {
    const floorKey = String(currentFloor);
    const realm = realms.find(r => r.floors.includes(floorKey));

    if (!realm) return null;

    return (
        <div className={`map-header ${realm.themeClass || ''}`.trim()}>
            <h2>{realm.name}</h2>
            {realm.description && <p>{realm.description}</p>}
        </div>
    );
};

export default MapHeader;
