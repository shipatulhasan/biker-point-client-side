import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CategorySection from "../shared/CategoriesSection/CategorySection";
import Advertise from "./Advertise/Advertise";
import LoadingProduct from "./LoadingProduct";
import NewsLetter from "./NewLetter/NewsLetter";
import Slider from "./Slider/Slider";

const Home = () => {

  const [isLoading,setIsLoading] = useState(false)
  const [advertises,setAdvertises] = useState(null)

  useEffect(()=>{
    setIsLoading(true)
    axios.get(`${process.env.REACT_APP_api}/advertise`,{
        headers:{
            authorization:`Bearer ${localStorage.getItem('biker-point-token')}`
        }
    })
    .then(data=>{
      
        setAdvertises(data?.data)
        setIsLoading(false)
    })

},[])


  return (
    <div>
      <Helmet>
        <title>Home - Biker Point</title>
      </Helmet>
     <div className="pb-5">
     <Slider />
     </div>
      <div className="py-16 lg:py-20">
        <CategorySection />
        <div className="text-center">
          <Link
            to="/categories"
            className=" px-6 py-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-red-500 hover:bg-red-600 focus:shadow-outline focus:outline-none"
          >
            View All
          </Link>
        </div>
      </div>
      {isLoading ? <LoadingProduct /> :
          advertises?.length>0 && <div className="pb-16 lg:pb-10">
          <Advertise advertises={advertises} isLoading={isLoading}/>
        </div>
        }

        <div>
          <NewsLetter/>
        </div>
    </div>
  );
};

export default Home;
