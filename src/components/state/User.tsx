import { useState } from 'react';

type AuthUser = {
	name: string;
	email: string;
};

export default function User() {
	const [userData, setUserData] = useState<null | AuthUser>(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const loggedInHandler = () => {
		setIsLoggedIn(true);
		setUserData({
			name: 'Khant Kyaw',
			email: 'kk@gmail.com',
		});
	};
	const loggedOutHandler = () => {
		setIsLoggedIn(false);
		setUserData(null);
	};
	return (
		<div>
			<button onClick={loggedInHandler}>Login</button>
			<button onClick={loggedOutHandler}>Logout</button>
			{isLoggedIn ? (
				<div>
					<h2>My UserName is {userData?.name}</h2>
					<h3>My email is {userData?.email}</h3>
				</div>
			) : (
				<>
					<h3>You are logout</h3>
				</>
			)}
		</div>
	);
}
