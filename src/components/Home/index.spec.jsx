import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Home from './view';

describe('Home', () => {
	for(let i = 1; i < 1000; i *= 2) {
		it(`It renders (i)`, () => {
			render(
				<Home
					count={i}
					setCount={() => {}}
					width={1920}
					height={1080}
				/>
			);

			expect(screen.getAllByText(new RegExp('Lorem', 'i'))[0]).toBeInTheDocument();
			expect(screen.getAllByText(new RegExp(i, 'i'))[0]).toBeInTheDocument();
		});
	}
});