export default function formatLocaleTime(time) {
	const date = new Date(time);

	return date.toLocaleDateString() + ' à ' + date.toLocaleTimeString();
}