import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  MemoryRouter
} from 'react-router-dom';

import View from './index';

describe('Header', () => {
	const valeurs = [{
		name: 'Axel',
		text: 'Hello Axel'
	}, {
		name: 'Bob',
		text: 'Salut Bob'
	}];

	for(const valeur of valeurs) {
		it(`It renders (${valeur.name})`, () => {
			render(
				<MemoryRouter>
					<View name={valeur.name} />
				</MemoryRouter>
			);
			expect(screen.getAllByText(new RegExp(valeur.text, 'i'))[0]).toBeInTheDocument();
		});
	}
});