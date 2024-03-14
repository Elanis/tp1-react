import { useEffect, useState } from 'react';

export default function useEnergyHistory() {
	const [history, setHistory] = useState([]);

	useEffect(() => {
		async function getData() {
			// API
			const result = await fetch(
				'https://raw.githubusercontent.com/Elanis/tp1-react/master/production-electrique-par-filiere-a-la-maille-region.json'
			);

			if(!result.ok) {
				throw 'Pas OK !';
			}

			const data = await result.json();

			// Formattage
			const retour = [];
			for(let i = 0; i < data.length; i++) {
				retour.push({
					id: data[i].recordid,
					region: data[i].fields.nom_region,
					annee: data[i].fields.annee,
					eolien: data[i].fields.energie_produite_annuelle_eolien_enedis_mwh,
					hydraulique: data[i].fields.energie_produite_annuelle_hydraulique_enedis_mwh,
					photovoltaique: data[i].fields.energie_produite_annuelle_photovoltaique_enedis_mwh,
					cogeneration: data[i].fields.energie_produite_annuelle_cogeneration_enedis_mwh,
					bio_energie: data[i].fields.energie_produite_annuelle_bio_energie_enedis_mwh,
				});
			}

			retour.sort((a, b) => {
				// Tri par année croissante ...
				if(a.annee < b.annee) {
					return -1;
				}

				if(a.annee > b.annee) {
					return 1;
				}

				// ... puis par région
				if(a.region < b.region) {
					return -1;
				}

				if(a.region > b.region) {
					return 1;
				}

				return 0;
			});

			setHistory(retour);
		}

		getData();
	}, []);


	return history;
}