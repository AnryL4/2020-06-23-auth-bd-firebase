import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showModal, setToken, setAuthor } from '../store/actions';
import { LocalStorageApi } from '../utils/localStorageApi';

const SideBar = () => {
	const dispatch = useDispatch();

	const { idToken, author } = useSelector((state) => state.app);

	const modalOpen = () => {
		dispatch(showModal({ title: 'Войдите в систему', text: 'Войти', error: false }));
	};

	const textBotton = !idToken ? 'Войти' : 'Выйти';
	const styleBotton = !idToken ? 'btn btn-success' : 'btn btn-warning';
	const removeTokenAuthorButton = () => {
		LocalStorageApi.removeFromLocalStorageToken();
		LocalStorageApi.removeFromLocalStorageAuthor();
		dispatch(setToken(null));
		dispatch(setAuthor('Аноним'));
	};

	return (
		<div id='sidebar'>
			<div className='sidebarText mb-2'>SPA react: firebase auth</div>
			<div className='sidebarAuthor mb-2'>
				Сейчас вы находитесь в системе как: <span>{author}</span>
			</div>
			<button
				type='button'
				className={styleBotton}
				onClick={!idToken ? modalOpen : removeTokenAuthorButton}
			>
				{textBotton}
			</button>
		</div>
	);
};

export default React.memo(SideBar);
