import React, { useState } from 'react';
import axios from 'axios';
// import react and usestate from react library, import axios for making http requests

const SearchForm = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    // define a functional component named SearchForm, takes prop onSearch
    // use useState hook to declare a state variable searchTerm- initial value of searchTerm=empty string

    const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    };
// declares function handleSubmit that is called when form submitted
    // By calling e.preventDefault(), you're telling the browser not to
    // perform the default behavior
    // perform custom actions, such as calling the 
    // onSearch function with the searchTerm value, without causing the page to reload
    
    return (
        <form onSubmit={handleSubmit}> 
            {/* return form element in react component. when form submitted 
            handlesubmit will be called, onsubmit event is triggered when user submits */}
    <input
        type="text"
        placeholder="Search jobs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button type="submit">Search</button>
        </form>
        // input element is where users put in their search term
        // input fields value connected to searchTerm state showing current state 
        // onchange event handler updates searchTerm state whenever user types something in the button 
        
);
};

export default SearchForm;