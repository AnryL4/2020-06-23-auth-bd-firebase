import {
	CREATE_POST,
	SHOW_LOADER,
	HIDE_LOADER,
	SHOW_ALERT,
	HIDE_ALERT,
	DELETE_POST,
	SHOW_MODAL,
	HIDE_MODAL,
	SIGN_IN,
	SET_TOKEN,
	SET_AUTHOR,
} from './types';

export function createPost(post) {
	return {
		type: CREATE_POST,
		payload: post,
	};
}

export function showLoader() {
	return {
		type: SHOW_LOADER,
	};
}

export function hideLoader() {
	return {
		type: HIDE_LOADER,
	};
}

export function showModal(payload) {
	return {
		type: SHOW_MODAL,
		payload,
	};
}

export function hideModal() {
	return {
		type: HIDE_MODAL,
	};
}

export function showAlert(text, alertType) {
	return (dispatch) => {
		dispatch({
			type: SHOW_ALERT,
			payload: text,
			alertType,
		});
	};
}

export function hideAlert(alertType) {
	return {
		type: HIDE_ALERT,
		alertType,
	};
}

export function deletePost(id) {
	return {
		type: DELETE_POST,
		payload: id,
	};
}

export function signIn(dataFirebase) {
	return {
		type: SIGN_IN,
		dataFirebase,
	};
}

export function setToken(idToken) {
	return {
		type: SET_TOKEN,
		idToken,
	};
}

export function setAuthor(author) {
	return {
		type: SET_AUTHOR,
		author,
	};
}
