import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {toast} from "react-hot-toast";
import axios from "axios";
import { useAuth } from '../context/AuthProvider';

import { CloudinaryUpload } from '../utils/cloudinary';

function AddBooks() {
    const[authUser, setAuthUser] = useAuth();
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        title: '',
        image: '',
    });

    const [uploading, SetUploading] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (event) => {
        setSelectedFiles(Array.from(event.target.files));
    };


    const handleFormSubmit =  async(ev) => {
        ev.preventDefault();
        try{
            await axios.post(`http://localhost:4001/book/newbook`, formData).then(() => {
            setFormData({
                name: '',
                category: '',
                price: '',
                title: '',
                image: '',
            })
            toast.success("Book Added Successfully");
        });
        console.log("done");
        console.log("formData", formData)
        }
        catch(error) {
            console.log(error);
        } 
    };
    

    const handleUpload = async () => {
        SetUploading(true);
        try{
            const uploadedImage = [...formData.image];
            for (const file of selectedFiles) {
                const imageUrl = await CloudinaryUpload(file);
                if (imageUrl) {
                    uploadedImage.push(imageUrl);
                }
            }
            setFormData({
                ...formData,
                image:uploadedImage,
            });   
            SetUploading(false);
        } catch(error) {
            console.log(error);
        }
            
    };

     
  return (
    <>
    <Navbar/>
    <div className="min-h-screen ">
        <div className='pt-28 text-center'>
            <form>
            <div className="m-0 md:m-auto flex flex-col h-[550px] w-full md:w-[500px]">
                <h1 className="text-2xl md:text-4xl m-5 md:m-0" >
                    AddBooks
                </h1>
                <label className='mt-10'>
                    Book Name :
                    <input 
                    type='text'
                    name='Book Name'
                     placeholder='Book Name' 
                     className=' ml-0 md:ml-3 border'
                     value = {formData.name} 
                     onChange={(ev) => setFormData({...formData, name: ev.target.value})}
                     />
                     
                </label>
                <label className='mt-5 md:mt-10 mr-20 md:mr-20'>
                    Category :
                    <select defaultValue="" name="category" className='ml-0 md:ml-3 border'value = {formData.category} 
                     onChange={(ev) => setFormData({...formData, category: ev.target.value})}>
                        <option value="">Select Category</option>
                        <option value="Free">Free</option>
                        <option value="Drama">Drama</option>
                        <option value="Action">Action</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Horror">Horror</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Cooking">Cooking</option>
                    </select>
                </label>
                <label className='mt-5 md:mt-10 mr-10'>
                    Price :
                    <input 
                    type='Number' 
                    name='price' 
                    placeholder='Price' 
                    className=' ml-0 md:ml-3 border' 
                    value = {formData.price} 
                     onChange={(ev) => setFormData({...formData, price: ev.target.value})}
                    />
                </label>
                <lable className='mt-5 md:mt-10'>
                    Title : 
                    <textarea 
                    name="title" 
                    placeholder="Book Description" 
                    className=' ml-0 md:ml-3 border' 
                    cols="30" rows="5"
                    value = {formData.title} 
                    onChange={(ev) => setFormData({...formData, title: ev.target.value})}
                    >
                    </textarea>
                </lable>
                <lable className='mt-5 md:mt-10'>
                    <span> Upload Image of Book</span>
                    <div>
                        <input 
                        type='file' 
                        name='image' 
                        accept=".png, .jpg, .jpeg, .WEBP"
                        multiple
                        className='border'
                        onChange={handleFileChange}
                        />
                        <button 
                        type='button' 
                        className='px-3 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded-md cursor-pointer'
                        onClick={handleUpload}
                        >
                            {uploading ? "Uploading..." : "Upload"}
                        </button>
                    </div>
                </lable>
                <input type="text" className='hidden' name="fullname" value={authUser.fullname} />
                <button type="submit" onClick={handleFormSubmit} className='h-10 w-40 m-auto text-white bg-pink-500 hover:bg-pink-700 rounded-md cursor-pointer '>Submit</button>
            </div>
            </form>
        </div> 
    </div>
    <Footer/>
    </>
  )
}

export default AddBooks