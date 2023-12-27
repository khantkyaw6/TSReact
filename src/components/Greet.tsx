type GreetProps = {
	name: string;
	messageCount: number;
	isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
	return (
		<div>
			<h1>Welcome Typescript</h1>
			{props.isLoggedIn ? (
				<h2>
					Your name is {props.name} and you have {props.messageCount}{' '}
					unread messages.
				</h2>
			) : (
				<h2>Welcome Guests</h2>
			)}
		</div>
	);
};

export default Greet;
