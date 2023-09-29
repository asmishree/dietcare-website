import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const PageSlider = () => {
  const paginationStyle = {
    "--swiper-pagination-color": "var(--primary)",
  };

  return (
    <Swiper
      style={paginationStyle}
      spaceBetween={0}
      centeredSlides={true}
      mousewheel={true}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
     navigation={true}
      modules={[Autoplay, Pagination, Navigation, Mousewheel]}
       >
      {slideData.map((slide, index) => (
        <SwiperSlide key={index} >
          <div className="slidermain">
            <div className="myslider">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
            </div>
          <img src={slide.poster} alt="slide" style={{borderRadius:"20px",userSelect: "none"}} />
          </div>
        </SwiperSlide>
      ))}
      
    </Swiper>
  );
};

export default PageSlider;

const slideData = [
  {
    _id: "1",
    poster:
      "https://res.cloudinary.com/dyun4cr6u/image/upload/v1695709361/pexels-naim-benjelloun-2291344_qwoc65.jpg",
    title: "DietCare",
    description: "xyzzzz",
    },
  {
  _id: "2",
  poster:
    "https://res.cloudinary.com/dyun4cr6u/image/upload/v1695707889/pexels-ketut-subiyanto-5038818_orhmkh.jpg",
  title: "DietCare",
  description: "The DietCare App is a beneficial app for people who deal with scedules",
},
{
_id: "3",
poster:
  "https://res.cloudinary.com/dyun4cr6u/image/upload/v1695709362/pexels-chan-walrus-958546_z2ak8v.jpg",
title: "DietCare",
description: "xyzzzz",
},
{
_id: "4",
poster:
  "https://res.cloudinary.com/dyun4cr6u/image/upload/v1695709363/pexels-lauren-heaton-8633675_ok8dpi.jpg",
title: "DietCare",
description: "xyzzzz",
}, 
{
    _id: "5",
    poster:
      "https://res.cloudinary.com/dyun4cr6u/image/upload/v1695709362/pexels-august-de-richelieu-4259707_vdzwuw.jpg",
    title: "DietCare",
    description: "xyzzzz",
    },
    {
      _id: "6",
      poster:
        "https://res.cloudinary.com/dyun4cr6u/image/upload/v1695709981/pexels-anna-tarazevich-5119595_udtgi9.jpg",
      title: "DietCare",
      description: "xyzzzz",
      },
]