import React from 'react';

export const AuthModal = ({
	modal,
	modalClose,
	input,
	changeInputHandler,
	submitHandler,
}) => {
	return (
		<>
			{modal && (
				<div className='modalWindow' onClick={modalClose}>
					<div className='modal' tabIndex='-1' role='dialog'>
						<div className='modal-dialog'>
							<div className='modal-content'>
								<div className='modal-header'>
									<h5 className='modal-title'>
										{modal.title}
									</h5>
									<button
										type='button'
										className='close'
										data-dismiss='modal'
										aria-label='Close'
										onClick={modalClose}
									>
										&times;
									</button>
								</div>
								<div className='modal-body'>
									<form onSubmit={submitHandler}>
										<div className='form-row'>
											<div className='form-group col-md-6'>
												<label htmlFor='inputEmail4'>
													Почта
												</label>
												<input
													type='email'
													className='form-control'
													id='inputEmail4'
													value={input.email}
													onChange={
														changeInputHandler
													}
													name='email'
												/>
											</div>
											<div className='form-group col-md-6'>
												<label htmlFor='inputPassword4'>
													Пароль
												</label>
												<input
													type='password'
													className='form-control'
													id='inputPassword4'
													value={input.password}
													onChange={
														changeInputHandler
													}
													name='password'
												/>
											</div>

											<div className='form-check'>
												<input
													type='checkbox'
													className='form-check-input'
													id='exampleCheck1'
													checked={input.rememberMe}
													onChange={
														changeInputHandler
													}
													name='rememberMe'
												/>
												<label
													className='form-check-label'
													htmlFor='exampleCheck1'
												>
													Запомнить меня?
												</label>
											</div>
										</div>
									</form>
								</div>
								<div className='modal-footer'>
									<button
										type='button'
										className='btn btn-primary'
										onClick={submitHandler}
									>
										{modal.text}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
