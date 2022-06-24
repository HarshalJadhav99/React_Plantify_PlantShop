import React from "react";

const Search = () => {
	return (
		<>
			<section className="search_space">
				<section className="search_section">
					<div>
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<form className="row">
										<div className="col-auto search_lbtn">
											<button className="btn p-0">
												<img src="../assets/Group 35.svg" />
											</button>
										</div>
										<div className="col-10 px-0 search_input">
											<input
												type="search"
												class="form-control "
												placeholder="Search flowers..."
											/>
										</div>
										<div className="col-auto search_rbtn">
											<button className="btn p-1">
												<img src="../assets/clarity_search-line.svg" />
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="colorful_new_section">
					<div>
						<div className="container">
							<div className="row">
								<div className="col-lg-6 color_space">
									<div>
										<h3 className="arrivals_head">Colorful New Arrivals</h3>
									</div>
								</div>
								<div className="col-lg-6">
									<div>
										<h3 className="arrivals_head_right">
											<a href="" blanck="">
												{" "}
												view all
											</a>
										</h3>
									</div>
								</div>
								<div className="col-lg-3 card_img_overlay">
									<div>
										<img className="img-fluid" src="../assets/image 14.svg" />
									</div>
									<div class="overlay">
										<div class="text">
											<span className="text_hover">Blue Lily</span>
											<span className="text_hover_a">
												<a href="" blanck="">
													more information
												</a>
											</span>
										</div>
									</div>
								</div>
								<div className="col-lg-3 card_img_overlay">
									<div>
										<img className="img-fluid" src="../assets/image 15.svg" />
									</div>
									<div class="overlay">
										<div class="text">
											<span className="text_hover">Blue Lily</span>
											<span className="text_hover_a">
												<a href="" blanck="">
													more information
												</a>
											</span>
										</div>
									</div>
								</div>
								<div className="col-lg-3 card_img_overlay">
									<div>
										<img className="img-fluid" src="../assets/image 16.svg" />
									</div>
									<div class="overlay">
										<div class="text">
											<span className="text_hover">Blue Lily</span>
											<span className="text_hover_a">
												<a href="" blanck="">
													more information
												</a>
											</span>
										</div>
									</div>
								</div>
								<div className="col-lg-3 card_img_overlay">
									<div>
										<img className="img-fluid" src="../assets/image 17.svg" />
									</div>
									<div class="overlay">
										<div class="text">
											<span className="text_hover">Blue Lily</span>
											<span className="text_hover_a">
												<a href="" blanck="">
													more information
												</a>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>
		</>
	);
};

export default Search;
