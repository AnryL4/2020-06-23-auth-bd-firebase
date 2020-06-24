import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from '../Component/List';
import { deletePost } from '../store/actions';

const ListContainer = () => {
	const { posts } = useSelector((state) => state.posts);
	const { loading } = useSelector((state) => state.app);
	const dispatch = useDispatch();

	const removePost = (id) => {
		dispatch(deletePost(id));
	};

	return <List posts={posts} removePost={removePost} loader={loading} />;
};

export default ListContainer;
