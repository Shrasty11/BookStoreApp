import React from 'react'
import banner from "../../public/bodyright.jpg"
const Banner = () => {
  return (
  <>
  <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
   <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
    <div className="space-y-12 ">
      <h1 className="text-4xl font-bold">
        Hello, welcomes here to learn something{" "}
        <span className='text-blue-500'>new everyday!!!</span>
      </h1>
      <p className="text-xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Recusandae animi ut obcaecati id dolores eveniet tenetur perspiciatis
        nihil aspernatur rem dicta modi, quam sit ipsum a soluta deserunt 
        laboriosam aliquam tempore voluptatum.
      </p>
      
    </div>
    <button className="btn mt-6 btn-secondary">Get Started</button> 
   </div>
   <div className="order-1 w-full mt-20 md:w-1/2">
    <img 
    src={banner} 
    alt="banner" 
    className="md:w-[550px] md:h-[460px] md:ml-12" 
    />
   </div>
  </div>
  </>
  );
}

export default Banner;