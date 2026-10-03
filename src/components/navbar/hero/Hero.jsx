
import React from "react";
import SliderImport from "react-slick";

import Image1 from "../../../assets/headphone.png";
import Image2 from "../../../assets/vr.png";
import Image3 from "../../../assets/macbook.png";
import Button from "../../category/Button";

const Slider = SliderImport.default ?? SliderImport;

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Experience",
    title: "Virtual",
    title2: "Reality",
    Description:
      "Explore a new world with an immersive visual experience.",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Premium",
    title: "Branded",
    title2: "Laptops",
    Description:
      "Discover powerful technology designed for your everyday needs.",
  },
];

function Hero({handleOrderPopup}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="w-full overflow-hidden bg-gray-300 dark:bg-gray-900 dark:text-white duration-300">
      <div className="container">
        <Slider {...settings}>
          {HeroData.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center min-h-[450px]">
                {/* Text content */}
                <div className="flex flex-col justify-center gap-4 text-center sm:text-left order-2 sm:order-1 py-8 sm:py-0">
                  <h2
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"

                  className="text-2xl sm:text-3xl lg:text-5xl font-bold">
                    {data.subtitle}
                  </h2>

                  <h1 
                   data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="text-4xl sm:text-5xl lg:text-7xl font-bold">
                    {data.title}
                    <span className="block text-white dark:text-primary sm:text-[80px] md:text-[100px] xl:text-[150px]">
                      {data.title2}
                    </span>
                  </h1>

                  <p className="text-sm text-gray-600 dark:text-gray-300 ">
                    {data.Description}
                  </p>

                  <div
                   data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="true"
                  >
                    <Button
                    text="Shop Now"
                    bgColor="bg-primary"
                    textColor="text-white"
                    handler = {handleOrderPopup}
                    />
                  </div>
                </div>

                {/* Image section */}
                <div
                 data-aos="zoom-in"
                  data-aos-once="true"
                className="flex justify-center items-center order-1 sm:order-2">
                  <img 
                    src={data.img}
                    alt={data.title2}
                    className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Hero;