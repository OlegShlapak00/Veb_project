import React from "react";
import "./NavMenuButton.css";
import barMenu from "../BarMenu/BarMenu.module.css";
const MenuNavButton = () => {

	const toggleSideMenu =()=>{
		const sideMenu = document.getElementsByClassName(barMenu.sideMenu);
		console.log(sideMenu[0]);
		sideMenu[0].classList.toggle(barMenu.activeMenu);
	}

	return(
	<button className="navButton" onClick={toggleSideMenu}>
		<i className="fa fa-bars" aria-hidden="true"> </i>
	</button>
	)
}
export default MenuNavButton;