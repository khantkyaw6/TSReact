type PersonProps = {
	data: {
		firstName: string;
		lastName: string;
	};
};

export default function Person(props: PersonProps) {
	return (
		<h3>
			{props.data.firstName} {props.data.lastName}
		</h3>
	);
}
