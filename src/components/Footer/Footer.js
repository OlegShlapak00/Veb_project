import React from "react";
import footer from "./Footer.module.css";


class  Footer extends React.Component {

	render() {
		return(
			<footer className={footer.wrapper}>
				<div className={footer.privacyPolisy}><p>Privacy Policy</p></div>
				<div className={footer.logo}><p>@2020 Національний музей історії України</p></div>
				<div className={footer.links}>
					<a href="#"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
					<a href="#"><i className="fa fa-vk" aria-hidden="true"></i></a>
					<a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
					<a href="#"><i className="fa fa-google" aria-hidden="true"></i></a>
					<a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
				</div>
			</footer>
		)
	}
}

export default Footer;