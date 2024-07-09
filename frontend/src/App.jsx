import React from "react"
import Home from "./Home/Home"
import Courses from "./Courses/Coueses";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Contact from "./Contact/Contact";
import About from "./About/About";
import AddBooks from "./AddBook/AddBooks";
import Dashboard from "./Dashboard/Dashboard";
import UpdateBook from "./UpdateBook/UpdateBook";
import BookView from "./BookView/BookView";

function App() {
  const[authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route 
        path='/course' 
        element={authUser? <Courses/>:<Navigate to="/signup"/>}
        />
        <Route path='/addbooks'  element={authUser? <AddBooks/>:<Navigate to="/signup"/>}/>
        <Route path='/dashboard' element={authUser? <Dashboard/>:<Navigate to="/"/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/update" element = {<UpdateBook/>} />
        <Route path="/newbook" element={<BookView/>} />
        <Route path="/newbook/id" element={<BookView/>} />
      </Routes>
      <Toaster/>
    </div> 
    </>
  );
}

export default App;
