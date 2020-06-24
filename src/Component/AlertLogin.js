import React from 'react';
import { useDispatch } from 'react-redux';
import { hideAlert } from '../store/actions';

const AlertLogin = ({ text }) => {
	const dispatch = useDispatch();

	const hideAlertText = () => {
		dispatch(hideAlert('alertLogin'));
	};
	return (
		<div
			className='alert alert-danger animate__animated animate__fadeIn animate__faster'
			role='alert'
			onClick={hideAlertText}
		>
			{text}
		</div>
	);
};

export default React.memo(AlertLogin);
