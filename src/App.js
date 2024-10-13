import React, { useState } from 'react';
import Homepage from './Homepage';
import SavedJobs from './SavedJobs';
import Profile from './Profile';
import { EditProfile } from './EditProfile';
import NavigationBar from './NavigationBar';
import { JobPosting } from './JobPosting';
import { Routes, Route, Navigate } from 'react-router-dom';

function App(props) {
  
  const [profileData, setProfileData] = useState(null);

  const handleSaveProfile = (updatedProfile) => {
    setProfileData(updatedProfile);
  }

    return (
        <div>
          <main className="container">
            <div className="row">
              <div className="col-3">
                <NavigationBar />
              </div>
              <div className="row">
                <Routes>
                    <Route path="/savedJobs" element={<SavedJobs />} />
                    <Route path="/profile" element={<Profile profileData={profileData} />} />
                    <Route path="/editProfile" element={<EditProfile  onSaveProfile={handleSaveProfile} />} />
                    <Route path="/homepage" element={<Homepage />} />

                    <Route path="/jobPosting/:id" element={<JobPosting />} />
                    
                    <Route path="*" element={<Navigate to="homepage" />} />
                </Routes>
              </div>
            </div>
          </main>
        </div>
      );
}

export default App;