let user={
	username:'',
	email:''

}
export default function userReducer(state=user, action){
	switch (action.type){
		case 'xxx':
			return state
		default:
			return state;

	}
}