import React from "react";
import excursion from './Exscursion.module.css';
import Information from "../../../Data/EXCURSION_DATA.json";
import FilterResults from 'react-filter-search';

class Excursion extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: Information,
			value: ''
		};
	};

	handleChange = event => {
		const {value} = event.target;
		this.setState({value});
	};

	render() {
		const {data, value} = this.state;
		return (
			<div className={excursion.excursionWrapper}>
				<input className={excursion.search} type="text" value={value} onChange={this.handleChange}
							 placeholder="Введіть щось для пошуку"/>
				<FilterResults
					value={value}
					data={data}
					renderResults={results => (
						<section className={excursion.listWrapper}>
							{results.map(el => (
								<div className={excursion.itemWrapper}>
									<h2 className={excursion.name}>{el.Name}</h2>
									<div className={excursion.info}>
										<img className={excursion.info__photo} src={el.Image} alt=""/>
										<p className={excursion.info__text}>{el.Main_Info}</p>
									</div>
									<p className={excursion.text}>{el.Description}</p>
								</div>
							))}
						</section>
					)}
				/>
			</div>
		);
	}
}

export default Excursion;