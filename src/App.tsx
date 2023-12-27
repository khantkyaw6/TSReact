import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Counter from './components/state/Counter';
import Private from './components/state/Private';
import Profile from './components/state/Profile';
import User from './components/state/User';

const App = () => {
	const personObj = {
		firstName: 'SE Dev',
		lastName: 'Khant',
	};

	const personList = [
		{
			firstName: 'Grace',
			lastName: 'Berry',
		},
		{
			firstName: 'Wayne',
			lastName: 'Rooney',
		},
		{
			firstName: 'Bruce',
			lastName: 'Spencer',
		},
	];

	let SomeText = () => {
		return <h3>This is some text with style</h3>;
	};

	const clickHandler = (
		event: React.MouseEvent<HTMLButtonElement>,
		id: number
	) => {
		console.log(event, id);
	};

	return (
		<div>
			{/* <Greet name='Khant Kyaw' messageCount={20} isLoggedIn={true} />
			<Person data={personObj} />
			<PersonList data={personList} /> */}
			<Status status='error' />
			<Heading>This is Children Text</Heading>
			<Container
				style={{ border: '20px', color: 'red', fontSize: '40px' }}
			>
				{<SomeText />}
			</Container>
			<Button handleClick={(event) => clickHandler(event, 5)} />
			<Input
				value=''
				handleChange={(event) => {
					console.log(event.target.value);
				}}
			/>
			<User />
			<Counter />
			<Private isLoggedIn={false} Component={Profile} />
		</div>
	);
};

export default App;
