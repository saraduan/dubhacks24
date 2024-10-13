import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import { Review } from './Review';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import {db} from './index';

function JobPosting(props) {
    const { id } = useParams();
    const [job, setJob] = useState(null);
  
    useEffect(() => {
        const jobRef = ref(db, `jobs/${id}`);
        console.log(jobRef);
    
        onValue(jobRef, (snapshot) => {
          const jobData = snapshot.val();
          setJob(jobData);
          console.log(jobData);
        });

        return () => {
          off(jobRef);
        };
      }, [id]);
  
    if (!job) {
      return <div>Loading...</div>;
    }

    return (
        <div>
            <main>
                <div className="job-posting-container">
                    <section className="basic-info-container">
                    <h1>{job.title}</h1>
                    <div className="overview">
                    <div>
                    <p>{job.company} - {job.location} - {job.posted}</p>
                    <p>{job.pay} | {job.qualifications}</p>
                    </div>
                    </div>
                    <div className="apply">
                        <button>
                        Apply
                        </button>
                    </div>
                    </section>
                    <section className="job-description-container">
                    <h1>About the Job</h1>
                    
                    <div>
                        <p className="small-title">Overview:</p>
                        <p>{job.overview}</p>

                        <p className="small-title">Responsibilities:</p>
                        <p>{job.responsibilities}</p>

                        <p className="small-title">Benefits:</p>
                        <p>{job.benefits}</p>
                    </div>
                    </section>
                    <section className="review">
                        <h1>Review:</h1>
                        <p>Worked here before? Leave a Review!</p>
                        <Review companyName={job.company}/>
                    </section>
                </div>
            </main>
        </div>
    );
}
export { JobPosting };