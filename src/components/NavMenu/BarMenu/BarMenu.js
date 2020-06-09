import React from "react";
import barMenu from "./BarMenu.module.css";
import {Link} from "react-router-dom";


const BarMenu = () =>{

	const toggleSideMenu =()=>{
		const sideMenu = document.getElementsByClassName(barMenu.sideMenu);
		console.log(sideMenu[0]);
		sideMenu[0].classList.toggle(barMenu.activeMenu);
	}
	

	return(
		<section className={barMenu.sideMenu}>
			<ul className={barMenu.sideMenu__main} onClick={toggleSideMenu}>
				<li className={barMenu.main__Item}><Link  to="/" >Головна</Link></li>
				<li className={barMenu.main__Item}><Link to="/Visits">Екскурсії</Link></li>
				<li className={barMenu.main__Item}>
					<ul className={barMenu.sideMenu__secondary}>
						<li className={barMenu.secondary__Item}>
							<Link to="/Collection/Antic/">Античні</Link>
						</li>
						<li className={barMenu.secondary__Item}>
							<Link  to="/Collection/MiddleAge">Середньовічні</Link>
						</li>
						<li className={barMenu.secondary__Item}>
							<Link to="/Collection/Modern">Сучасні</Link>
						</li>
					</ul>
				</li>
				<li className={barMenu.main__Item}><Link to="/About">Про нас</Link></li>
				<li className={barMenu.main__Item}><Link to="/ContactUs">Залишити відгук</Link></li>
			</ul>
		</section>
	)
}
export default BarMenu;