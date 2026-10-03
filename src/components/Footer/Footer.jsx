import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLink = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Blog",
    link: "/blog",
  },
];
function Footer() {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-4 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest
              text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            <p className="text-gray-600 lg:pr-24 pt-3">
              Lorem ipsum dolor sit amet consectetur,
              <br />
              adipisicing elit.Sit magnam aperiam
              <br />
              consequatur quibusdam tempora.
            </p>
            <p className="text-gray-500 mt-4">Made by Ankit Singh.</p>
          </div>
          {/* Footer Links */}
          <div className="col-span-1 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3 lg:ml-11 sm:ml-0">
                {FooterLink.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:text-black
                      duration-300 dark:hover:text-gray-200"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* second cols Links */}
          <div className="py-8 px-4">
            <h1 className="text-xl font-bold sm:text-left mb-3">Quick Links</h1>
            <ul className="space-y-3 lg:ml-11 sm:ml-0">
              {FooterLink.map((data, index) => (
                <li key={index}>
                  <a
                    href={data.link}
                    className="text-gray-600 hover:text-black
                      duration-300 dark:hover:text-gray-200"
                  >
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* company address */}

          <div className="py-8 px-4 col-span-2 sm:col-auto">
            <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
            <div>
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Faridabad, Haryana</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMobileAlt />
                <p>+91 123456789</p>
              </div>
              {/* social links */}
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-primary duration-300"/>
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl hover:text-brandblue duration-300"/>
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl hover:text-brandblue duration-300"/>
                </a>
              </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
