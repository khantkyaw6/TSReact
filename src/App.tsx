import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

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

	return (
		<div>
			<h1>App</h1>
			<Greet name='Khant Kyaw' messageCount={20} isLoggedIn={true} />
			<Person data={personObj} />
			<PersonList data={personList} />
		</div>
	);
};

export default App;
