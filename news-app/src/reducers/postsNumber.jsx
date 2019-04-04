import { UPDATE_DATA } from "../actions";

const initialState = {
	data: 2,
};

const postsNumberReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_DATA:
			return {...state, ...action.payload};
		default:
			return state;
	}
};

export default postsNumberReducer;
