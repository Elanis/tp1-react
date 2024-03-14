import './index.css';

function formatEnergy(input) {
	return Math.floor(input || 0);
}

export default function Energie({ historique }) {
	return (
		<table>
			<thead>
				<tr>
					<th>Region</th>
					<th>Année</th>
					<th>Hydraulique</th>
					<th>Eolien</th>
					<th>Photovoltaique</th>
				</tr>
			</thead>
			<tbody>
				{historique.map((line) => 
					<tr key={line.region}>
						<td>{line.region}</td>
						<td>{line.annee}</td>
						<td>{formatEnergy(line.hydraulique)}</td>
						<td>{formatEnergy(line.eolien)}</td>
						<td>{formatEnergy(line.photovoltaique)}</td>
					</tr>
				)}
			</tbody>
		</table>
	);
}