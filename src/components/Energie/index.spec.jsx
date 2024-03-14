import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  MemoryRouter
} from 'react-router-dom';

import View from './index';

describe('Header', () => {
	it(`It renders without values`, () => {
		const valeurs = [];

		render(
				<View name={valeurs} />
		);
	});

	it(`It renders with values`, () => {
		const valeurs = [{
			region: 'A',
			annee: '2021',
			hydraulique: 0,
			eolien: 25,
			photovoltaique: 42
		}, {
			region: 'B',
			annee: '2021',
			hydraulique: 10,
			eolien: 205,
			photovoltaique: 142
		}];

		render(
				<View name={valeurs} />
		);
	});
});