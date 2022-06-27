import React,{useEffect} from "react";
import image5 from "../pages/assets/image 5.svg";
import image6 from "../pages/assets/image 6.svg";
import image7 from "../pages/assets/image 7.svg";
import Aos from 'aos';


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
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
};
const PlantStands = () => {
	Aos.init();
	// useEffect(() => {
	// 	Aos.init({ duration: 4000 });
	// }, []);
	return (
		<>
			<section className="plant_stand_section" data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
				<div>
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="plant_stands_head">
									<h3>Plant stands</h3>
								</div>
							</div>
						</div>
						<div className="row">
							<Slider {...settings}>
								<div className="col-lg-12 px-4 py-0">
									<div>
										<img className="img-fluid img_hover" src={image5} />
									</div>
								</div>
								<div className="col-lg-12 px-4">
									<div>
										<img className="img-fluid img_hover" src={image6} />
									</div>
								</div>
								<div className="col-lg-4 px-4">
									<div>
										<img className="img-fluid img_hover" src={image7}/>
									</div>
								</div>
								<div className="col-lg-12 px-4">
									<div>
										<img className="img-fluid img_hover" src={image5} />
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
