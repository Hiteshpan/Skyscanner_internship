import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Ensure jest-dom is included for better assertions
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
    // Verify that the header is rendered
    expect(screen.getByText(/Flight Schedule/i)).toBeInTheDocument();
  });

  it('renders calendar input and button components', () => {
    render(<App />);
    // Verify that the calendar input is rendered
    expect(screen.getByPlaceholderText(/Departure date/i)).toBeInTheDocument();
    // Verify that the button with text 'Continue' is rendered
    expect(screen.getByRole('button', { name: /Continue/i })).toBeInTheDocument();
  });

  it('renders calendar and header content', () => {
    render(<App />);
    // Verify the calendar component is rendered (check by specific text or role)
    expect(screen.getByRole('heading', { name: /Flight Schedule/i })).toBeInTheDocument();
    // Check if the calendar is present, can check using specific attributes if needed
    expect(screen.getByPlaceholderText(/Departure date/i)).toBeInTheDocument();
  });

  it('button shows alert on click', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /Continue/i });
    // Spy on the alert function to test if it gets called
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    button.click();
    expect(window.alert).toHaveBeenCalledWith(`Your "Flight Schedule" set successfully!!!`);
  });
});
