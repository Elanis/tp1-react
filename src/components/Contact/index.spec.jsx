import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Contact from './view';

describe('Contact', () => {
	for(let i = 1; i < 1000; i *= 2) {
		it(`It renders (i)`, () => {
			render(<Contact count={i} />);

			expect(screen.getAllByText(new RegExp('Un text random', 'i'))[0]).toBeInTheDocument();
			expect(screen.getAllByText(new RegExp(i, 'i'))[0]).toBeInTheDocument();
		});
	}
});