import React from 'react';

const Alert = ({ alertText, hideAlertText }) => {
	return (
		<div
			className='alert alert-warning animate__animated animate__fadeIn animate__faster'
			role='alert'
		>
			{alertText}
			<button
				type='button'
				className='close'
				data-dismiss='alert'
				aria-label='Close'
				onClick={hideAlertText}
			>
				<span aria-hidden='true'>&times;</span>
			</button>
		</div>
	);
};

export default React.memo(Alert);
