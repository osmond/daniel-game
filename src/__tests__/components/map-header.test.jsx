import React from 'react';
import { render, screen } from '@testing-library/react';
import MapHeader from '../../components/map-header';

describe('MapHeader', () => {
  test('shows brick realm for floor 1', () => {
    render(<MapHeader currentFloor={1} />);
    expect(screen.getByText('The Brick Realm')).toBeInTheDocument();
    expect(screen.getByText('Sturdy stone walls surround you.')).toBeInTheDocument();
    expect(screen.getByTestId('map-header').className).toMatch(/theme-brick/);
  });

  test('shows ornate realm for floor 35', () => {
    render(<MapHeader currentFloor={35} />);
    expect(screen.getByText('The Ornate Realm')).toBeInTheDocument();
    expect(screen.getByText('Lavishly decorated halls gleam here.')).toBeInTheDocument();
    expect(screen.getByTestId('map-header').className).toMatch(/theme-ornate/);
  });

  test('shows purple realm for floor 70', () => {
    render(<MapHeader currentFloor={70} />);
    expect(screen.getByText('The Amethyst Realm')).toBeInTheDocument();
    expect(screen.getByText('A faint purple glow emanates from the walls.')).toBeInTheDocument();
    expect(screen.getByTestId('map-header').className).toMatch(/theme-purple/);
  });
});
