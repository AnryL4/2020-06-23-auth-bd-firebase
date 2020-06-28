import { takeEvery, put, call, delay } from 'redux-saga/effects';
import {
	showLoader,
	hideLoader,
	showAlert,
	hideAlert,
	setToken,
	setAuthor,
	showModal,
	hideModal,
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
		yield put(showAlert('С сервером что-то пошло не так', 'alert'));
		yield put(hideLoader());
		yield delay(2000);
		yield put(hideAlert('alert'));
	} finally {
	}
}

function* sagaWorkerDeletePosts(action) {
	try {
		yield call(AxiosApi.axiosDeletePost, 'posts', action.payload);
		yield call(LocalStorageApi.removeFromLocalStoragePost, action.payload);
	} catch (error) {
		yield put(
			showAlert('С сервером что-то пошло не так при удалении', 'alert')
		);
		yield put(hideLoader());
		yield delay(2000);
		yield put(hideAlert('alert'));
	} finally {
	}
}

function* sagaWorkerAuthSignIn(action) {
	try {
		const response = yield call(
			AxiosApi.axiosSignFirebaseWithMailAndPassword,
			action.dataFirebase
		);
		yield put(setToken(response.data.idToken));
		yield put(setAuthor(action.dataFirebase.email));
		if (action.dataFirebase.rememberMe) {
			yield call(
				LocalStorageApi.addToLocalStorageToken,
				response.data.idToken
			);
			yield call(
				LocalStorageApi.addToLocalStorageAuthor,
				action.dataFirebase.email
			);
		}
	} catch (error) {
		yield put(
			showModal({ title: error.message, text: '...', error: true })
		);
		yield put(showAlert(error.message, 'alertLogin'));
		yield delay(2000);
		yield put(hideAlert('alertLogin'));
	} finally {
		yield put(hideModal());
	}
}
