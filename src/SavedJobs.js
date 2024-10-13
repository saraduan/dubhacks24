import React, { useState, useEffect } from 'react';
import SJTableRow from './sjTableRow';
import { getDatabase, ref, onValue, update } from 'firebase/database';
import './index.css';

export default function SavedJobs() {
    const [savedJobs, setSavedJobs] = useState([]);

    useEffect(() => {
        const fetchSavedJobs = async () => {
          try {
            const db = getDatabase();
            const savedJobsRef = ref(db, 'jobs');
            onValue(savedJobsRef, (snapshot) => {
              const data = snapshot.val();
              if (data) {
                const savedJobsArray = Object.keys(data)
                  .filter(key => data[key].saved)
                  .map(key => ({ id: key, ...data[key] }));
                setSavedJobs(savedJobsArray);
              }
            });
          } catch (error) {
            console.error('Error fetching saved jobs: ', error);
          }
        };

        fetchSavedJobs();
    }, []);

    const handleRemove = async (id) => {
        try {
          const db = getDatabase();
          const jobRef = ref(db, `jobs/${id}`);
          await update(jobRef, { saved: false });
    
          // Remove the job from the displayed list
          setSavedJobs(savedJobs.filter(job => job.id !== id));
        } catch (error) {
          console.error('Error removing job: ', error);
        }
      };
      
    return (
            <div className="savedJobs">
        <div className="container mt-4">
            <header className="bg-light p-3" style={{ width: '65%' }}>
                <h1>Your Saved Jobs</h1>
                <p>{savedJobs.length} Jobs</p>
            </header>

            <div className="container mt-4">
                <table style={{ width: '65%' }}>
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {savedJobs.map((job) => (
                            <SJTableRow key={job.id} onRemove={() => handleRemove(job.id)} {...job}  />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    );
}
