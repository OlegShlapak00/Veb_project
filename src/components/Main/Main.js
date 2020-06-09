import React from "react";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import main from "./Main.module.css"
import Footer from "../Footer/Footer";
import 'font-awesome/css/font-awesome.min.css';

class Main extends React.Component {
	check_cookie_name(name) {
		var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
		if (match) {
			return true;
			//console.log(match[2]);
		} else {
			console.log('--something went wrong---');
			return false;
		}
	}

	render() {
		return (
			<>
				<Carousel centered keepDirectionWhenDragging slidesPerPage={1} infinite autoPlay={5000} animationSpeed={3000}>
					<img className={main.image} alt=''
							 src='https://competitions.malcolmreading.com/museumoflondon//assets/site/mofl-image.jpg'/>
					<img className={main.image} alt='' src='https://www.cityam.com/wp-content/uploads/2019/07/museum.jpg'/>
					<img className={main.image} alt=''
							 src='https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/08/02/13/museum-of-london.jpg'/>
				</Carousel>
				<section className={main.wrapper}>
					<h2>Про нас</h2>
					<div className={main.about}>
						<div className={main.about__info}>
							<p>Націона́льний музе́й істо́рії Украї́ни (НМІУ) — провідний історичний музей України. Заснований
								у 1899 році в Києві, з 1944 року розташовується у будівлі на Старокиївській горі. У музеї
								історії України зберігаються етнографічні, археологічні, нумізматичні колекції, стародруки,
								твори живопису і скульптури та інші історичні експонати. Будівля музею, що є пам'яткою архітектури,
								збудована у 1937–1939 роках за проектом архітектора Йосипа Каракіса і спочатку призначалася для
								художньої
								школи.
							</p>
						</div>
						<div className={main.about__schedule}>
							<p className={main.schedule__main}><i className="fa fa-clock-o" aria-hidden="true"> </i> Ми відкриті:</p>
							<ul className={main.schedule__info}>
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
					<h2>Історія музею</h2>
					<p className={main.history__info}>
						Відкрився археологічною виставкою у серпні 1899 як Музей старожитностей та мистецтв.
						Проте офіційне відкриття та освячення відбулося у 1904. Засновником музею було Київське
						товариство старожитностей і мистецтв: відомі вчені Вікентій Хвойка, Данило Щербаківський,
						Микола Біляшівський (з 1902 — перший директор).
					</p>
					<h3>У радянський період музей багаторазово змінював назву і приміщення:</h3>
					<ul className={main.history__list}>
						<li>1919–1924 рр. — Перший державний музей.</li>
						<li>1924–1934 рр. — Всеукраїнський історичний музей ім. Т. Шевченка.</li>
						<li>1934–1935 рр. — Центральний історичний музей ім. Т. Шевченка, музей було переміщено до Музейного
							містечка на територію Києво-Печерської лаври.
						</li>
						<li>1935–1943 рр. — Державний республіканський історичний музей (з відвоюванням Києва).</li>
						<li>1943–1950 рр. — музей переїжджає в нинішній будинок на вулиці Володимирській, 2,
							де раніше була Державна художня середня школа ім. Тараса Шевченка.
						</li>
						<li>1950–1965 рр. — Київський державний історичний музей.</li>
						<li>1965–1991 рр. — Державний історичний музей Української РСР.</li>
						<li>У жовтні 1991 р. музей одним із перших закладів культури отримав статус Національного
							і відтоді має сучасну назву.
						</li>
					</ul>
				</section>
				<div className={main.architecture}>
					<div className={main.architecture__text}>
						<h2>Архітектура та історія будівлі</h2>
						<p>
							Головний фасад будівлі вирішено у класичних формах та розкрито
							до майданчика перед музеєм, а тил, переглядали у панорамі Старокиївської
							гори, нагадує візантійські монументальні споруди.
							Перед будівлею архітектор спроектував сходи цікавої форми з ліхтарними
							стійками. Біля будівлі, пізніше, на оглядовому майданчику встановлено
							камінь із викарбуваними на ньому словами Нестора Літописця «звідси руська
							земля стала бути» на давньослов'янській.
						</p>
					</div>
				</div>
				 <Footer/>
			</>
		)
	}
}

export default Main;