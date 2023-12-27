type PersonListProps = {
	data: {
		firstName: string;
		lastName: string;
	}[];
};

function PersonList(props: PersonListProps) {
	return (
		<div>
			{props.data.map((name, index) => (
				<h3 key={index}>
					{name.firstName} {name.lastName}
				</h3>
			))}
		</div>
	);
}

export default PersonList;
