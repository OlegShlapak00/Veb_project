import React from "react";
import cssPosts from './posts.module.css';

const Posts = ({posts}) => {
	return (
		<ul className={cssPosts.postList}>
		{
			posts.map(post => (
				<div key={post.id} className={cssPosts.post}>
					<h4 className={cssPosts.title}>{post.Name}</h4>
					<img src={post.Image}  className={cssPosts.img} alt=""/>
					<p className={cssPosts.description}>{post.Description}</p>
				</div>
		))}
	</ul>
	);
};

export default Posts;