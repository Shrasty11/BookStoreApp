import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useAuth } from '../context/AuthProvider';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import {toast} from 'react-hot-toast';


function Dashboard() {

    const navigate = useNavigate();
    const[authUser, setAuthUser] = useAuth();
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

    const handleDelete= async (e)=>{
        let pid = e.target.id;
        console.log("pid-", pid)
        const deletedBook = await axios.delete(`http://localhost:4001/book/delete/${pid}`);
        toast.success("Book deleted successfully");
        setTimeout(() => {
            window.location.reload();
          }, 2000);
        console.log("deleted property - ", deletedBook)
    }

    const handleUpdate= (e)=>{
        let pid = e.target.id;
        // window.open(`/book/update?query=${pid}`,);
        navigate(`/update/?pid=${pid}`);
      }

    const handleViewBtn =(e)=>{
        let pid = e.target.id;
        // window.open(`/book/newbook?query=${pid}`,);
        navigate(`/newbook?query=${pid}`)
    }
        

  return (
    <>
    <Navbar/>
    <div className="min-h-screen pb-20 ">
        <div className='pt-[80px] md:pt-[68px]'>           
            <div className='flex justify-between flex-col md:flex-row gap-2'>
                <div className='absolute md:fixed p-3 w-full md:w-1/4 rounded-b-2xl bg-blue-50 shadow'>
                    <div>
                        <p className='text-xl bg-gray-200 rounded-2xl text-center p-2'>Welcome back user </p>
                    </div>
                    <div className='text-center mt-5'>
                        NAME: {
                            authUser?(
                               authUser.fullname     
                            ):(
                            "No user"
                            )
                        }
                    </div>
                    <div className='text-center mt-5'>
                        Email: {
                            authUser?(
                               authUser.email     
                            ):(
                            "No user"
                            )
                        }
                    </div>
                    <div className='text-center mt-5'>
                        <Link to='/addbooks'>
                        <button className="btn btn-outline btn-primary">AddBook</button>
                        </Link>
                    </div>
                    
                </div>
                <div className='ml-0 md:ml-auto w-full md:w-3/4 mt-60 md:mt-0 bg-base-100 '>
                    <div className='static md:fixed w-full md:w-3/4 p-3 bg-red-50 rounded-b-xl shadow' >
                        <p className='text-xl'>Welcome</p>
                        <h1 className="text-2xl md:text-2xl " >
                            Dashboard - Book List
                        </h1> 
                    </div>
                    <div className='pt:0 md:pt-28' >
                        {book.map((item, index) => (
                            <div key={index} className='flex justify-evenly border border-gray-500 m-5 p-2'>
                                <h4>{index}.</h4>
                                <div> 
                                    <img src={item.image[0]} alt="Sample Image" className='md:h-24 p-2 md:p-0'/>
                                </div >
                                <div className='mt-8'>
                                    <span>{item.name} - {item.category}</span>
                                </div>
                                <div className='mt-5'>
                                    <button className="btn btn-outline btn-success mr-3" id={item._id} onClick={handleViewBtn}>
                                         View
                                    </button>
                                    <button className="btn btn-outline btn-warning mr-3" id={item._id} onClick={handleUpdate}>
                                        Update
                                    </button>
                                    <button className="btn btn-outline btn-error" id={item._id} onClick={handleDelete}> 
                                        Delete
                                    </button>
                                </div>
                            </div>   
                        ))}
                    </div>     
                    
                </div>

            </div>  
        </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default Dashboard