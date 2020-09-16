import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders the App', () => {
  const { container } = render(<App />);
  expect(container).toBeDefined();
});
