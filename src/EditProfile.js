import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
//import profileData from './data/tableInfo.json';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function EditProfile({ onSaveProfile }) {

    const navigate = useNavigate();

    /*
    const [profile, setProfile] = useState(profileData);

    const [profile, setProfile] = useState(() => {
        const storedProfile = localStorage.getItem('profileData');
        return storedProfile ? JSON.parse(storedProfile) : {
            firstName: '',
            lastName: '',
            pronouns: '',
            phone: '',
            email: '',
            city: '',
            state: '',
            country: '',
            education: ''
        };
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile(prevProfile => ({
            ...prevProfile,
            [name]: value
        }));
      };
    */

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [pronouns, setPronouns] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [education, setEducation] = useState('');

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handlePronounsChange = (event) => {
        setPronouns(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleCityChange = (event) => {
        setCity(event.target.value);
    }

    const handleStateChange = (event) => {
        setState(event.target.value);
    }

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    }

    const handleEducationChange = (event) => {
        setEducation(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedProfile = {
            firstName,
            lastName,
            pronouns,
            phone,
            email,
            city,
            state,
            country,
            education
        };
        onSaveProfile(updatedProfile);

        //localStorage.setItem('profileData', JSON.stringify(profile));
        //console.log(profileData);
        navigate('/profile');
    };


    return (
        <div class="editprofile">
            <main>
                <div className="container bg-white mt-5">
                    <div className="row">
                        <div className="col-md-4 border-right">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                                <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile Pic" />
                                <span className="font-weight-bold">User Profile</span>
                            </div>
                        </div>

                        <div className="col-md-7 border-right">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="text-right">Profile Settings</h4>
                                </div>

                                <form onSubmit={handleSubmit}>

                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label className="labels" htmlFor="firstName_field">Name</label>
                                            <input type="text" className="form-control" placeholder="first name" value={firstName} onChange={handleFirstNameChange} />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="labels" htmlFor="lastName_field">Surname</label>
                                            <input type="text" className="form-control" placeholder="surname" value={lastName} onChange={handleLastNameChange} />
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <label className="labels" htmlFor="pronouns_field">Pronouns</label>
                                            <input type="text" className="form-control" placeholder="enter pronouns" value={pronouns} onChange={handlePronounsChange} />
                                        </div>
                                        
                                        <div className="col-md-12">
                                            <label className="labels" htmlFor="phone_field">Mobile Number</label>
                                            <input type="text" className="form-control" placeholder="enter phone number" value={phone} onChange={handlePhoneChange} />
                                        </div>

                                        <div className="col-md-12">
                                            <label className="labels" htmlFor="email_field">E-mail ID</label>
                                            <input type="text" className="form-control" placeholder="enter e-mail" value={email} onChange={handleEmailChange} />
                                        </div>

                                        <div className="col-md-12">
                                            <label className="labels" htmlFor="city_field">City</label>
                                            <input type="text" className="form-control" placeholder="enter city" value={city} onChange={handleCityChange} />
                                        </div>

                                        <div className="col-md-12">
                                            <label className="labels" htmlFor="state_field">State</label>
                                            <input type="text" className="form-control" placeholder="enter state" value={state} onChange={handleStateChange} />
                                        </div>

                                        <div className="col-md-12">
                                            <label className="labels" htmlFor="country_field">Country</label>
                                            <input type="text" className="form-control" placeholder="enter country" value={country} onChange={handleCountryChange} />
                                        </div>

                                        <div className="col-md-12">
                                            <label className="labels" htmlFor="education_field">Education</label>
                                            <input type="text" className="form-control" placeholder="enter education" value={education} onChange={handleEducationChange} />
                                        </div>
                                    </div>
                                    
                                    <div className="text-center">
                                            <button className="btn btn-primary profile-button" type="submit">Save Profile</button>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    );
}

export { EditProfile };