export class LocalStorageApi {
	static getLocalStoragePosts() {
		return JSON.parse(localStorage.getItem('posts')) || [];
	}
	static addToLocalStoragePost(newPost) {
		const allPosts = LocalStorageApi.getLocalStoragePosts();
		allPosts.push(newPost);
		localStorage.setItem('posts', JSON.stringify(allPosts));
	}

	static removeFromLocalStoragePost(id) {
		const allPosts = LocalStorageApi.getLocalStoragePosts();
		localStorage.setItem(
			'posts',
			JSON.stringify(allPosts.filter((post) => post.id !== id))
		);
	}
	static getLocalStorageToken() {
		return JSON.parse(localStorage.getItem('idToken')) || null;
	}
	static addToLocalStorageToken(token) {
		localStorage.setItem('idToken', JSON.stringify(token));
	}

	static removeFromLocalStorageToken() {
		localStorage.removeItem('idToken');
	}
	static getLocalStorageAuthor() {
		return JSON.parse(localStorage.getItem('author')) || 'Аноним';
	}
	static addToLocalStorageAuthor(author) {
		localStorage.setItem('author', JSON.stringify(author));
	}

	static removeFromLocalStorageAuthor() {
		localStorage.removeItem('author');
	}
}
