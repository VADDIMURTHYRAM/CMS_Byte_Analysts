import React, { useState } from "react";
import './SearchandData.css';
import './NewContact';

function SearchandData(){
    const [Contacts, setContacts] = useState([]);
    async function getResponse() {
        const response = await fetch(
            '',
            {
                method: 'GET',
                headers: {
                    'x-rapidapi-host': 'carbonfootprint1.p.rapidapi.com',
                    'x-rapidapi-key': 'your_api_key'
                }
            }
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const newResponse = await response.json();
        setContacts(newResponse.data);
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
                            <th>E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Contacts.map((Contact, i) => (
                    <tr key={i}>
                        <td>{Contact.name}</td>
                        <td>{Contact.DOB}</td>
                        <td>{Contact.address}</td>
                        <td>{Contact.city}</td>
                        <td>{Contact.pincode}</td>
                        <td>{Contact.phoneNumber}</td>
                        <td>{Contact.email}</td>
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