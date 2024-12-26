import { useState,useEffect } from "react";
import axios from "axios";

const Display=()=>{
    const[stuData, setStudata]=useState([])

const loadData=()=>{
    let api="http://localhost:3000/student";
    axios.get(api).then((res)=>{
        setStudata(res.data)
    })
}
useEffect(()=>{
    loadData();
},[])

let sno=0;
const ans=stuData.map((key)=>{
  sno++;
  return(
    <>
   <tr>
    <td>{sno}</td>
    <td>{key.stuno}</td>
    <td>{key.name}</td>
    <td>{key.course}</td>
    <td>{key.fees}</td>
    
    </tr> 
    </>
  )
})

    return(
        <>
        <center>
     <h1>The Todo app Display Page</h1>
     <table border="2px">
        <thead>
        <tr>
            <th>S.No.</th>
            <th>Student No.</th>
            <th>Student Name</th>
            <th>Student course</th>
            <th>Student Fees</th>
        </tr>
        {ans}
        </thead>
     </table>
        </center>
        </>
    )
}
export default Display;