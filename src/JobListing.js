import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getDatabase, ref, update } from 'firebase/database';

function JobListing({ id, title, logoSrc, company, location, pay, qualifications, posted, saved }) {
  const [isSaved, setSaved] = useState(saved);

  const handleSave = () => {
    // Update the 'saved' property in the database
    const db = getDatabase();
    const jobRef = ref(db, `jobs/${id}`);
    update(jobRef, { saved: !isSaved });
    setSaved(!isSaved);
  };

  return (
    <div className="job-listing" data-title={title}>
      <div className="d-flex">
        <img src={logoSrc} alt="Logo" className="mr-3" />
        <div className="job-listing-items">
          <h5><a className="text-decoration-none text-black" href="#">{title}</a></h5>
          <p>{company}</p>
          <p>Location: {location}</p>
          <p>Pay: {pay}</p>
          <p>Minimum Qualifications: {qualifications}</p>
          <p>Posted {posted}</p>
          <button onClick={handleSave} className="save-button" >{isSaved ? 'Unsave' : 'Save'}</button>
          <button><Link to={`/jobPosting/${id}`} className="text-decoration-none text-white">View Details</Link></button>
        </div>
      </div>
    </div>
  );
}

export default JobListing;
