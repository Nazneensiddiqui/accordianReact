import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTask ,DeletTask , EditTask, Uncomplited, Complited} from "../todoSlice";



const Home=()=>{
    const[myWork , setMywork]=useState("")
    const[myid,setMyid]=useState("")
    const[btnStatus, setBtnstatus]=useState(true)
    const todo=useSelector(state=>state.MyTodo.task)
    const dispatch=useDispatch();

    const handleSubmit=()=>{
        dispatch(AddTask({id:Date.now(), work:myWork , status:false}));
        setMywork("")
    }

    const DeletData=(id)=>{
dispatch(DeletTask(id))
    }

    const EditData=(id, wrk)=>{
 setMywork(wrk);
 setMyid(id)
 setBtnstatus(false)
    }
    
const EditSave=()=>{
    dispatch(EditTask({id:myid , work: myWork}))
    setBtnstatus(true)
    setMywork("")
}

const complition=(id , status)=>{
   if(status)
   {
   dispatch(Uncomplited(id))
   }
   else
   {
    dispatch(Complited(id))
   }
}



    let sno=0;
    const ans=todo.map((key)=>{
sno++;
return(
    <>
    <tr>
        <td>{sno}</td>
        <td>{key.status?(<span style={{color:"red", textDecoration:"line-through"}}>{key.work}</span>):
        (<span style={{color:"black", textDecoration:"none"}}>{key.work}</span>)} </td>
        <td><button onClick={()=>{complition(key.id,key.status)}}>{ key.status? "UnComplited" : "Complited"}</button></td>
        <td><button onClick={()=>{DeletData(key.id)}}>Delete</button></td>
        <td><button onClick={()=>{EditData(key.id, key.work)}}>Edit</button></td>
    </tr>
    </>
)
    })

    return(
      <>
      <center>
        <h1>The Todo App Home page</h1>
        Enter your Task : <input type="text" value={myWork} onChange={(e)=>{setMywork(e.target.value)}} />
     {btnStatus? (<button onClick={handleSubmit}>Add</button>):
      (<button onClick={EditSave}>EditSave</button>)}
        <hr color="blue"/>
        <div style={{width:"600px", height:"400px", border:"1px solid red"}}>
          <table border="2px" width={300}>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Task Name</th>
                <th>Status</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
              {ans}
            </thead>
          </table>
  
        </div>
      </center>
      </>
    )
  }
  export default Home;