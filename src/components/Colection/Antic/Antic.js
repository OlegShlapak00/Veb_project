import React, {useState, useEffect} from "react";
import axios from 'axios';
import Posts from '../Post/Posts';
import Pagination from "../Pagination/Pagination";
import antic from './Antic.module.css';
import pagination from "../Pagination/Pagination.module.css";

const Antic = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage] = useState(8);
	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			const res = await axios.get('https://randomuser.me/api/?results=100'); //https://jsonplaceholder.typicode.com/posts
			setPosts(res.data.results);
			setLoading(false);
			console.log(res.data.results);
		}
		fetchPosts();
	}, []);
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
			<h3 className={antic.title}> У цьму розділі зібрані стародавні історичні пам'ятки </h3>
			<Posts posts={currentPosts} loading={loading}/>
			<Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
		</div>
	);
};
export default Antic;