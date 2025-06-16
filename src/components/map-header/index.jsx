import React from 'react';

import './styles.scss';

const REALMS = [
  {
    min: 1,
    max: 29,
    name: 'The Brick Realm',
    description: 'Sturdy stone walls surround you.',
    theme: 'theme-brick',
  },
  {
    min: 30,
    max: 59,
    name: 'The Ornate Realm',
    description: 'Lavishly decorated halls gleam here.',
    theme: 'theme-ornate',
  },
  {
    min: 60,
    max: 89,
    name: 'The Amethyst Realm',
    description: 'A faint purple glow emanates from the walls.',
    theme: 'theme-purple',
  },
  {
    min: 90,
    max: Infinity,
    name: 'The Incan Realm',
    description: 'Ancient stonework dark as night.',
    theme: 'theme-inca-dark',
  },
];

export default function MapHeader({ currentFloor }) {
  const realm = REALMS.find(r => currentFloor >= r.min && currentFloor <= r.max) || REALMS[REALMS.length - 1];
  const { name, description, theme } = realm;
  return (
    <div className={`map-header ${theme}`} data-testid="map-header">
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

export { REALMS };
