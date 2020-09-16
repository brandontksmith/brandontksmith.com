import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ProfileCard from './ProfileCard';

afterEach(cleanup);

it('renders the ProfileCard', () => {
  const { container } = render(<ProfileCard />);
  expect(container).toBeDefined();
});

it('does not display the LinkedIn icon if linkedInUrl is not provided', () => {
  const { container } = render(<ProfileCard />);
  const linkedInLink = container.querySelector('.linkedin-link');
  expect(linkedInLink).toBeNull();
});

it('displays the LinkedIn icon if linkedInUrl is provided', () => {
  const { container } = render(<ProfileCard linkedInUrl="https://www.linkedin.com/in/brandontksmith" />);
  const linkedInLink = container.querySelector('.linkedin-link');
  expect(linkedInLink).toBeDefined();
});

it('does not display the GitHub icon if githubUrl is not provided', () => {
  const { container } = render(<ProfileCard />);
  const githubLink = container.querySelector('.github-link');
  expect(githubLink).toBeNull();
});
