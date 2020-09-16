import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Grid from './Grid';

afterEach(cleanup);

it('renders the Row and Column', () => {
  const { container, getByText } = render(
    <Grid.Row>
      <Grid.Column>Data</Grid.Column>
    </Grid.Row>
  );

  const row = container.querySelector('.row');
  const col = container.querySelector('col');

  expect(row).toBeDefined();
  expect(col).toBeDefined();
});
