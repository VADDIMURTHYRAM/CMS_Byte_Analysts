
import './Login.css';

function App(){
    return(	
		<div className='loginForm'>
			<center>
				<h2>LOGIN</h2>
					<form/>
							<label htmlFor="userName"><b>Username</b></label>
							<input type="text" placeholder="User Name..." name="userName" required/>
							<br></br>
							<br></br>
							<br></br>
							<label htmlFor="password"><b>Password</b></label>
							<input type="text" placeholder="Password..." name="password" required/>
							<br></br>
							<br></br>
							<br></br>
							<button className="SignIn">Sumbit</button>
					<form/>
			</center>
		</div>
    );
}

export default App;
