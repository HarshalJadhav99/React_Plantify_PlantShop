import React from "react";

const Map = () => {
	return (
		<>
			<section className="plant_map_section">
				<div>
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<img className="img-fluid" src="../assets/Group 33.svg" />
								<div className="map_info_box">
                                <button className="btn d-flex">GET DIRECTIONS</button>
									<h6 className="info_head">Visit us</h6>
									<div className="info_body">
										<p>
											<span className="d-block">Gekikara Street 16, Atalanta</span><span className="d-block"> 1327 Block M</span> <span className="d-block">Mardial, Sigure</span>
											T2G 0T2
										</p>
									</div>
                                    <h6 className="info_body_bottom"><span className="text-decoration-underline">Open day </span>: 11am–5:30pm everyday</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Map;
