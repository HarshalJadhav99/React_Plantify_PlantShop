import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg custom_nav">
				<div className="container">
					
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink className="nav-link" aria-current="page" to='/'>
									Shop
								</NavLink>
							</li>
							<li class="nav-item">
								<NavLink className="nav-link" to='products'>
                                Products
								</NavLink>
							</li>
                            <li class="nav-item">
								<NavLink className="nav-link" to='fertilizer'>
                                Fertilizer
								</NavLink>
							</li>
                            <li className="nav-item">
								<NavLink className="nav-link" to='guide'>
                                Guide
								</NavLink>
							</li>
							
						</ul>
						<a className="navbar-brand mx-auto" href="#">
						<img src="../assets/Black & White Geometric Beauty Circle Logo 1.svg" />
					</a>
						<ul className="ms-auto">
							<li className="d-inline me-3"><a href="" blanck=""><img src="../assets/clarity_search-line.svg" /></a></li>
							<li className="d-inline me-3"><a href="" blanck=""><img src="../assets/clarity_user-line.svg" /></a></li>
							<li className="d-inline me-3"><a href="" blanck=""><img src="../assets/clarity_shopping-cart-line.svg" /></a></li>
							
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
