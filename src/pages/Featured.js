import React,{useEffect} from "react";
import img8 from "../pages/assets/image 8.svg";
import img9 from "../pages/assets/image 9.svg";
import img10 from "../pages/assets/image 10.svg";
import img11 from "../pages/assets/image 11.svg";
import Aos from "aos";

import Slider from "react-slick";
const settings = {
	className: "slider variable-width",
	dots: true,
	infinite: true,
	centerMode: false,
	slidesToShow: 2,
	slidesToScroll: 1,
	variableWidth: true,
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
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
	dots: false,

          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
			dots:false,
          },
        },
      ],
};
const Featured = () => {
	// useEffect(() => {
	// 	Aos.init({ duration: 4000 });
	// }, []);
	Aos.init();
	return (
		<>
			<section className="featured_section" data-aos={"fade-up"}>
				<div>
					<div className="container">
						<div className="row">
							<div className="col-6 col-lg-6">
								<div className="featured_header">
									<span >Featured</span>
								</div>
							</div>
							<div className="col-6 col-lg-6">
								<div className="featured_header_link">
									<a href="" blanck="">
										view all
									</a>
								</div>
							</div>
							<Slider {...settings}>
								<div className="col-lg-3 card_space">
									<div>
										<div className="fe_card_img">
											<img className="img-fluid" src={img8} />
										</div>
										<div>
											<div className="fe_card_title d-flex justify-content-between">
												<span>Peperomia Ginny</span>
												<span>$25</span>
											</div>
											<div className="d-flex justify-content-between">
												<div className="fe_card_select_color">
													<span className="fe_card_select_color_text">
														Pot color
													</span>
													<div className="d-flex">
														<div className="color_circle_1"></div>
														<div className="color_circle_2"></div>
														<div className="color_circle_3"></div>
														<div className="color_circle_4"></div>
													</div>
												</div>
                                                <div className="fe_card_buy_btn">
                                                    <button className="btn">Buy</button>
                                                </div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 card_space">
                                <div>
										<div className="fe_card_img">
											<img className="img-fluid" src={img9} />
										</div>
										<div>
											<div className="fe_card_title d-flex justify-content-between">
												<span>Peperomia Ginny</span>
												<span>$25</span>
											</div>
											<div className="d-flex justify-content-between">
												<div className="fe_card_select_color">
													<span className="fe_card_select_color_text">
														Pot color
													</span>
													<div className="d-flex">
														<div className="color_circle_1"></div>
														<div className="color_circle_2"></div>
														<div className="color_circle_3"></div>
														<div className="color_circle_4"></div>
													</div>
												</div>
                                                <div className="fe_card_buy_btn">
                                                    <button className="btn">Buy</button>
                                                </div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 card_space">
                                <div>
										<div className="fe_card_img">
											<img className="img-fluid" src={img10} />
										</div>
										<div>
											<div className="fe_card_title d-flex justify-content-between">
												<span>Peperomia Ginny</span>
												<span>$25</span>
											</div>
											<div className="d-flex justify-content-between">
												<div className="fe_card_select_color">
													<span className="fe_card_select_color_text">
														Pot color
													</span>
													<div className="d-flex">
														<div className="color_circle_1"></div>
														<div className="color_circle_2"></div>
														<div className="color_circle_3"></div>
														<div className="color_circle_4"></div>
													</div>
												</div>
                                                <div className="fe_card_buy_btn">
                                                    <button className="btn">Buy</button>
                                                </div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 card_space">
                                <div>
										<div className="fe_card_img">
											<img className="img-fluid" src={img11} />
										</div>
										<div>
											<div className="fe_card_title d-flex justify-content-between">
												<span>Peperomia Ginny</span>
												<span>$25</span>
											</div>
											<div className="d-flex justify-content-between">
												<div className="fe_card_select_color">
													<span className="fe_card_select_color_text">
														Pot color
													</span>
													<div className="d-flex">
														<div className="color_circle_1"></div>
														<div className="color_circle_2"></div>
														<div className="color_circle_3"></div>
														<div className="color_circle_4"></div>
													</div>
												</div>
                                                <div className="fe_card_buy_btn">
                                                    <button className="btn">Buy</button>
                                                </div>
											</div>
										</div>
									</div>
								</div>
							</Slider>
							<div />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Featured;
