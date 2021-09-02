import React from "react";

export const Login = () => {
  return (
    <main className="main-section main-section_all-height">
      <section className="login-section container">

        <div className="row">
          <div className="col s12 m6 offset-m3">
            <form className="auth-form" name="login-form" id="login-form">
              <input type="hidden" name="hiddenTitle" value="secret-key" />
              <div className="input-field">
                <input id="login" name="login" type="text" className="validate" required />
                <label htmlFor="login">Login</label>
              </div>
              <div className="input-field">
                <input id="password" name="password" type="password" className="validate" required />
                <label htmlFor="password">Password</label>
              </div>
              <button className="waves-effect waves-light btn" type="submit">Submit</button>
            </form>
          </div>
        </div>

      </section>
    </main>
  );
}