import { render, screen } from '@testing-library/react';
import App from './App';
import Calculator from './Calculator/Calculator';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Calculator/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Check initial Ouptut Screen 0', () => {
  render(<Calculator />);
  const outputScreen = screen.getByTestId('OutputScreen');
  expect(outputScreen).toBeInTheDocument();
  expect(outputScreen.textContent).toBe('0');
});