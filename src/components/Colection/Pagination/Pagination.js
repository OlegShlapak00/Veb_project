import React from "react";
import pagination from "./Pagination.module.css";

const Pagination =({postPerPage,totalPosts,paginate})=>{
	const pageNumbers=[];

	for(let i=1;i<=Math.ceil(totalPosts/postPerPage); i++)
	{
		pageNumbers.push(i);
	}

	return(
		<nav>
			<ul className={pagination.pagination}>
				{pageNumbers.map(number =>(
					<li key={number} >
						<button className={pagination.button} onClick={(e) =>paginate(e,number)}>
							{number}
						</button>
					</li>
				))}
			</ul>
		</nav>
	)
}
export default Pagination