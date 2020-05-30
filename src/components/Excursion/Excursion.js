import React from "react";
import excursion from './Exscursion.module.css';


class  Excursion extends React.Component {

	render() {
		return(
			<section className={excursion.wrapper}>
				<h2 className={excursion.name}>{this.props.name}</h2>
				<div className={excursion.info}>
					<img className={excursion.info__photo} src={this.props.photo_src} alt=""/>
					<p className={excursion.info__text}>{this.props.main_text}</p>
				</div>
				<p className={excursion.text}>{this.props.text}</p>

			</section>
		)
	}
}

export default Excursion;