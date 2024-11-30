import React from 'react';
import App from '../src/App';

import { render, screen } from '@testing-library/react';

describe('App component test', () => {
	it('should render the title', () => {
		render(<App />);

		expect(
			screen.getByText(/Click on the Vite and React logos to learn more/i)
		).toBeInTheDocument();
	});
});
