import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import ExpandableCard from './ExpandableCard';

import ChevronDown from '../assets/chevron-down.svg';
import ChevronRight from '../assets/chevron-right.svg';

afterEach(cleanup);

it('renders the ExpandableCard', () => {
  const { container, getByText } = render(<ExpandableCard title="Test" color="primary" />);
  expect(container).not.toBeNull();
});

it('initially renders the ExpandableCard in an expanded state', () => {
  const { container } = render(<ExpandableCard />);
  const body = container.querySelector('.body');
  expect(body).not.toBeNull();
});

it('clicking on the header toggles the ExpandableCard', async () => {
  const { container } = render(<ExpandableCard />);
  const header = container.querySelector('.header');
  await fireEvent.click(header);
  const body = container.querySelector('.body');
  expect(body).toBeNull();
});

it('renders the provided title in the header', () => {
  const { getByText } = render(<ExpandableCard title="Test the Title" />);
  const title = getByText('Test the Title');
  expect(title).toBeDefined();
});

it('renders an ExpandableCard with the provided color', () => {
  const { container } = render(<ExpandableCard color="primary" />);
  const el = container.querySelector('.primary');
  expect(el).toBeDefined();
});

it('renders the children in the ExpandableCard when expanded', () => {
  const { getByText } = render(
    <ExpandableCard title="Test">
      <div>Children</div>
    </ExpandableCard>
  );
  const children = getByText('Children');
  expect(children).toBeDefined();
  expect(children.innerHTML).toBe('Children');
});

it('renders the chevron in the down position in an expanded state', () => {
  const { container } = render(<ExpandableCard />);
  const el = container.querySelector('.expand');
  expect(el.src).toContain(ChevronDown);
});

it('renders the chevron in the right position in a collapsed state', async () => {
  const { container } = render(<ExpandableCard />);
  const header = container.querySelector('.header');
  await fireEvent.click(header);
  const el = container.querySelector('.expand');
  expect(el.src).toContain(ChevronRight);
});
