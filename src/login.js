import React from "react";

export default function Login () {
    return (
        <div className="bigcontainer">
        <main>
          <div className="flex-container">
            <section id="section1" className="sections">
              <div className="cards">
                <div className="flex-item" id="card1">
                  <form>
                    <h2 className="text-small"> Create Your Account</h2>
                    <div>
                      <label htmlFor="email_input">Email Address</label> <input name="email" type="email" id="email_input" placeholder="email@domain.com" />
                      <label htmlFor="username_input">Username</label> <input name="username" type="username" id="username" />
                      <label htmlFor="password_input">Password</label> <input name="password" type="password" id="password_input" />
                    </div>
                    <button type="submit"> Create Account <i aria-label="Submit" className="fas fa-pencil-alt"></i></button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
}