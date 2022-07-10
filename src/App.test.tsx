import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('<App />', () => {
  it ('render', () => {
    render(<App />);

    expect(screen.getByText('Hello Vite + React!')).toBeInTheDocument();
  });

  it('change count value', async () => {
    render(<App />);

    expect(screen.getByText('count is: 0')).toBeInTheDocument();

    await userEvent.click(screen.getByText('count is: 0'));

    expect(screen.getByText('count is: 1')).toBeInTheDocument();
  });
});
