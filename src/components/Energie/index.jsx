import useEnergyHistory from '../../hooks/useEnergyHistory';

import View from './view.jsx';

export default function Energie() {
	const historique = useEnergyHistory();

	return (
		<View
			historique={historique}
		/>
	);
}