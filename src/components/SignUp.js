
import './SignUp.css';

function SignUp(){
    return(
		<div className="SignUp">
			<div id='ram'>
				<h2 className="text"><center>SIGN UP</center></h2>
				<form/>
				<label htmlFor="first name"><b>FIRST NAME</b></label>
				<input type="text" placeholder="First Name..." name="first name" required/>
				<label htmlFor="last name"><b>LAST NAME</b></label>
				<input type="text" placeholder="Last Name..." name="last name" required/>
				<label htmlFor="Password"><b>PASSWORD</b></label>
				<input type="Password" placeholder="Password..." required/>
				<label htmlFor="Re-Password"><b>CONFIRM PASSWORD</b></label>
				<input type="Password" placeholder="Re-Password..." required/>
				<label htmlFor="DATE OF BIRTH"><b>DATE OF BIRTH</b></label>
				<input type="DATE" placeholder="DATE OF BIRTH..." required/>
				<label htmlFor="EMAIL"><b>EMAIL</b></label>
				<input type="text" placeholder="Email..." required/>
				<center><button href="#">JOIN THE RIDE!</button></center>
				<form/>
				</div>
		</div>
    );
}

export default SignUp;
