import React from 'react';
import visits from './Visits.module.css';
import Excursion from "../Excursion/Excursion";
import Footer from "../Footer/Footer";

class Visits extends React.Component {
	render() {
		return (
			<>
				<section className={visits.wrapper}>
					<h2>Екскурсії</h2>
					<h4>Здавалося б, що можна встигнути за один день? Насправді - дуже багато! Одноденні тури по Україні це
						можливість:</h4>
					<ul>
						<li> Подивитися на безліч мальовничих місць і цікавих пам'яток, яких в нашій країні просто величезна
							кількість;
						</li>
						<li> Спробувати найсмачніші страви в колоритних регіонах України;</li>
						<li> Активно відпочити на природі, поспілкуватися з новими людьми і завести знайомства;</li>
						<li>Почути цікаві факти та історії від наших професійних екскурсоводів;</li>
						<li>І багато, багато іншого! Одноденні тури по Україні з Києва - це надзвичайно різноманітний відпочинок!
						</li>
					</ul>
					<h4>Хочете просто романтично провести час з коханою людиною? Немає проблем!
						Любите активно відпочивати - можна відправитися в сплав на байдарках, або
						поїхати на знаменитий Сорочинський ярмарок.</h4>
					<h2>Пропонуємо відвідати наші екскурсії</h2>
					<section className={visits.excursionWrapper}>
						<Excursion name='ЕКСКУРСІЯ «ТРИПІЛЛЯ - КАНЬЙОН БУКИ»'
											 photo_src='https://bigpicture.ru/wp-content/uploads/2015/11/nophotoshop29-800x532.jpg'
											 main_text='Екскурсія по державному Київському обласному археологічному музею,
																де вам відкриється відома Трипільська культура з безліччю загадок та сенсацій.'
											 text='З 7:30 до 8:00 Вся група зустрічається біля станції метро «Видубичі»,
					після чого з гарним настроєм сідаємо в автобус і відправляємось в захоплюючу подорож.
					З 8:00 до 9:00 Приїжджаємо в с. Трипілля, де вперше археолог Вікентій Хвойка
					відкрив доти невідому світові працивілізацію. Що вас тут чекає:
					Відвідуємо місце сили -  відому Дівич-гору. Дівич-Гора в с. Трипілля - найвища точка
					на Обухівщині. Енергетику і загадковість цього місця ви на всі сто відсотків відчуєте
					після підйому на гору. Перед вашим захопленим поглядом постане мальовнича долина трьох
					річок, яка стала колискою для розквіту Трипільської цивілізації.'/>
						<Excursion name='ЕКСКУРСІЯ «ТРИПІЛЛЯ - КАНЬЙОН БУКИ»'
											 photo_src='https://www.prikol.ru/wp-content/gallery/october-2019/prikol-25102019-001.jpg'
											 main_text='Екскурсія по державному Київському обласному археологічному музею,
																де вам відкриється відома Трипільська культура з безліччю загадок та сенсацій.'
											 text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi aperiam assumenda at, autem dicta
						dolor doloribus eaque eius eos error esse et exercitationem id inventore laborum laudantium maxime, nemo
						neque non numquam perferendis quibusdam quos rem reprehenderit, repudiandae sunt? Ab, aliquam assumenda
						commodi dolor, et id illum impedit in ipsam ipsum iure magni praesentium quam repellat temporibus ullam
						voluptatem. Ab aliquid at blanditiis commodi consectetur consequatur dolor dolorum esse eum excepturi
						explicabo fugit magni necessitatibus quas suscipit tempora, vitae voluptatum. Ab aliquam assumenda
						blanditiis cupiditate debitis, dolores earum, esse harum laboriosam libero maiores maxime modi porro quia
						reprehenderit temporibus. '/>
						<Excursion name='ЕКСКУРСІЯ «ТРИПІЛЛЯ - КАНЬЙОН БУКИ»'
											 photo_src='https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
											 main_text='Екскурсія по державному Київському обласному археологічному музею,
																де вам відкриється відома Трипільська культура з безліччю загадок та сенсацій.'
											 text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi aperiam assumenda at, autem dicta
						dolor doloribus eaque eius eos error esse et exercitationem id inventore laborum laudantium maxime, nemo
						neque non numquam perferendis quibusdam quos rem reprehenderit, repudiandae sunt? Ab, aliquam assumenda
						commodi dolor, et id illum impedit in ipsam ipsum iure magni praesentium quam repellat temporibus ullam
						voluptatem. Ab aliquid at blanditiis commodi consectetur consequatur dolor dolorum esse eum excepturi
						explicabo fugit magni necessitatibus quas suscipit tempora, vitae voluptatum. Ab aliquam assumenda
						blanditiis cupiditate debitis, dolores earum, esse harum laboriosam libero maiores maxime modi porro quia
						reprehenderit temporibus. '/>

						<Excursion name='ЕКСКУРСІЯ «ТРИПІЛЛЯ - КАНЬЙОН БУКИ»'
											 photo_src='https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
											 main_text='Екскурсія по державному Київському обласному археологічному музею,
																де вам відкриється відома Трипільська культура з безліччю загадок та сенсацій.'
											 text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi aperiam assumenda at, autem dicta
						dolor doloribus eaque eius eos error esse et exercitationem id inventore laborum laudantium maxime, nemo
						neque non numquam perferendis quibusdam quos rem reprehenderit, repudiandae sunt? Ab, aliquam assumenda
						commodi dolor, et id illum impedit in ipsam ipsum iure magni praesentium quam repellat temporibus ullam
						voluptatem. Ab aliquid at blanditiis commodi consectetur consequatur dolor dolorum esse eum excepturi
						explicabo fugit magni necessitatibus quas suscipit tempora, vitae voluptatum. Ab aliquam assumenda
						blanditiis cupiditate debitis, dolores earum, esse harum laboriosam libero maiores maxime modi porro quia
						reprehenderit temporibus. '/>

					</section>
				</section>
				<Footer/>
			</>
		);
	}
}

export default Visits;