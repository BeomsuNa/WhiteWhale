import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Login from '../sections/Login/Login';

test('Login', () => {
  render(typeof Login);
  const handleElement = screen.getAllByText('Login');
  expect(handleElement).toBeInTheDocument();
});
