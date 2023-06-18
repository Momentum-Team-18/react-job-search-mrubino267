import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Categories () {
    const [jobDetails, setJobDetails] = useState([]);
    const APIKEY = "ca24002e0e394a1b22fb1b8e80d2cbb081441be6";
// declares new function called Categories
    // uses useState hook to declare state variable jobDetails 
    // decalres const API key
    useEffect(() => {
        axios
        .get("https://proxy-findwork-api.glitch.me/api/jobs/", {
            headers: {
            Authorization: `Token ${APIKEY}`,
            "Content-Type": "application/json",
            },
        })
        .then((response) => setJobDetails(response.data.results));
    }, []);
    // uses useEffect hook to fetch data from jobfinder API when the component mounts
    // The .then() method is called on the promise returned by the axios.get() function,
    // will execute the specified callback function when the API request resolved
    // Within the callback function, the
    // setJobDetails() function is called with response.data.results as the argument.
    // This updates the jobDetails state variable in the component 
    // with the fetched job details obtained from the API response
    
    console.log(jobDetails);

    return (
        <>
        <div>
            {jobDetails.map((job) => (
            <div key={job.id}>
                <h2>{job.company_name}</h2>
                <h3>{job.role}</h3>
                <h4>
                {job.employment_type}/{job.date_posted}
                </h4>
            </div>
            ))}
            </div>
            {/* This code block represents the JSX structure that 
            // is being returned from the component's render function. It renders 
            a list of job details obtained from the jobDetails state variable. */}
        </>
    );
    }
    

export default Categories;







// import React from 'react'
// import axios from 'axios'
// import { useState, useEffect } from 'react'

// function Categories() {
//     const [jobCategories, setJobCategories] = useState([])


//     const handleJobCategories = (keywords) => {
//         setJobCategories(keywords)
//     }

//     useEffect(() => {
//         axios
//         .get('https://proxy-findwork-api.glitch.me/api/jobs/', {
//             headers: {
//             Authorization: `Token ${import.meta.env.VITE_FINDWORK_API_KEY}`,
//             'Content-Type': 'application/json',
//             }}).then((response) => setJobCategories(response.data.results))
//         }, [])
        

//     return (
//     <>
//         <h1>Job Search</h1>
//         {jobCategories.map((job) => (
//             <ul key={job.results}>
//                 <button onClick={() => handleJobCategories(job.results)}>{job.employment_type}</button>
//             </ul>
//         ))}
//     </>
//     )}

//     export default Categories