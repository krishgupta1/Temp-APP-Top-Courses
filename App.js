import React, { useEffect } from "react";
import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import Cards from "./components/Cards"
import {apiUrl, filterData, /*fit*/}  from "./data"
import {/*ToastContainer*/toast} from 'react-toastify';
import { useState } from "react";

const App = () => {
  const [courses, setCourses] = useState(null);
    useEffect( () => { 
    const fetchData = async() => {
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        // save data into variable
        setCourses(output.data);
        console.log("courses values updated")
        console.log(output);
      }
      catch(error){
        toast.error("Something went wrong")
      }
    }
    fetchData(); 
},[]);

  return (
  <div>
    <Navbar/>
    <Filter 
      filterData = {filterData}
    />
    <Cards courses = {courses}/>
  </div>
)};

export default App;