import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import Header from '../../src/components/Header';

describe('Header component', () => {
  test('renders the navigation links', () => {
    render(
      <IntlProvider locale="en">
        <Header />
      </IntlProvider>
    );
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });

  test('changes language when a language flag is clicked', () => {
    const mockOnLanguageChange = jest.fn();
    render(
      <IntlProvider locale="en">
        <Header onLanguageChange={mockOnLanguageChange} />
      </IntlProvider>
    );
    fireEvent.click(screen.getByAltText('es'));
    expect(mockOnLanguageChange).toHaveBeenCalledWith('es');
  });

});