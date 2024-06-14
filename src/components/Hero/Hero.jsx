import React from "react";
import Slider from "react-slick";
import hero1 from "../../assets/hero/hero1.png";
import hero2 from "../../assets/hero/hero2.png";
import hero3 from "../../assets/hero/hero3.png";
import Button from "../Shared/Button";

const Hero = () => {
  const HeroData = [
    {
      id: 1,
      img: hero1,
      subtitle: "Beats Solo",
      title: "Wireless",
      title2: "Cake",
      description:
        "Lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: hero2,
      subtitle: "Beats Solo",
      title: "Wireless",
      title2: "Noodles",
      description:
        "Lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: hero3,
      subtitle: "Beats Solo",
      title: "Wireless",
      title2: "Burger",
      description:
        "Lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  const Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: "false",
    pauseOnFocus: true,
  };
  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center place-items-center">
        <div className="container pb-8 sm:pb-0">
          {/* Hero Section */}
          <Slider {...Settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* Text content section */}
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">
                      {data.subtitle}
                    </h1>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                      {data.title}
                    </h1>
                    <h1 className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">
                      {data.title2}
                    </h1>
                    <div>
                      <Button
                        text="Order Now"
                        bgColor="bg-primary"
                        textColor="text-white"
                      />
                    </div>
                  </div>
                  {/* Img section */}
                  <div className="order-1 sm:order-2">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
