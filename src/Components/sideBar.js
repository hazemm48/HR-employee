import React from 'react';
import { useSelector } from 'react-redux';

function SideBar() {
  const employees = useSelector((state) => state.employees.value);

	const data = [
		['fa-solid fa-table-cells-large', 'dashboard'],
		['fa-solid fa-display', 'workplace'],
		['fa-solid fa-mug-saucer', 'holidays'],
		['fa-solid fa-user-group', 'employees'],
		['fa-solid fa-hands-holding', 'inbound requests'],
	];
	return (
		<div className="d-flex flex-column flex-shrink-0 col-2 col-md-1 sideBar">
			<ul className="nav flex-column mb-auto text-center mt-5 sticky-top">
				{data.map((e, i) => (
					<li className={`nav-item mw-100 ${e[1] == 'employees' && 'active'}`} key={i}>
						<a href="#">
							<i className={`${e[0]} position-relative`}>
								{e[1] == 'employees' && (
									<span
										className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
										style={{ fontSize: '0.3em' }}
									>
                  {employees.length}
									</span>
								)}
							</i>
							<p className="d-lg-block d-none">{e[1]}</p>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

export default SideBar;
