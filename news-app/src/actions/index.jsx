export const UPDATE_DATA = 'UPDATE_DATA';

export const changePostsNum = newnum => ({
	type: UPDATE_DATA,
	payload: {data: newnum}
});
