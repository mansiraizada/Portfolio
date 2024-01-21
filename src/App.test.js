import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders App with correct text', () => {
render(<App/>);
const buttonElement = screen.getByText(/Sushi/i);
expect(buttonElement).toBeInTheDocument();
});