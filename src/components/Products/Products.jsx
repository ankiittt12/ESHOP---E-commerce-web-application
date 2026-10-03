import React from 'react'
import Headline from '../Shared/Headline';
// import img
import img1 from'../../assets/p-1.jpg'
import img2 from'../../assets/p-2.jpg'
import img3 from'../../assets/p-3.jpg'
import img4 from'../../assets/p-4.jpg'
import img5 from'../../assets/p-5.jpg'
import img6 from'../../assets/p-7.jpg'
import img7 from'../../assets/p-9.jpg'
import img8 from'../../assets/p-1.jpg'
import ProductCard from './ProductCard';

const ProductData =[
    {
        id : 1,
        img : img1,
        title : "Boat HeadPhones",
        price : "120",
        aosDelay : "0"
    },
    {
        id : 2,
        img : img2,
        title : "Rocky Mountain",
        price : "400",
        aosDelay : "200"
    },
    {
        id : 3,
        img : img3,
        title : "Goggles",
        price : "320",
        aosDelay : "400"
    },
    {
        id : 4,
        img : img4,
        title : "Printer",
        price : "220",
        aosDelay : "600"
    },
]
const ProductData2 =[
    {
        id : 5,
        img : img5,
        title : "Boat HeadPhones",
        price : "500",
        aosDelay : "0"
    },
    {
        id : 6,
        img : img6,
        title : "Rocky Mountain",
        price : "380",
        aosDelay : "200"
    },
    {
        id : 7,
        img : img7,
        title : "Goggles",
        price : "120",
        aosDelay : "400"
    },
    {
        id : 8,
        img : img8,
        title : "Printer",
        price : "290",
        aosDelay : "600"
    },
]
function Products() {
  return (
    <div>
        <div className='container'>
            {/*Header section  */}
            <Headline title="Our Products" subtitle={"Explore Our Products"}/>
            {/*body section  */}
            <ProductCard data={ProductData}/>
            <ProductCard data={ProductData2}/>
        </div>
    </div>
  )
}

export default Products;