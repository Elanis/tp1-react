import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import View from './index';

describe('Footer', () => {
	it('It renders', () => {
		render(<View />);
		expect(screen.getAllByText(new RegExp('Mon super site 2024-2024', 'i'))[0]).toBeInTheDocument();
	});
});