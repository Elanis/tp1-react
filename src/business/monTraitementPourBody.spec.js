import { describe, it } from 'vitest';

import monTraitementPourBody from './monTraitementPourBody';

describe('monTraitementPourBody', () => {
	for(const valeur of [0, 42, 58, 136]) {
		it(`input = ${valeur}`, () => {
			// Arrange
			const valeurInput = valeur;

			// Act
			const valeurRetour = monTraitementPourBody(valeurInput);

			// Assert
			assert.equal(
				valeurRetour,
				valeurInput + 1
			);
		});
	}
});