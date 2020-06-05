import React, {useState} from "react";
import Posts from '../Post/Posts';
import Pagination from "../Pagination/Pagination";
import antic from './Antic.module.css';
import pagination from "../Pagination/Pagination.module.css";
import data from '../../../Data/POST_DATA.json';

const Antic = () => {
	const [posts] = useState(data);

	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage] = useState(6);
	const indexOfLastPost = currentPage * postPerPage;
	const indexOfFirstPost = indexOfLastPost - postPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
	const paginate = (e, pageNumber) => {
		setCurrentPage(pageNumber);
		const buttons = document.getElementsByClassName(pagination.button);
		for (var button of buttons) {
			button.style.backgroundColor='black';
		}
		e.target.style.backgroundColor='red';
	};

	return (
		<div>
			<h3 className={antic.title}> У цьму розділі зібрані стародавні історичні пам'ятки </h3>`
			<Posts posts={currentPosts}/>
			<Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
		</div>
	);
};
export default Antic;