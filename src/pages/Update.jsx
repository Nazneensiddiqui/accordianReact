import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Update=()=>{
const[stuData, setStudata]=useState([]);
const navigate=useNavigate()

const loadData=()=>{
    let api="http://localhost:3000/student";
    axios.get(api).then((res)=>{
          setStudata(res.data)
    })
}

useEffect(()=>{
    loadData();
},[])

const deletData=(id)=>{
  let  api= `http://localhost:3000/student/${id}`
    axios.delete(api).then((res)=>{
          alert("Data Succesfully Delete")
       
          loadData();
    })

}

const EditData=(id)=>{
 navigate(`/editData/${id}`)
}

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
        <td><button  onClick={()=>{deletData(key.id)}}>Delete</button>
        <button onClick={()=>{EditData(key.id)}}> Edit</button></td>
    </tr>
    </>
   )
})

    return(
        <>
        <center>
     <h1>The Todo app Update Page</h1>
     <table border="2px">
        <thead>
        <tr>
            <th>S.No.</th>
            <th>Student No.</th>
            <th>Student Name</th>
            <th>Student course</th>
            <th>Student Fees</th>
            <th>Action</th>
        </tr>
            {ans}
        </thead>
     </table>
        </center>
        </>
    )
}
export default Update;