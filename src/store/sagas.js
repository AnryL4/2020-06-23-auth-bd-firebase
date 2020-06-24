import { takeEvery, put, call, delay } from 'redux-saga/effects';
import {
	showLoader,
	hideLoader,
	showAlert,
	hideAlert,
	setToken,
	setAuthor,
} from './actions';
import { AxiosApi } from '../utils/axiosApi';
import { LocalStorageApi } from '../utils/localStorageApi';
import { CREATE_POST, DELETE_POST, SIGN_IN } from './types';

export function* sagaWatcherCreatePosts() {
	yield takeEvery(CREATE_POST, sagaWorkerCreatePosts);
}

export function* sagaWatcherDeletePosts() {
	yield takeEvery(DELETE_POST, sagaWorkerDeletePosts);
}

export function* sagaWatcherAuthSignIn() {
	yield takeEvery(SIGN_IN, sagaWorkerAuthSignIn);
}

function* sagaWorkerCreatePosts(action) {
	try {
		yield put(showLoader());
		yield call(AxiosApi.axiosCreatePost, 'posts', action.payload);
		yield call(LocalStorageApi.addToLocalStoragePost, action.payload);
		yield put(hideLoader());
	} catch (error) {
		console.log(error)
		yield put(showAlert('С сервером что-то пошло не так', 'alert'));
		yield put(hideLoader());
	} finally {
		yield delay(2000);
		yield put(hideAlert('alert'));
	}
}

function* sagaWorkerDeletePosts(action) {
	try {
		yield call(AxiosApi.axiosDeletePost, 'posts', action.payload);
		yield call(LocalStorageApi.removeFromLocalStoragePost, action.payload);
	} catch (error) {
		yield put(showAlert('Что-то пошло не так', 'alert'));
		yield put(hideLoader());
	} finally {
		yield delay(2000);
		yield put(hideAlert('alert'));
	}
}

function* sagaWorkerAuthSignIn(action) {
	try {
		const {
			data: { idToken },
		} = yield call(
			AxiosApi.axiosSignFirebaseWithMailAndPassword,
			action.dataFirebase
		);
		yield put(setToken(idToken));
		yield put(setAuthor(action.dataFirebase.email));
		if (action.dataFirebase.rememberMe) {
			yield call(LocalStorageApi.addToLocalStorageToken, idToken);
			yield call(
				LocalStorageApi.addToLocalStorageAuthor,
				action.dataFirebase.email
			);
		}
	} catch (error) {
		console.log(error);
		yield put(showAlert('Ошибка', 'alert'));
	} finally {
		yield delay(2000);
		yield put(hideAlert('alert'));
	}
}
