import React, { useEffect, useState } from 'react';
import moment from 'moment';
import manImg from '../SiteAssets/images/male.jpeg';

function NavBar() {
	const [date, setDate] = useState();

	useEffect(() => {
		setInterval(() => setDate(moment().format('dddd, MM MMM h:mm:ss A')), 1000);
	}, []);

	return (
		<nav className="navbar navbar-expand-lg sticky-top bg-white">
			<div className="container-fluid">
				<button
					className="navbar-toggler ms-auto"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse justify-content-end mb-2 mb-lg-0"
					id="navbarSupportedContent"
				>
					<div className="me-lg-5">{date}</div>
					<div className="mx-lg-3 my-2 my-lg-0">
						<a className="btn navBtn rounded-3 py-0 px-4 main-btn">signIn</a>
					</div>
					<div className="notification mx-lg-2 my-4 my-lg-0">
						<i className="fa-solid fa-bell px-2 position-relative fs-5">
							<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success" style={{ fontSize: '0.6em' }}>
                3
							</span>
						</i>
					</div>
					<div className="dropdown d-flex align-items-center my-2 my-lg-0 ms-lg-3 ">
						<img className="nav-link me-2 rounded-circle" src={manImg} />
						<a
							className="nav-link dropdown-toggle"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
              Hazem Mohamed
						</a>
						<ul className="dropdown-menu my-2">
							<li>
								<a className="dropdown-item">Log Out</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
