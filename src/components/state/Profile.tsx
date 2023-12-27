export type ProfileType = {
	name: string;
};

function Profile({ name }: ProfileType) {
	return <div>{name}'s Profile</div>;
}

export default Profile;
