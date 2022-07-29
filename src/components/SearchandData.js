import React, { useState } from "react";
import './SearchandData.css';
import './NewContact';

function SearchandData(){
    const [Contacts, setContacts] = useState([]);
    async function getResponse() {
        const response = await fetch(
            'http://localhost:5000/home',
            {
                method: 'GET',
                headers: {
                    "Content-Type":"application/json",
				    "Accept":"application/json"
                }
            }
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const newResponse = await response.json();
        setContacts(newResponse);
        console.log(newResponse)
    }
    
    return(
        <div className="SearchPage">
            <div className="Search">
                <br/>
                <br/>
                <h2 style={{color:"black"}}>Customer Management System</h2>
                <input type="text" className='searchButton'/>
                <button onClick={getResponse} className="search_button">Search</button>
            </div>
            <div className="TableData">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date Of Birth</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Pincode</th>
                            <th>Phone Number</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {Contacts.map((Contact, i) => (
                    <tr key={i}>
                        <td>{Contact.Name}</td>
                        <td>{Contact.Date_of_Birth}</td>
                        <td>{Contact.Address}</td>
                        <td>{Contact.City}</td>
                        <td>{Contact.Pincode}</td>
                        <td>{Contact.Mobile}</td>
                        
                    </tr>
                        ))}
                        <tr></tr>
                    </tbody>
                </table>
            </div>
        </div>
);
}
export default SearchandData;