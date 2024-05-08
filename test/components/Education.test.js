import React from 'react';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import Education from '../../src/components/Education';

describe('Education component', () => {
  test('renders the education title and details', () => {
    render(
      <IntlProvider locale="en">
        <Education />
      </IntlProvider>
    );
    expect(screen.getByText('Formative Learning')).toBeInTheDocument();
    expect(screen.getByText('Computer Programmer Analyst')).toBeInTheDocument();
    expect(screen.getByText('Telecommunications Technician')).toBeInTheDocument();
    expect(screen.getByText('Volunteer Staff')).toBeInTheDocument();
  });
});