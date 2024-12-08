import React from 'react'
import Img1 from "../../assets/women/women1.jpeg"
import Img2 from "../../assets/women/women2.jpeg"
import Img3 from "../../assets/women/women3.jpg"
import Img4 from "../../assets/women/women4.png"
import {FaStar} from "react-icons/fa6"
const ProductsData=[
    {
        id:1,
        img:Img1,
        title:"Women Ethnic",
        rating:5.0,
        author:"white",
        aosDelay:"0",

    },
    {
        id:2,
        img:Img2,
        title:"Women western",
        rating:4.5,
        author:"Red",
        aosDelay:"200",

    },
    {
        id:3,
        img:Img3,
        title:"Goggles",
        rating:4.7,
        author:"brown",
        aosDelay:"400",

    },
    {
        id:4,
        img:Img4,
        title:"Printed T-shirt",
        rating:4.4,
        author:"Yellow",
        aosDelay:"600",

    },
    {
        id:5,
        img:Img4,
        title:"Fashion T-Shirt",
        rating:4.5,
        author:"Pink",
        aosDelay:"800",

    },
];
const Products = () => {
  return (
    <div className="mt-14 mb-12">
       <div className="container">
        {/*Header Section */}
        <div className="text-center mb-10 max-w-[600px]
        mx-auto">
            <p data-aos="fade-up" className="text-sm text-primary">Top Selling Products for you</p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
            <p data-aos="fade-up" className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptas ducimus eveniet.</p>
        </div>
        {/*Body Section */}
         <div>
            <div className="grid grid-cols-1 sm:grid-cols-3
            md:grid-cols-4 lg:grid-cols-5 place-items-center
            gap-5">
             {/*card Section */}
             {
               ProductsData.map((data)=>(
                <div 
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id} className="space-y-3">
                   <img src={data.img} alt=""
                   className="h-[220px] w-[150px] object-cover rounded-md
                   "/>
                   <div>
                    <h3 className="font-semibold">{data.title}</h3>
                    <p className="text-sm text-gray-600">{data.author}</p>
                    <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-400"/>
                        <span>{data.rating}</span>

                        
                    </div>
                   </div>
                </div>
               )) 
             }   

            </div>
            {/*view all button */}
            <div className="flex justify-center">
                <button className="text-center mt-10 cursor-pointer bg-primary
                text-white py-1 p:rounded-md">View All Button

                </button>
            </div>
         </div>
       </div>
    </div>
  )
}

export default Products;