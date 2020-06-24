import { LocalStorageApi } from '../utils/localStorageApi';
import {
	SHOW_LOADER,
	HIDE_LOADER,
	SHOW_ALERT,
	HIDE_ALERT,
	SHOW_MODAL,
	HIDE_MODAL,
	SET_TOKEN,
	SET_AUTHOR,
} from './types';

const initialState = {
	loading: false,
	alert: null,
	alertLogin: null,
	modal: null,
	idToken: LocalStorageApi.getLocalStorageToken(),
	author: LocalStorageApi.getLocalStorageAuthor(),
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_LOADER:
			return { ...state, loading: true };
		case HIDE_LOADER:
			return { ...state, loading: false };
		case SHOW_ALERT:
			return { ...state, [action.alertType]: action.payload };
		case HIDE_ALERT:
			return { ...state, [action.alertType]: null };
		case SHOW_MODAL:
			return { ...state, modal: action.payload };
		case HIDE_MODAL:
			return { ...state, modal: null };
		case SET_TOKEN:
			return { ...state, idToken: action.idToken };
		case SET_AUTHOR:
			return { ...state, author: action.author };
		default:
			return state;
	}
};
