import React from 'react';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import Experience from '../../src/components/Experience';

describe('Experience component', () => {
  test('renders the experience title and details', () => {
    render(
      <IntlProvider locale="en">
        <Experience />
      </IntlProvider>
    );
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Globant')).toBeInTheDocument();
    expect(screen.getByText('23 People')).toBeInTheDocument();
    expect(screen.getByText('Advise S.A.')).toBeInTheDocument();
  });

});