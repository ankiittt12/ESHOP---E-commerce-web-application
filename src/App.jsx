import Banner from "./components/Banner/Banner";
import Category from "./components/category/Category";
import Category2 from "./components/category/Category2";
import Hero from "./components/navbar/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/Services/Services";
import Headphone from "./assets/headphone.png";
import "./index.css";
import Products from "./components/Products/Products";
import smartwatch2 from "./assets/smartwatch2-removebg-preview.png"
import Blogs from "./components/Blogs/Blogs";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerData = {
  Discount: "30% OFF",
  Title: "Fine Smile",
  Date: "10 Jan to 28 Jan",
  image: Headphone,
  title2: "Air Solo Bass",
  title3: "Winner Sale",
  title4:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, nulla.",
  bgColor: "#f42c37",
};
const BannerData2 = {
  Discount: "30% OFF",
  Title: "Happy Hours",
  Date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Bass",
  title3: "Winner Sale",
  title4:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, nulla.",
  bgColor: "#2dcc6f",
};

function App() {
  const [OrderPopup, SetOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    SetOrderPopup (!OrderPopup);
  };
  React.useEffect(()=>{
    AOS.init({
      duration: 800,
      easing: "ease-in-side",
      delay: 100,
      offset: 100
    });
    AOS.refresh();
  },[]);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar handleOrderPopup = {handleOrderPopup}/>
      <Hero handleOrderPopup = {handleOrderPopup}/>
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs/>
      <Partners/>
      <Footer/>
      <Popup OrderPopup={OrderPopup}
      handleOrderPopup={handleOrderPopup}/>
    </div>
  );
}

export default App;
