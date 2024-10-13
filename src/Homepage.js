import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import SearchBar from './SearchBar';
import JobListing from './JobListing';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {db} from './index';


function Homepage() {
 const [jobs, setJobs] = useState([]);
 const [searchTerm, setSearchTerm] = useState('');


 function handleSearch(event) {
   setSearchTerm(event.target.value.toLowerCase());
 }


 function suggestSearch(keyword) {
   setSearchTerm(keyword.toLowerCase());
 }

 useEffect(() => {
  const jobsRef = ref(db, 'jobs');
  console.log(jobsRef);
  onValue(jobsRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    if (data) {
      const jobArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
      setJobs(jobArray);
    }
  });

  return () => {
    off(jobsRef);
  };
}, []);

 return (
   <div>
     <div className="left-section">
       <ul className="list-unstyled">
       <li><a className="text-decoration-none text-white" href="https://ung.edu/career-services/online-career-resources/interview-well/tips-for-a-successful-interview.php">Interview Prep</a></li>
       <li><a className="text-decoration-none text-white" href="https://www.overleaf.com/latex/templates/tagged/cv">Resume Builder</a></li>
       <li><a className="text-decoration-none text-white" href="https://www.theforage.com/blog/basics/career-aptitude-test">Career Apitude Test</a></li>
       </ul>
     </div>
     <div className="right-section">

       <h2>Job Listings</h2>
       <SearchBar onSearch={handleSearch} suggestSearch={suggestSearch} />
       {jobs
        .filter(job => job.title && job.title.toLowerCase().includes(searchTerm))
        .map(job => (
          <JobListing
            key={job.id}
            id={job.id}
            title={job.title}
            logoSrc={job.logoSrc}
            company={job.company}
            location={job.location}
            pay={job.pay}
            qualifications={job.qualifications}
            posted={job.posted}
            saved={job.saved || false}
          />
        ))}
     </div>
   </div>
 );
}


export default Homepage;


 /*
 const jobListings = [
   {
     title: "Barista",
     logoSrc: "../../assets/logo.png",
     company: "District Market UW West Campus",
     location: "Seattle, WA",
     pay: "$20,000 - $30,000 per year",
     qualifications: "High School Diploma",
     posted: "yesterday"
   },
   {
     title: "Chef",
     logoSrc: "../../assets/apple.png",
     company: "Aladdin Gyro-Cery & Deli",
     location: "University District, WA",
     pay: "$30,000 - $40,000 per year",
     qualifications: "Some College",
     posted: "Posted 6 days ago"
   },
   {
     title: "Library Manager",
     logoSrc: "../../assets/microsoft.png",
     company: "UW Libraries",
     location: "Bothell, WA",
     pay: "$30,000 - $40,000 per year",
     qualifications: "Some College",
     posted: "Posted 2 days ago"
   },
   {
     title: "Content Creator",
     logoSrc: "../../assets/ebay.png",
     company: "UW Husky Union Building",
     location: "Seattle, WA",
     pay: "$20,000 - $30,000 per year",
     qualifications: "High School Diploma",
     posted: "Posted 4 days ago"
   },
   {
     title: "Janitor",
     logoSrc: "../../assets/walmart.jpeg",
     company: "UW Health Sciences Department",
     location: "Seattle, WA",
     pay: "$20,000 - $30,000 per year",
     qualifications: "High School Diploma",
     posted: "Posted last week"
   },
   {
     title: "Electrician",
     logoSrc: "../../assets/logo.png",
     company: "UW Facilities",
     location: "Tacoma, WA",
     pay: "$30,000 - $40,000 per year",
     qualifications: "Some College",
     posted: "Posted 2 weeks ago"
   },
   {
     title: "Electrician",
     logoSrc: "../../assets/microsoft.png",
     company: "UW Facilities",
     location: "Seattle, WA",
     pay: "$30,000 - $40,000 per year",
     qualifications: "Some College",
     posted: "Posted 2 weeks ago"
   },
   {
     title: "Electrician",
     logoSrc: "../../assets/ebay.png",
     company: "UW Facilities",
     location: "Bothell, WA",
     pay: "$30,000 - $40,000 per year",
     qualifications: "Some College",
     posted: "Posted 2 weeks ago"
   },
 ];
 */
