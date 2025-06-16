import React from 'react';
import { render, screen } from '@testing-library/react';
import MapHeader from '../../components/map-header';
import realms from '../../data/realms';

describe('MapHeader', () => {
  test('shows realm details for various floors', () => {
    realms.slice(0, 3).forEach((realm) => {
      const floor = realm.floors[0];
      render(<MapHeader currentFloor={floor} />);
      expect(screen.getByText(realm.name)).toBeInTheDocument();
      expect(screen.getByText(realm.description)).toBeInTheDocument();
      expect(screen.getByTestId('map-header').className).toMatch(new RegExp(realm.themeClass));
    });
  });
});
