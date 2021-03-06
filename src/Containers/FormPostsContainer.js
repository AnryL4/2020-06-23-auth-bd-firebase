import React, { useState, useCallback } from 'react';
import FormPosts from '../Component/FormPosts';
import { useDispatch, useSelector } from 'react-redux';
import { hideAlert, createPost } from '../store/actions';
import moment from "moment";
import 'moment/locale/ru';
import Alert from '../Component/Alert';

const FormPostsContainer = () => {
	const dispatch = useDispatch();

	const { alert, author } = useSelector((state) => state.app);

	const hideAlertText = () => {
		dispatch(hideAlert('alert'));
	};

	const [title, setTitle] = useState('');

	const submitHandler = (event) => {
		event.preventDefault();
		const nd = moment();
		const newPost = {
			title,
			header: `Пост создан ${nd.format('dddd, MMMM DD YYYY, h:mm:ss')}`,
			id: new Date().toJSON(),
			author: author,
		};
		dispatch(createPost(newPost));
		setTitle('');
	};

	const changeInputHandler = useCallback((event) => {
		event.persist();
		setTitle(event.target.value);
	}, []);

	return (
		<>
			{alert && <Alert hideAlertText={hideAlertText} alertText={alert} />}
			<FormPosts
				submitHandler={submitHandler}
				changeInputHandler={changeInputHandler}
				title={title}
			/>
		</>
	);
};

export default FormPostsContainer;
