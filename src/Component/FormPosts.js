import React from 'react';

const Form = ({ submitHandler, title, changeInputHandler }) => {
	return (
		<>
			<form onSubmit={submitHandler}>
				<div className='form-group'>
					<label htmlFor='title'>Заголовок поста</label>
					<input
						type='text'
						className='form-control'
						id='title'
						name='title'
						value={title}
						onChange={changeInputHandler}
						required
					/>
				</div>
			</form>
			<div className='buttons'>
				<button
					className='btn btn-success'
					type='submit'
					disabled={!title.length}
					onClick={submitHandler}
				>
					Создать
				</button>
			</div>
		</>
	);
};

export default React.memo(Form);
