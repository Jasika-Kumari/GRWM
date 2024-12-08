import React from 'react'
import Img1 from "../../assets/shirt/shirt.png"
import {FaStar} from "react-icons/fa"

const ProductsData=[
    {
        id:1,
        img:Img1,
        title:"Casual Wear",
        description:
        "cessitatibus"
    },
    {
        id:2,
        img:Img1,
        title:"Printed Shirt",
        description:"lorem20"
        
    },
    {
        id:3,
        img:Img1,
        title:"Women Shirt",
        description:
        "lorem"
    },

];
const TopProducts = ({handleOrderPopup}) => {
  return (
    <div>
      <div className="container">
        {/*header section */}
        <div className="text-left mb-24 ">
            <p data-aos="fade-up" className="text-sm text-primary">Top Rated Products for you</p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">Best Products</h1>
            <p data-aos="fade-up" className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Atque 
             voluptas ducimus eveniet.</p>
        </div> 
        {/*body section */}
       <div className="grid grid-cols-1 sm:grid-cols-2
       md:grid-cols-3 gap-20 md:gap-5 place-items-center">
        {
          ProductsData.map((data)=>(
            <div className="rounded-2xl bg-white dark:bg-gray-800
            hover:bg-black/80 dark:hover:bg-primary
            hover:text-white relative shadow-xl duration-300
            group max-w-[300px]"
            >
                {/*image section */}
                <div className="h-[100px]">
                    <img src={data.img} alt=""
                    className="max-w-[250px] block mx-auto
                    transform-translate-y-20 group-hover:scale-105
                    duration-300 drop-shadow-md"/>
                </div>
                {/*details section */}
                <div className="pt-12 pb-5 mt-2 text-center ">
                    {/*star rating*/}
                  <div className="w-full flex items-center justify-center gap-1 mt-40">
                    <FaStar className="text-yellow-500"/>
                    <FaStar className="text-yellow-500"/>
                    <FaStar className="text-yellow-500"/>
                    <FaStar className="text-yellow-500"/>

                    </div>
                    <h1 className="text-xl font-bold">{data.title}</h1>
                    <p
                    className="text-gray-400 group-hover:text-white duration-300 text-sm line-clamp-2">{data.description}</p>
                    <button
                    className="bg-primary hover:scale-105
                    duration-300 text-white py-1 px-4
                    rounded-full mt-4 group-hover:bg-white 
                    group-hover:text-primary" onClick={handleOrderPopup} >
                        Order Now
                    </button>
                </div>    
            </div>
          ))
        }
       </div>

      </div>
    </div>
  )
}

export default TopProducts
