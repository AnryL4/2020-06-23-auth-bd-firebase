import React from 'react';
import { Loader } from './Loader';

const List = ({ posts, removePost, loader }) => {
	if (!posts.length) {
		return <p className='text-center'>Постов пока нет</p>;
	}

	return !loader ? (
		posts
			.map((post) => (
				<div
					className='card bg-light mb-3 mt-2'
					key={post.id}
					onClick={() => removePost(post.id)}
				>
					<div className='card-header'>
						{post.header}, автор: {post.author}
					</div>
					<div className='card-body'>
						<h5 className='card-title'>{post.title}</h5>
					</div>
				</div>
			))
			.reverse()
	) : (
		<Loader />
	);
};

export default React.memo(List);
