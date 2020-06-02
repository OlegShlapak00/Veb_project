import React from "react";
import "./ContactUs.css";
import Footer from "../Footer/Footer";



class  ContactUs extends React.Component {

	componentDidMount() {
		const checkbox = document.querySelector('.my-form input[type="checkbox"]');
		const btns = document.querySelectorAll(".my-form button");

		checkbox.addEventListener("change", function() {
			const checked = this.checked;
			for (const btn of btns) {
				checked ? (btn.disabled = false) : (btn.disabled = true);
			}
		});
	}

	formSubmit = (e) => {
		e.preventDefault();
		alert("ok)");
	}



	render() {
		return(
			<>
				<form className="my-form" onSubmit={this.formSubmit}>
					<div className="container">
						<h1>Тут ви можете залишити відгук</h1>
						<ul>
							<li>
								<div className="grid grid-2">
									<input type="text" placeholder="Ім'я" required/>
										<input type="text" placeholder="Прізвище" required/>
								</div>
							</li>
							<li>
								<div className="grid grid-2">
									<input type="email" placeholder="Емейл" required/>
										<input type="tel" placeholder="Номер телефону"/>
								</div>
							</li>
							<li>
								<textarea placeholder="Повідомленя"></textarea>
							</li>
							<li>
								<input type="checkbox" id="terms"/>
									<label htmlFor="terms">Я прочитав і погодився з умовами.</label>
							</li>
							<li>
								<div className="grid grid-3">
									<div className="required-msg">Обов'язкові поля</div>
									<button className="btn-grid" type="submit" disabled>
            <span className="back">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg" alt=""/>
            </span>
										<span className="front">Відпрпавити</span>
									</button>
									<button className="btn-grid" type="reset" disabled>
            <span className="back">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg" alt=""/>
            </span>
										<span className="front">Очистити</span>
									</button>
								</div>
							</li>
						</ul>
					</div>
				</form>
				<Footer/>
			</>
		)
	}
}

export default ContactUs;

