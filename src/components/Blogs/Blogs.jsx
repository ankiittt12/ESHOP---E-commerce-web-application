import React from "react";
import Headline from "../Shared/Headline";
import img1 from "../../assets/blog-1.jpg";
import img2 from "../../assets/blog-2.jpg";
import img3 from "../../assets/blog-3.jpg";

const BlogData = [
  {
    title: "How to choose perfect smartwatch",
    subtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed?",
    published: "Jan 20, 2026 by Mohan",
    image: img1,
    aosDelay:"0"
  },
  {
    title: "How to choose perfect smartwatch",
    subtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed?",
    published: "Jan 20, 2026 by Rohit",
    image: img2,
    aosDelay:"200"
  },
  {
    title: "How to choose perfect smartwatch",
    subtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed?",
    published: "Jan 20, 2026 by Kaalu",
    image: img3,
    aosDelay:"400"
  },
];
function Blogs() {
  return (
    <div className="my-12">
      <div className="container">
        {/* Heading */}
        <Headline title={"Recent News"} subtitle={"Explore Our Blogs"} />
        {/* Blogs section */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
            gap-6 gap-y-8 sm:gap-4 md:gap-7"
        >
          {/* Blog Card */}
          {BlogData.map((data) => (
            <div
            
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
             key={data.title} className="bg-white dark:bg-gray-900">
              {/* image section */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-[220px] object-cover rounded-2xl
                            hover:scale-105 duration-500"
                />
              </div>
              {/* contect section */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p
                  className="line-clamp-2 text-sm 
                            text-gray-600 dark:text-gray-400"
                >
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
