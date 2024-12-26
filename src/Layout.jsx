import { Link,Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
      <Link to="home">Home</Link>     |
      <Link to="insert">Insert</Link>    |
      <Link to="display">Display</Link>     |
      <Link to="update">Update</Link>         |
      <hr color="red"/>

    <Outlet/>

      <hr color="red"/>
      www.mycompany@gmail.com; 
        </>
    )
}
export default Layout;