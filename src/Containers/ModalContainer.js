import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AuthModal } from '../Component/AuthModal';
import { hideModal, signIn } from '../store/actions';

const ModalContainer = () => {
	const dispatch = useDispatch();

	const { modal, alertLogin } = useSelector((state) => state.app);

	const [input, setInput] = useState({
		email: '',
		password: '',
		rememberMe: false,
	});

	const changeInputHandler = useCallback((event) => {
		event.persist();
		const input = event.target;
		const value = input.type === 'checkbox' ? input.checked : input.value;
		setInput((state) => ({
			...state,
			[input.name]: value,
		}));
	}, []);

	const modalClose = (e) => {
		if (e.target.className === 'modal' || e.target.className === 'close')
			dispatch(hideModal());
	};

	const submitHandler = () => {
		const dataFirebase = {
			email: input.email,
			password: input.password,
			rememberMe: input.rememberMe,
			returnSecureToken: true,
		};
		dispatch(signIn(dataFirebase));
		setInput({ email: '', password: '', rememberMe: false });
	};

	return (
		<AuthModal
			modal={modal}
			alertLogin={alertLogin}
			modalClose={modalClose}
			changeInputHandler={changeInputHandler}
			submitHandler={submitHandler}
			input={input}
		/>
	);
};

export default ModalContainer;
