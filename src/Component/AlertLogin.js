import React from 'react';

const AlertLogin = ({ text }) => {
	return (
		<div
			className='alert alert-danger animate__animated animate__fadeIn animate__faster'
			role='alert'
		>
			{text}
		</div>
	);
};

export default React.memo(AlertLogin);
