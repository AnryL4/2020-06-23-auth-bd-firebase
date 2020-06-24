import React from 'react';
import FormPostsContainer from './Containers/FormPostsContainer';
import ListContainer from './Containers/ListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.scss';
import ModalContainer from './Containers/ModalContainer';
import SideBar from './Component/SideBar';

function App() {
	return (
		<>
			<SideBar />
			<div id='content' className='container'>
				<h1>Посты</h1>
				<FormPostsContainer />
				<ListContainer />
			</div>
			<ModalContainer />
		</>
	);
}

export default App;
