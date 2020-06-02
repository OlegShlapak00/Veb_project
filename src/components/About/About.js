import React from 'react';
import about from './About.module.css';
import Footer from "../Footer/Footer";
import Map from "./Map/Map";
import main from "../Main/Main.module.css";

class About extends React.Component{



	render() {
		return (
			<>
				<section className={about.wrapper}>

					<div className={about.mapWrapper}>
						<Map/>
					</div>
					<div className={about.info}>
						<h4><i className="fa fa-map-marker" aria-hidden="true"> </i>Ми знаходимось за адресою</h4>
						<h4>м.Київ</h4>
						<h4> вул. Володимирська, 2 </h4>
						<div className={about.info__schedule}>
							<p className={about.schedule__main}><i className="fa fa-clock-o" aria-hidden="true"> </i> Ми відкриті:</p>
							<ul className={about.schedule__info}>
								<li>понеділок 09:00–19:00</li>
								<li>вівторок 09:00–19:00</li>
								<li>середа 09:00–19:00</li>
								<li>четвер 09:00–19:00</li>
								<li>пʼятниця 09:00–19:00</li>
								<li>субота 09:00–17:00</li>
								<li>неділя 11:00–17:00</li>
							</ul>
							<p><i className="fa fa-money" aria-hidden="true"> </i> Вхід вільний</p>
						</div>
					</div>
				</section>
				<div className={about.contacts}>
					<div className={`${about.contacts__contact} ${about.contacrts__mobile}`}>
						<i className="fa fa-mobile" aria-hidden="true"> </i><br/>
						<p>Телефони для довідок</p>
						<ul className={about.telephone}>
							<li>+38(534)632-90-50</li>
							<li>+38(010)878-96-17</li>
							<li>+38(85)291-85-53</li>
						</ul>
					</div>
					<div className={`${about.contacts__contact} ${about.contacrts__email}`}>
						<i className="fa fa-envelope-o" aria-hidden="true"> </i>
						<p>Пошта</p>
						<p>ypaqegom-3439@yopmail.com</p>
					</div>
				</div>
				<div className={about.teamWrapper}>
					<h2 className={about.we}>Наша команда</h2>
					<div className={about.team}>
						<div className={about.team__person}>
							<h3 className={about.person__name}>Lennox Perez</h3>
							<img className={about.person__photo} src="https://images.iptv.rt.ru/sdp/nc-snapshot1559724838571.jpg?progressive=true" alt=""/>
							<p className={about.person__position}>Директор</p>
						</div>
						<div className={about.team__person}>
							<h3 className={about.person__name}>Valentino Alexander</h3>
							<img className={about.person__photo} src="https://lh3.googleusercontent.com/proxy/WLnSqbJVE0sCF0CrIUPYc_y_ksdAHjycWHH6xpu15QEHtare8XrT4tpvIq6beN5C82GvHmeUKr3cyQCcATRABya4QMkb6atdgX4WC5CShHSo4-fv2MksbY_j02rhkEsM8w" alt=""/>
							<p className={about.person__position}>Замісник директора</p>
						</div>
						<div className={about.team__person}>
							<h3 className={about.person__name}>Briggs Howard</h3>
							<img className={about.person__photo} src="https://vertigo.com.ua/wp-content/uploads/2017/10/ace_ventura_1.jpg" alt=""/>
							<p className={about.person__position}>Екскурсовод</p>
						</div>
						<div className={about.team__person}>
							<h3 className={about.person__name}>Patricio Wood</h3>
							<img className={about.person__photo} src="https://thumbs.dfs.ivi.ru/storage15/contents/a/d/13e9fd5d5a713d6c13c4b7ab19fa0d.jpeg" alt=""/>
							<p className={about.person__position}>Охоронець</p>
						</div>
					</div>
				</div>
				<Footer/>
			</>
		);
	}
}



export default About;