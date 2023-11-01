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
        <SwiperSlide key={index}>
          <div className="slidermain">
            <div className="myslider">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
            <img
              src={slide.poster}
              alt="slide"
              style={{ borderRadius: "20px", userSelect: "none" }}
            />
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
    description:" This is a website that makes you aware of your regular diet and keeps a check on it. In this busy and fast life it will guide you through a healthy routine of eating and makes you feel sorted of life",
  },
  {
    _id: "2",
    poster:
      "https://res.cloudinary.com/dyun4cr6u/image/upload/v1695707889/pexels-ketut-subiyanto-5038818_orhmkh.jpg",
    title: "Body Mass Index (BMI)",
    description:
      "BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass. It is widely used as a general indicator of whether a person has a healthy body weight for their height. Specifically, the value obtained from the calculation of BMI is used to categorize whether a person is underweight, normal weight, overweight, or obese depending on what range the value falls between. These ranges of BMI vary based on factors such as region and age, and are sometimes further divided into subcategories such as severely underweight or very severely obese. Being overweight or underweight can have significant health effects, so while BMI is an imperfect measure of healthy body weight, it is a useful indicator of whether any additional testing or action is required.",
  },
  {
    _id: "3",
    poster:
      "https://res.cloudinary.com/dyun4cr6u/image/upload/v1695709362/pexels-chan-walrus-958546_z2ak8v.jpg",
    title: "Basal Metabolic Rate (BMR) ",
    description:
      "The BMR Calculator estimates your basal metabolic rate—the amount of energy expended while at rest in a neutrally temperate environment, and in a post-absorptive state .It  is the amount of energy needed while resting in a temperate environment when the digestive system is inactive. ",
  },
  {
    _id: "4",
    poster:
      "https://res.cloudinary.com/dyun4cr6u/image/upload/v1695709363/pexels-lauren-heaton-8633675_ok8dpi.jpg",
    title: "Body Fat",
    description:
      "The scientific term for body fat is adipose tissue. Adipose tissue serves a number of important functions. Its primary purpose is to store lipids from which the body creates energy. In addition, it secretes a number of important hormones, and provides the body with some cushioning as well as insulation.Body fat includes essential body fat and storage body fat. Essential body fat is a base level of fat that is found in most parts of the body. It is necessary fat that maintains life and reproductive functions. The amount of essential fat differs between men and women, and is typically around 2-5% in men, and 10-13% in women. The healthy range of body fat for men is typically defined as 8-19%, while the healthy range for women is 21-33%. While having excess body fat can have many detrimental effects on a person's health, insufficient body fat can have negative health effects of its own, and maintaining a body fat percentage below, or even at the essential body fat percentage range is a topic that should be discussed with a medical professional.",
  },
  {
    _id: "5",
    poster:
      "https://res.cloudinary.com/dyun4cr6u/image/upload/v1695709362/pexels-august-de-richelieu-4259707_vdzwuw.jpg",
    title: "Balanced Diet",
    description: "Healthy eating is of utmost importance for maintaining overall well-being. It provides numerous benefits, including:Nutrient Supply: Healthy eating ensures the body receives essential nutrients like vitamins, minerals, proteins, and fiber, promoting optimal bodily functions. Disease Prevention: A balanced diet reduces the risk of chronic diseases such as heart disease, diabetes, and certain types of cancer.In summary, healthy eating is the cornerstone of a healthy life, providing the body with the essential tools it needs to function at its best and prevent a wide range of health issues.",
  },
  {
    _id: "6",
    poster:
      "https://res.cloudinary.com/dyun4cr6u/image/upload/v1695709981/pexels-anna-tarazevich-5119595_udtgi9.jpg",
    title: "DietCare",
    description: "xyzzzz",
  },
];
