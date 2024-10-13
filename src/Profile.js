import React from 'react';
import { NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export default function Profile({ profileData }) {

    //const profileData = JSON.parse(localStorage.getItem('profileData'));
    
    if (!profileData) {
        /*
        const storedProfileData = localStorage.getItem('profileData');
        if (storedProfileData) {
            profileData = JSON.parse(storedProfileData);
        } else {
            // fallback to default profile data if no profile data is found
            profileData = {
                firstName: 'Curious',
                lastName: 'George',
                pronouns: 'he/him',
                email: 'georgeiscurious@gmail.com',
                phone: '(123) 456-7890',
                city: 'Seattle',
                state: 'Washington',
                country: 'United States',
                education: 'University of Washington'
            };
        }
        */

        return (
            <div class="profile">
                <main>
                    <div className="container bg-white">
                        <div className="row">
                            <div className="p-3 pt-5 border-right">
                                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                                    <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile Pic" />
                                    <span className="font-weight-bold">Curious George</span>
                                    <span className="text-black-50">he/him</span>
                                    <span className="text-black-50 pt-3">georgeiscurious@gmail.com</span>
                                    <span className="text-black-50">(123) 456-7890</span>
                                    <span className="text-black-50">Seattle, Washington, United States</span>
                                    <span className="text-black-50 pt-3">University of Washington</span>
                                </div>
                            </div>
                            <div className="p-3 pb-5 border-right">
                                <div className="mt-2 text-center">
                                    <button className="btn btn-primary profile-button" type="button">
                                        <NavLink to="/editProfile" style={{ textDecoration: 'none', color: 'white' }}>Edit Profile</NavLink>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
            </div>
        );
    }
    

    const { firstName, lastName, pronouns, phone, email, city, state, country, education } = profileData;
    //const { firstName = 'Curious', lastName = 'George', pronouns = 'he/him', phone = '(123) 456-7890', email = 'georgeiscurious@gmail.com', city = 'Seattle', state = 'Washington', country = 'United States', education = 'University of Washington' } = profileData || {};
    const phoneHref = `tel:${phone}`;

    return (
        <div class="profile">
            <main>
                <div className="container bg-white">
                    <div className="row">
                        <div className="p-3 pt-5 border-right">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                                <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile Pic" />
                                <span className="font-weight-bold">{firstName} {lastName}</span>
                                <span className="text-black-50">{pronouns}</span>
                                <span className="text-black-50 pt-3">{email}</span>
                                <span className="text-black-50">{phoneHref}</span>
                                <span className="text-black-50">{city}, {state}, {country}</span>
                                <span className="text-black-50 pt-3">{education}</span>
                            </div>
                        </div>
                        <div className="p-3 pb-5 border-right">
                            <div className="mt-2 text-center">
                                <button className="btn btn-primary profile-button" type="button">
                                    <NavLink to="/editProfile" style={{ textDecoration: 'none', color: 'white' }}>Edit Profile</NavLink>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    );
}