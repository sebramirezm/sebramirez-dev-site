import React from 'react';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import Home from '../../src/components/Home';

describe('Home component', () => {
  test('renders the greeting and name', () => {
    render(
      <IntlProvider locale="en">
        <Home />
      </IntlProvider>
    );
    expect(screen.getByText('Hi there I\'m')).toBeInTheDocument();
    expect(screen.getByText('Sebastián Ramírez')).toBeInTheDocument();
  });

  // Add more tests as needed
});