import React from "react";
import navMenu from "./NavMenu.module.css";
import {Link} from "react-router-dom";

class NavMenu extends React.Component {
	componentDidMount() {
		let nanigation = document.getElementById('topnav');
		nanigation.addEventListener("click", function (e) {
			let elements = document.getElementById('topnav').getElementsByTagName('a');
			for (let el of elements) {
				el.classList.remove(navMenu.active);
			}
			e.target.classList.add(navMenu.active);
		});
	}

	render() {
		return (
			<section className={navMenu.navigation}>
			<div className={navMenu.topnav} id="topnav">
				<Link className={`${navMenu.active} ${navMenu.mainLink}`} to="/">Головна</Link>
				<Link className={`${navMenu.vl} ${navMenu.mainLink}`} to="/Visits">Екскурсії</Link>
				<div className={`${navMenu.vl} ${navMenu.dropdown}`}>
					<button className={navMenu.btn}>Колекція</button>
					<div className={navMenu.dropdownContent}>
						<Link className={navMenu.dropdownLink} to="/Collection/Antic/">Античні</Link>
						<Link className={navMenu.dropdownLink} to="/Collection/MiddleAge">Середньовічні</Link>
						<Link className={navMenu.dropdownLink} to="/Collection/Modern">Сучасні</Link>
					</div>
				</div>
				<Link className={`${navMenu.vl} ${navMenu.mainLink}`} to="/About">Про нас</Link>
				<Link className={`${navMenu.vl} ${navMenu.mainLink}`} to="/Contact">Залаишити відгук</Link>
			</div>
				<img className={navMenu.topLogo} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX3yQD////3yAD3xgD52XH3yg/51V375qH63n7745P52mf400n40DL52GP//PH98MP75Zv+9tn//vj+++z989D64Ib98sr51lj86az87rz63Hf87LX4ziv+99z40kH40Tn++eb74Y6W6t2QAAAE3klEQVR4nO2da3urKBRGDSQ101y1JrG59vz/PzlyS7SnkeBgNzDv+pDgU92yKoIimCwDAAAAAAAAAAAAAAAAAAAAAADwFMbDYRzBZTkJhtkYgueABMcwDEtwBMPABP0bBnUOCnwbtgQ3OS3b/RiG7SJ65IwU/mcEw845OGdeY7tn5h//ht1zMEHD+xEsEjW8C1azNA0fgnyZpOH9HKw4S9KwdQSzJA3bgkkatopolqRhVzBBw04RzZI0fOsIpmtoBNM1PBijZA1XMPxlCA1lNyb7O23dj+kCNet/X/62Opkh2xdVVeTyr2zzSFt3c740Kzdclmp9Vunlw4/bExquxV83sublrbR1Nypsw5F1l99DNvwYYlirS6djuoaF2rZO17CUkXmRruFEVTVlmoYfhQ7Nrk1iXaVnuK51VcPmTWKfouFUVzX81CS2ARt+yj5/d8My01UNvzSJQxGu4f62aLg5t/ilvEi4NrHFUhawYRs3w72MLSuaD56k4bb5PHG2k0U9ScND83nh/LP52qVpqE5A/iVOx5ANL1v5nLZ0N5SV6JWJBRay4eDWgssr7rmoaAoesuHQFr/k8q6pFlc0edDH8D8Yiu+ilntM01AGKMWGs1QNuRpG0rT3WaKGOutNZZWs4UEZ7liqhuqiW15+p2oo23x1C5WqoexlE8+6IjAccH9oekpzcxscnuFGdMVv2SP9Yq/+UnTi70Un1Fk8CxB9+fxU6dQP68f6ZOaeYt3U36vj6ZpDKBjSAEOXUDCkAYYuoWBIAwxdQsGQBhi6hIIhDTB0CQVDGmDoEgqGNMDQJRQMaYChSygY0gBDl1AwpAGGLqFg6Bv27fvJWsSGLB+wf72Rfu6vJ808C0FuuB1ieJYblTqyXNg/G+YQpWHG5fyKyUKEZu8yPX22mzgN9Yw8OXhDTimZTJ6vG6VhxuSw6S/5cop1byGN1VAfuDNTM7vMfNIf9xCnIVvIzf4wI9CzapyGeiRcZYaW9gwYi9XQHDqW9dekERuq12xN+dRSSKM11E3ip5wV1FOTRmyomkQ1Sa+vkMZrqGc4v9sKacSGqkksbYU0YkPdJAqeN/dZzIa6SbQV0pgNzYwSy/jwmA1n2rCvJo3a0Nwl9hfSqA31vW9vTZqEYX8hjdpQzwqyZStSQzHBQmX9ZJlpE6khW1abi6pnbpb+2FgNb7qlEPMrLatGamheNLS29qiTGw7p834cw72lSz8LwPCwEzjvbJbXdT5fvjCfj9owUy+/H7C3V7cjNxwdGLqEgiENMHQJBUMaYOgSCoY0wNAlFAxpgKFLKBjSAEOXUP9bQ+pfBxzdMF+9k7I6jWeoRoEGwhiGfE4s1WEEQ3607PN38W8YmKDlQfEAw9AEFz7arLbhXTC/Lgi5bXU23rw0yi3Du+CWtDHkK52NqZ+fVn8YtgS9RB6aIf2C08nRUzbuhqEImmFhO1/ZMIahCN68Z8P8stw0DMGZ/v2Z2l82tGEdlqBtqIZT0Ld2A0QsmOmBi6+99fXVqG/hCLIvlY3KazbahrTtIGN6rE3h9//cMjwtKa9kFlc9aPHiuXuhex4GwJd9KErchmvfgqEZljPvXWBhGZZn/318bGXf7+9xHaMT83ychsJxFEEzEisMRhEEAAAAAAAAAAAAAAAAAAAAAIBU+Be8DXw7B61XIAAAAABJRU5ErkJggg==" alt=""/>
			</section>
		)
	}
}

export default NavMenu;