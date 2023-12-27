type ContainerProps = {
	children: React.ReactNode;
	style: React.CSSProperties;
};

function Container(props: ContainerProps) {
	return <div style={props.style}>{props.children}</div>;
}

export default Container;
