import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import test1 from './../../../../images/testimonial/1.png';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
  	<div className="owl-nav">
		<div className="owl-next fa fa-caret-right"  onClick={onClick}/>
	</div>	
  );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
		<div className="owl-nav">
			<div className="owl-prev fa fa-caret-left" onClick={onClick} style={{zIndex:1}}/>
		</div>
    );
}

const EventSlider = () => {
	const settings = {
		dots: false,
		infinite: true,
		arrows: false,
		speed: 500,
		center: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				},
			},
		],
	};
	return(
		<>
			<Slider className="testimonial-one owl-carousel  p-0 rounded overflow-hidden" {...settings}>
				<div className="items">
					{/* <div className="position-relative image">
						<img src={test1} alt="" className="rounded w-100" />
						<span className="fs-12">Danau Toba</span>
					</div> */}
				</div>
			</Slider>
		</>
	);
}; 
export default EventSlider;