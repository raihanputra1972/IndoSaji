import React from "react";
import Heading from "../Shared/Heading";
//import image
import About1 from "../../assets/about/about1.png";
import About2 from "../../assets/about/about2.png";
import About3 from "../../assets/about/about3.png";

const AboutData = [
  {
    title: "Our Story",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    published: "2021-01-01 by Admin",
    image: About1,
  },
  {
    title: "Our Mission",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    published: "2021-01-02 by Admin",
    image: About2,
  },
  {
    title: "Our Vision",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    published: "2021-01-03 by Admin",
    image: About3,
  },
];

const About = () => {
  return (
    <div className="my-12">
      <div className="container">
        {/* Header Section */}
        <Heading title="About Us" subtitle="Explore Our Company" />

        {/* About Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* About Card */}
          {AboutData.map((data) => (
            <div key={data.title} className="bg-white dark:bg-gray-900 ">
              {/* Image Section */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                />
              </div>
              {/* Content Section */}
              <div className="space-y-2">
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {data.subtitle}
                </p>
                <p className="text-xs text-gray-500">{data.published}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
