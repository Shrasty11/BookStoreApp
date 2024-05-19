import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import {Link} from 'react-router-dom';
import axios from "axios";

function Course() {
    const [book, setBook] = useState([]);
    useEffect(() => {
      const getBook = async () => {
        try {
          const res = await axios.get("http://localhost:4001/book");
          console.log(res.data);
          setBook(res.data);
        } catch (error) {
          console.log(error);
        }
      };
      getBook();
    }, []);
  
  return (
    <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
            <div className="pt-28 item-center justify-center text-center ">
                <h1 className="text-2xl md:text-4xl">
                    We're delighted to have you{" "} 
                    <span className="text-blue-500">Here! :)</span>
                </h1>
                <p className="mt-12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus at distinctio quia totam? Molestias quae voluptatem odit,
                    dicta repellendus laborum excepturi vitae ducimus pariatur numquam minus 
                    eveniet tempore laudantium corporis placeat commodi ipsa ipsam? Pariatur,
                    corrupti qui? Inventore eaque mollitia saepe atque molestiae fugit, 
                    eum suscipit ullam sed illum recusandae magnam veritatis et harum nulla quisquam, 
                    perferendis deserunt corrupti vitae?
                </p>
                <Link to='/'>
                <button className=" mt-9 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300">Back</button>
                </Link>
               
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                { book.map((item) =>(
                    <Cards key={item.id} item={item} />   
                ))}
            </div>
        </div>
    </>
   
  );
}

export default Course;