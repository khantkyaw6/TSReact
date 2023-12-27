import { useState } from 'react';

function LoggedIn() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLoggedIn = () => {
		setIsLoggedIn(true);
	};
	const handleLoggedOut = () => {
		setIsLoggedIn(false);
	};
	return (
		<div>
			<button onClick={handleLoggedIn}>Login</button>
			<button onClick={handleLoggedOut}>Logout</button>
			<div>User is {isLoggedIn ? `logged in ` : `logged out`}</div>
		</div>
	);
}

export default LoggedIn;
