import React from 'react';
import './Colection.module.css';
import Footer from "../Footer/Footer";
import Antic from "./Antic/Antic";
import MiddleAge from "./MiddleAge/MiddleAge";
import { Route} from "react-router-dom";
import Modern from "./Modern/Modern";
import colection from './Colection.module.css';

class Colection extends React.Component{
	render() {
		return (
			<>
			<section className={colection.wrapper}>
				<h1 className={colection.greetengs}>Вітаємо у колекції</h1>
				<div className={colection.title__wrapper}>
					<h2 className={colection.title}>Наблизьтесь до колекції Київського музею та
						пориньте у деклька тисяч років історії нашої Батьківщини.</h2>
				</div>
				<h2 className={colection.sub_title}>Насолоджуйтесь вивченням колекції -
					від деяких найдавніших предметів, створених людством, до творів сучасних художників.</h2>
				<Route path="/Collection/Antic" component={Antic} />
				<Route path="/Collection/MiddleAge" component={MiddleAge} />
				<Route path="/Collection/Modern" component={Modern} />
			</section>
			<Footer/>
			</>
		);
	}
}



export default Colection;