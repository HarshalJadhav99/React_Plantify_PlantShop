import React from "react";
import Slider from "react-slick";
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
const PlantStands = () => {
	return (
		<>
			<section className="plant_stand_section">
				<div>
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="plant_stands_head">
									<h3>Plant stands</h3>
									
								</div>
							</div>
                            <Slider {...settings}>
										<div className="col-lg-4 px-4 py-0">
											<div>
                                                <img className="img-fluid" src="../assets/image 5.svg" />
                                            </div>
										</div>
										<div className="col-lg-4 px-4">
											<div>
                                                <img className="img-fluid" src="../assets/image 6.svg" />
                                            </div>
										</div>
                                        <div className="col-lg-4 px-4">
											<div>
                                                <img className="img-fluid" src="../assets/image 7.svg" />
                                            </div>
										</div>
                                        <div className="col-lg-4 px-4">
											<div>
                                                <img className="img-fluid" src="../assets/image 5.svg" />
                                            </div>
										</div>
										
									</Slider>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PlantStands;
