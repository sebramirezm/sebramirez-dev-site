import React from 'react';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import Footer from '../../src/components/Footer';

describe('Footer component', () => {
  test('renders the footer message and copyright', () => {
    render(
      <IntlProvider locale="en">
        <Footer />
      </IntlProvider>
    );
    expect(screen.getByText('Thanks for visiting!')).toBeInTheDocument();
    expect(screen.getByText('© Copyright 2024')).toBeInTheDocument();
  });
});