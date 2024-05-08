import React from 'react';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import About from '../../src/components/About';

describe('About component', () => {
  test('renders the about title and description', () => {
    render(
      <IntlProvider locale="en">
        <About />
      </IntlProvider>
    );
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('My career includes enriching experiences in developing projects across various areas using Java, Spring, Relational and Non-Relational Databases, and Git.')).toBeInTheDocument();
  });
});