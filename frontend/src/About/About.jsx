import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from '../../public/about.jpg'
import mission from '../../public/about3.jpg'
import group from '../../public/group.webp'


function About() {
    
  return (
    <>
    <div>
        <Navbar/>
        <div className="min-h-screen">
            <div className="text-center ">
                <div className="pt-28 ">
                    <h1 className="text-3xl md:text-4xl underline">
                     About Us
                    </h1>
                </div>
                <div className='mt-4 space-y-2 md:mt-12 '>
                    <h1 className="text-2xl md:text-5xl ">The world’s destination 
                        <br/>
                        <span className="text-2xl md:text-3xl text-blue-500">for design</span>
                    </h1>
                </div>   
                <div>
                    <p className="text-1xl md:text-2xl ">power of technology to enhance your reading journey. </p>
                </div>    
                <div className='space-y-2 md:m-20 '>
                    <img src={Image} alt="image"/>
                </div>
                <div >
                    <h1 className="text-xl md:text-4xl mt-10 ">Our Story</h1>
                    <div className=" mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 ">
                    <div className="order-1 w-full md:w-1/2 ">
                     <img src={mission} alt="image" className="md:w-[550px] md:h-[460px] md:ml-12 " />
                    </div>
                    <div className="order-2 w-full md:w-1/2 mt-10 md:mt-20 ">
                        <p>Born out of a love for books and a desire to make reading more accessible and enjoyable for everyone,
                            [Book Store] was conceptualized by a team of passionate readers and tech enthusiasts. 
                            We set out on a mission to create an app that not only simplifies the process of discovering, 
                            purchasing, and organizing your favorite books but also fosters a sense of community among fellow book lovers.
                            Beyond being a digital library, [Book Store] is a thriving community of book enthusiasts from all walks of life. 
                            Connect with fellow readers, join discussions about your favorite books, 
                            and discover new titles recommended by people who share your literary preferences. 
                            Whether you're looking for a new book club to join or seeking recommendations for your next read, 
                            you'll find a welcoming and supportive community waiting for you here.
                        </p> 
                   </div>
                   </div>   
                </div>
                <div >
                    <h1 className="text-xl md:text-4xl mt-10 ">Our Mission</h1>
                    <div className=" mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 ">
                    <div className="order-1 w-full md:w-1/2">
                     <img src={group} alt="image" className="md:w-[550px] md:h-[460px] md:ml-12" />
                    </div>
                    <div className="order-2 w-full md:w-1/2 mt-10 md:mt-20">
                        <p>At [Book Store], our mission is to enrich your reading
                            experience by providing a seamless platform where you can 
                            explore a vast library of titles, connect with like-minded readers, 
                            and unlock personalized recommendations tailored to your literary tastes. 
                            We believe that everyone deserves access to the transformative power of stories, 
                            and we're committed to making that experience as immersive and enjoyable as possible.
                            What sets [Book Store] apart is our dedication to innovation and user-centric design. 
                            With features like intelligent recommendation algorithms, customizable reading lists, 
                            and virtual book clubs, we're constantly striving to enhance your interaction with 
                            books and authors in meaningful ways. Plus, our intuitive interface and user-friendly 
                            experience ensure that you can spend less time navigating the app and more time diving
                            into your next great read.
                        </p> 
                   </div>
                   </div>   
                </div>
                <div>
                    <h1 className="text-xl md:text-4xl mt-10 ">What user say about us!!</h1>
                    <div className='mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 '>
                    <div className='border border-gray-600 rounded-md m-3 md:m-10  hover:scale-105 duration-200 block relative'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZzBmJI3uGlHUQplGwlizXvjZDxOnlWD7jT2O6HrN8Q&s" 
                        alt="image" className='h-36 w-36 rounded-full p-4 border-8' />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptatum temporibus quam facere, numquam quisquam laudantium
                            libero est neque assumenda incidunt necessitatibus fugit sunt 
                            eos quidem magni modi aspernatur reiciendis voluptatibus alias 
                            tenetur doloremque nihil repudiandae quas. 
                        </p>
                        <h1>Name</h1>
                        <p>Role/Position</p>
                    </div>
                    <div className='border border-gray-600 rounded-md p-2 m-3 md:m-10 hover:scale-105 duration-200  block relative'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZzBmJI3uGlHUQplGwlizXvjZDxOnlWD7jT2O6HrN8Q&s" 
                        alt="image" className='h-36 w-36 rounded-full p-4 border-8' />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptatum temporibus quam facere, numquam quisquam laudantium
                            libero est neque assumenda incidunt necessitatibus fugit sunt 
                            eos quidem magni modi aspernatur reiciendis voluptatibus alias 
                            tenetur doloremque nihil repudiandae quas. 
                        </p>
                        <h1>Name</h1>
                        <p>Role/Position</p>
                    </div>
                    <div className='border border-gray-600 rounded-md m-3 md:m-10 hover:scale-105 duration-200  block relative'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZzBmJI3uGlHUQplGwlizXvjZDxOnlWD7jT2O6HrN8Q&s"
                         alt="image" className='h-36 w-36 rounded-full p-4 border-8' />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptatum temporibus quam facere, numquam quisquam laudantium
                            libero est neque assumenda incidunt necessitatibus fugit sunt 
                            eos quidem magni modi aspernatur reiciendis voluptatibus alias 
                            tenetur doloremque nihil repudiandae quas. 
                        </p>
                        <h1>Name</h1>
                        <p>Role/Position</p>
                    </div>
                    </div>
                </div>
                
                
            </div> 
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default About