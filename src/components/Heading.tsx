type HeadingProps = {
	children: string;
};

export default function Heading(props: HeadingProps) {
	return <h4>{props.children}</h4>;
}
