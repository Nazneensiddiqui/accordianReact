import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditData=()=>{
    const{myid}=useParams();
    const[mydata,setmydata]=useState({});
    const navigate=useNavigate()

    const loadData=()=>{
        let api=` http://localhost:3000/student/${myid}`
        axios.get(api).then((res)=>{
              setmydata(res.data)
        })
    }
    useEffect(()=>{
        loadData()
    },[])

const hanldeInput=(e)=>{
  let name=e.target.name;
  let value=e.target.value;
  setmydata(values=>({...values , [name]:value}))
}

const handleSubmit=()=>{
   let api=` http://localhost:3000/student/${myid}`;
   axios.put(api,mydata).then((res)=>{
    alert("Data Update Succesfully save")
        setmydata({
            stuno:"",
            name:"",
            course:"",
            fees:""
        })
        navigate("/update")
   })
}

 return(
        <>
        <center>
            <h1> The Edit Page:{myid}</h1>
            Enter student No.    : <input type="text"name="stuno" value={mydata.stuno} onChange={hanldeInput}/><br/><br/>
            Enter student Name   : <input type="text" name="name" value={mydata.name} onChange={hanldeInput}/><br/><br/>
            Enter student Course : <input type="text" name="course" value={mydata.course} onChange={hanldeInput}/><br/><br/>
            Enter student Fees   : <input type="text" name="fees" value={mydata.fees} onChange={hanldeInput}/><br/><br/>
            <button onClick={handleSubmit}>Update Save</button>
        </center>
        </>
    )
}
export default EditData;