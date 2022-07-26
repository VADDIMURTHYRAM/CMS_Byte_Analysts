
import './NewContact.css';


function NewContact(){
  return(
    <div className="formBody">
      <div className="details">
          <form/>
              <label htmlFor="fname">First Name</label>
              <input type="text" name="fname"/>
              <label htmlFor="lname">Last Name</label>
              <input type="text" name="lname"/><br/><br/>
              <label htmlFor="City">City</label>
              <input type="text" name="City"/>
              <label htmlFor="pcode">Pin Code</label>
              <input type="number" name="pcode"/><br/><br/>
              <label htmlFor="address">Adress Line</label>
              <input type="text" name="adress"/>
              <label htmlFor="mobile">Mobile Number</label>
              <input type="number" name="mobile"/><br/><br/>
              <label htmlFor="DOB">Date Of Birth</label>
              <input type="date" name="DOB"/>
              <label htmlFor="mail">E-mail</label>
              <input type="email" name="mail"/><br/><br/>
          <form/>
          <button type="submit" className="create">Add Contact</button>
          </div>
      </div>
  );
}


export default NewContact;
 