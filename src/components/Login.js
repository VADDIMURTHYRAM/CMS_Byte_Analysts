import { Outlet, Link } from "react-router-dom";
import './Login.css';

function App(){
    return(	
		<>
		<div className='loginContainer'>
		<div className='loginForm'>
			<center>
				<h2>LOGIN</h2>
					<form/>
							<label htmlFor="userName"><b>Username</b></label>
							<input type="text" placeholder="User Name..." name="userName" required/>
							<br></br>

							<label htmlFor="password"><b>Password</b></label>
							<input type="Password" placeholder="Password..." name="password" required/>
							<br></br>
							<Link to="/SearchandData">
							<button className="SignIn">Sumbit</button></Link>
					<form/>
			</center>
		</div>
		</div>
		<Outlet/>
		</>
    );
}

export default App;
