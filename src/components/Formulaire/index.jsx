import { useState } from 'react';

export default function Formulaire() {
	const [user, setUser] = useState({
		name: '',
		firstName: '',
	});

	console.log(user);

	function handleChange(e) {
		setUser((currentUser) => ({
			...currentUser,
			[e.target.name]: e.target.value
		}));
	}

	function submitForm() {
		// Ici on fetch
	}

	return (
		<div>
			<input type="text" name="name" value={user.name} onChange={handleChange} />
			<input type="text" name="firstName" value={user.firstName} onChange={handleChange} />
		</div>
	);
}