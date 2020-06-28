import axios from 'axios';

const baseURL = process.env.REACT_APP_FIREBASE_URL;
const firebaseApiKey = process.env.REACT_APP_FIREBASE_KEY;

export class AxiosApi {
	static async axiosGetAllPosts(url) {
		return await axios.get(`${baseURL}/${url}.json`);
	}

	static async axiosCreatePost(url, newPost) {
		await axios.post(`${baseURL}/${url}.json`, newPost);
	}

	static async axiosDeletePost(url, id) {
		const allPosts = await AxiosApi.axiosGetAllPosts(url);
		const key = Object.keys(allPosts.data)
			.map((data) => {
				return { key: data, id: allPosts.data[data].id };
			})
			.filter((data) => data.id === id);
		await axios.delete(`${baseURL}/${url}/${key[0].key}.json`);
	}

	static async axiosSignFirebaseWithMailAndPassword(dataFirebase) {
		try {
			return await axios.post(
				`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseApiKey}`,
				dataFirebase
			);
		} catch (error) {
			const e = error?.response?.data?.error || error;
			switch (e.message) {
				case 'INVALID_EMAIL': {
					throw new Error('Неподходящий имейл');
				}
				case 'Network Error': {
					throw new Error('Ошибка соединения с базой');
				}
				case 'EMAIL_NOT_FOUND': {
					throw new Error('Имейл не найден');
				}
				case 'MISSING_PASSWORD': {
					throw new Error('Не указан пароль');
				}
				case 'INVALID_PASSWORD': {
					throw new Error('Неверный пароль');
				}
				default:
					throw new Error(e.message);
			}
		}
	}
}
