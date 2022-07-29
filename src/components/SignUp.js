import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState } from 'react';
import './SignUp.css';

function SignUp(){
	const [username,updatedName]=useState("");
	const [email,updatedEmail]=useState("");
	const [password,updatedPwd]=useState("");
	const [confirmpassword,updatedRePwd]=useState("");
	const navigate = useNavigate();
	useEffect(()=>{
		if(localStorage.getItem('signUp-info')){
			navigate("/SearchandData")
		}
	})
	async function signup()
	{
		console.warn(username,email,password,confirmpassword)
		let sitem = {username,email,password,confirmpassword};
		let sresult = await fetch("http://localhost:5000/register",{
			method:'POST',
			headers:{
				"Content-Type":"application/json",
				"Accept":"application/json"
			},
			body:JSON.stringify(sitem)
		});
		sresult = await sresult.json()
		localStorage.setItem("signUp-info",JSON.stringify(sresult))
		navigate("/SearchandData")
	}

    return(
		<div className="SignUp">
			<div id='ram'>
				<h2 className="text"><center>SIGN UP</center></h2>
				<form/>
				<label htmlFor="name"><b>NAME</b></label>
				<input type="text" placeholder="Name..." name="username" required
				onChange={(e)=> updatedName(e.target.value)}/>
				<label htmlFor="EMAIL"><b>EMAIL</b></label>
				<input type="text" placeholder="Email..." required name="email"
				onChange={(e)=> updatedEmail(e.target.value)}/>
				<label htmlFor="Password"><b>PASSWORD</b></label>
				<input type="Password" placeholder="Password..." name="password" required
				onChange={(e)=> updatedPwd(e.target.value)}/>
				<label htmlFor="Re-Password"><b>CONFIRM PASSWORD</b></label>
				<input type="Password" placeholder="Re-Password..." name = "confirmpassword"required
				onChange={(e)=> updatedRePwd(e.target.value)}/>
				<center><Link to="/SearchandData">
					<button onClick={signup}>Create Account</button></Link>
				</center>
				<form/>
				</div>
		</div>
    );
}

export default SignUp;
