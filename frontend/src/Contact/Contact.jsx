import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
    <div>
        <Navbar/>
        <div className="min-h-screen">
            <div className="text-center">
           <div className="pt-20 md:pt-28 p-4  ">
                <h1 className="text-3xl md:text-4xl">
                    Contact Us
                </h1>
            </div>
            <div className='m-4'>
                <p className='text-2xl p-2'>Have a question, feedback, or just want to say hello?</p>
                    <p className='text-blue-500'>We'd love to hear from you! <br/>
                    <span>Get in touch with us via email.</span>
                 We can't wait to connect with you.</p>    
               

            </div>
            <div className='mt-4 space-y-2  '>
                <span className='mr-48 md:mr-64'>Name</span>
                <br/>
                <input 
                type="text" 
                placeholder="Enter your name" 
                className='w-60 md:w-80 px-3 py-1 border rounded-md outline-none'
                />
            </div>   
            <div className='mt-4 space-y-2  '>
                <span className='mr-48 md:mr-64'>Email</span>
                <br/>
                <input 
                type="text" 
                placeholder="Enter email" 
                className='w-60 md:w-80 px-3 py-1 border rounded-md outline-none'
                />
            </div>    
            <div className='mt-4 space-y-2  '>
                <span className='mr-44 md:mr-56 '>Message</span>
                <br/>
                <textarea 
                type="text" 
                placeholder="Type your message"  
                className='w-60 md:w-80 h-36 px-3 py-1 border rounded-md outline-none'
                />
            </div>
            <button className='px-3 py-2 bg-blue-500 text-white rounded-md cursor-pointer m-6 mr-44 md:mr-56 '>Submit</button> 
            </div>     
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default Contact