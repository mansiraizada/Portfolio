import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Home from './Home.jsx';

test('renders Home with Mansi', () => {
render(<Home/>); //kya render
//koi action perform ho raha -------------------------
    const buttonElement = screen.getByText(/Mansi/i); //what should be there on screen
    
expect(buttonElement).toBeInTheDocument();
});