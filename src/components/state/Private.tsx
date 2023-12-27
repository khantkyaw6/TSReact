import Login from './Login';
import { ProfileType } from './Profile';

type PrivateProps = {
	isLoggedIn: boolean;
	Component: React.ComponentType<ProfileType>;
};

export default function Private({ isLoggedIn, Component }: PrivateProps) {
	if (isLoggedIn) {
		return <Component name='Khant Kyaw' />;
	} else {
		return <Login />;
	}
}
