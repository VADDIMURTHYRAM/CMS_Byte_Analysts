import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState } from 'react';
import './SignUp.css';

function SignUp(){
	const [name,updatedName]=useState("");
	const [email,updatedEmail]=useState("");
	const [password,updatedPwd]=useState("");
	const [repassword,updatedRePwd]=useState("");
	const navigate = useNavigate();
	useEffect(()=>{
		if(localStorage.getItem('signUp-info')){
			navigate("/SearchandData")
		}
	})
	async function signup()
	{
		console.warn(name,email,password,repassword)
		let sitem = {name,email,password,repassword};
		let sresult = await fetch("http://localhost:5000/login",{
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
				<input type="text" placeholder="Name..." name="name" required/>
				<label htmlFor="EMAIL"><b>EMAIL</b></label>
				<input type="text" placeholder="Email..." required name="email"/>
				<label htmlFor="Password"><b>PASSWORD</b></label>
				<input type="Password" placeholder="Password..." name="password" required/>
				<label htmlFor="Re-Password"><b>CONFIRM PASSWORD</b></label>
				<input type="Password" placeholder="Re-Password..." name = "repassword"required/>
				<center><Link to="\SearchandData">
					<button href="#">Create Account</button></Link>
				</center>
				<form/>
				</div>
		</div>
    );
}

export default SignUp;
