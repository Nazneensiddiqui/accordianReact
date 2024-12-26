import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Insert=()=>{
    const[input , setInput]=useState("");
const navigate=useNavigate()
    const handleInput=(e)=>{
           let name=e.target.name;
           let value=e.target.value;
           setInput(values=>({...values , [name]:value}))
           }


    const handleSubmit=()=>{
        let api="http://localhost:3000/student";
     axios.post(api,input).then((res)=>{
        console.log(input)
        alert("Data Save")
        setInput("")
        navigate("/display")
     })
    }
    return(
        <>
        <center>
     <h1>The Todo app Insert Page</h1>
     Enter Student No.  :      <input type="text" name="stuno" onChange={handleInput}/><br/><br/>
     Enter Student Name  :     <input type="text" name="name" onChange={handleInput}/><br/><br/>
     Enter Student Course  :   <input type="text" name="course" onChange={handleInput}/><br/><br/>
     Enter Student Fees  :     <input type="text" name="fees" onChange={handleInput}/><br/><br/>
     <button onClick={handleSubmit}>Submit</button>
        </center>
        </>
    )
}
export default Insert;