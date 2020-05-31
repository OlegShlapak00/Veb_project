import React from "react";
import cssPosts from './posts.module.css';

const Posts = ({posts,loading}) => {
	if(loading){
		return <h2>Loading ...</h2>
	}
	return (
		<ul className={cssPosts.postList}>
		{
			posts.map(post => (

				<div key={post.cell} className={cssPosts.post}>
					<h4 className={cssPosts.title}>{post.name.first}</h4>
					<img src={post.picture.large}  className={cssPosts.img} alt=""/>
					<p className={cssPosts.description}>{post.email}</p>
				</div>

		))}
	</ul>
	);
};

export default Posts;