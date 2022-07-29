import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import './Login.css';

function App(){
	const [email,updateEmail]=useState("");
	const [password,updatePassword]=useState("");
	const history = useNavigate();
	useEffect(()=>{
		if(localStorage.getItem('user-info')){
			history("/SearchandData")
		}
	})
	async function login()
	{
		console.warn(email,password)
		let item={email,password};
		let result = await fetch("http://localhost:5000/login",{
			method:'POST',
			headers:{
				"Content-Type":"application/json",
				"Accept":"application/json"
			},
			body:JSON.stringify(item)
		});
		result = await result.json()
		localStorage.setItem("user-info",JSON.stringify(result))
		history("/SearchandData");
	}
    return(	
		<>
		<div className='loginContainer'>
		<div className='loginForm'>
			<center>
				<h2>LOGIN</h2>
				<br></br>
					<form/>
							<label htmlFor="email"><b>E-mail</b></label>
							<input 
								type="email" 
								placeholder="e-mail..." 
								name="email" 
								required="required"
								onChange={(e)=> updateEmail(e.target.value)}
							/>
							<br></br>
							<br></br>
							<label htmlFor="password"><b>Password</b></label>
							<input 
								type="password" 
								placeholder="Password..." 
								name="password" 
								required="required"
								onChange={(e)=> updatePassword(e.target.value)}
							/>
							<br></br>
							<br></br>
							<Link to="/SearchandData">
							<button onClick={login} className="SignIn">Sumbit</button></Link>
					<form/>
			</center>
		</div>
		</div>
		<Outlet/>
		</>
    );
}

export default App;
