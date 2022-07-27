import { Outlet, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
      <>
    <div className="mb-2">
      <center><h1>Welcome to<br>
    </br>Contact Management System</h1>
    <br></br>
    <br></br>
    <p style={{color: "black"}}>Already have an account?</p>
    <Link to="/Login">
      <Button stylevariant="primary" size="lg">
      Login
      </Button></Link>
    <br></br>
    <br></br>
    <h3>OR</h3>
    <br></br>
    <br></br>
    <p style={{color: "black"}}>Create an account</p>
    <Link to="/SignUp">
    <Button variant="primary" size="lg">
      SignUp
    </Button></Link></center>
    </div>
    <Outlet/>
    </>
    );
  };
  
  export default Home;