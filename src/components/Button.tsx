type ButtonProps = {
	handleClick: (
		event: React.MouseEvent<HTMLButtonElement>,
		id: number
	) => void;
};

export default function Button(props: ButtonProps) {
	let id = 3;
	return (
		<button
			onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
				props.handleClick(event, id)
			}
		>
			Click
		</button>
	);
}
