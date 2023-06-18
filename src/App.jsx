import {useState, useEffect} from 'react'
import './App.css'
import axios from 'axios';

function App() {
    const [jobDetails, setJobDetails] = useState([]);
    const APIKEY = "ca24002e0e394a1b22fb1b8e80d2cbb081441be6";

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
        </>
    );
    }
    

//     return (
//     <>
//     <Categories />
//     </>
// )


export default App;


















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Jobcats from './components/Categories.jsx';

// const Jobcategories = () => {
// const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://api.jobfinder.com/jobs', {
//           headers: {
//             'Authorization': 'Bearer 38081c8f6f0590062bc0cc5b3bb7d1c34f458d4f'
//           }
//         });
//         setJobs(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Job Finder</h1>
//       <Jobcats jobs={jobs} />
//     </div>
//   );
// };

// export default Jobcategories;







// // import React, { useEffect, useState} from 'react';
// // import axios from 'axios';
// // // import 'Jobcats' from './components/Jobcats.jsx';
// // // import 'Jobind' from './components/Jobind.jsx';
// // import './App.css';
// // import JobSearch from './components/Search.jsx';

// // function App() {
// //     return (
// //     <JobSearch />
// //     );
// // }

// // export default App;







// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Categories from './Category';
// import Quiz from './Quiz';

// const App = () => {
//     const [selectedCategory, setSelectedCategory] = useState('');

// return (
//     <div>
//     {selectedCategory ? <Quiz categoryID={selectedCategory} categories={Categories} setSelectedCategory={setSelectedCategory} /> : <Categories setSelectedCategory={setSelectedCategory} />}
//     </div>
// );
// }

// export default App;








// function App () => {
//     return (
//         <Search />
//     );
// }

// export default App;

// import { useEffect, useState } from 'react';
// import axios from 'axios';



// const Categories = ({setSelectedCategory}) => {
// const [categories, setCategories] = useState([]);


// const handleCategoryId = (id) => {
//     setSelectedCategory(id);
//     console.log('Look, Ma!', id);
// };

// useEffect(() => {
//     const URL = 'https://opentdb.com/api_category.php';
//     axios.get(URL)
//     .then(response => {
//         setCategories(response.data.trivia_categories);
//     });
// }, []);

// return (
//     <div>
//     <h1>Trivia</h1>
//     <div className="catCard">
//         {categories.map(category => (
//         <div key={category.id}>
//             <button className="catButton" onClick={() => handleCategoryId(category.id)}>{category.name}</button>
//         </div>
//         ))}
//     </div>
//     </div>
// );
// };




// export default Categories;