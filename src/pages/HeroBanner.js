import React from "react";

const HeroBanner = () => {
	return (
		<>
			<section className="hero_section">
				<div>
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="hero_left_content">
                                    <h1 className="hero_maintext">Happiness blooms from within</h1>
                                    <p className="hero_para">Our environment, the world in which we live and work, is a mirror of our attitudes and expectations.</p>
                                <div className="hero_btn">
                                    <button className="btn"> Shop now</button>
                                    <span><a className="hero_link" href="" blanck="">Explore plants</a></span>
                                    </div>
                                </div>
							</div>
                            <div className="col-lg-6">
                                <div className="hero_banner_img">
                                    <img className="top_img img-fluid" src="../assets/Group 13.svg" />
                                    <div className="hero_pattern">
                                    <img className="img-fluid" src="../assets/pattern.svg" />

                                    </div>
                                </div>
                            </div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HeroBanner;
