import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  MemoryRouter
} from 'react-router-dom';

import View from './index';

describe('Layout', () => {
	it('It renders', () => {
		render(
			<MemoryRouter>
				<View name={'Axel'} />
			</MemoryRouter>
		);
		expect(screen.getAllByText(new RegExp('Hello Axel', 'i'))[0]).toBeInTheDocument();
		expect(screen.getAllByText(new RegExp('Mon super site 2024-2024', 'i'))[0]).toBeInTheDocument();
	});
});