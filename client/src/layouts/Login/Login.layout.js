import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Loader } from "../../components";
import { requestAuthAction } from "../../sagas/login/actions";

export const Login = () => {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const submitForm = (event) => {
    event.preventDefault();

    if (formData.password && formData.login) {
      dispatch(requestAuthAction(formData));
    }
  }

  const changeValue = (event) => {
    const field = event.target;
    const value = field.value;
    const name = field.name;

    const data = {...formData};
    data[name] = value;

    setFormData(data);

  }

  return (
    <>
      <Loader />
      <main className="main-section main-section_all-height">
        <section className="login-section container">

          <div className="row">
            <div className="col s12 m6 offset-m3">
              <form className="auth-form" name="login-form" id="login-form" onSubmit={submitForm}>
                <input type="hidden" name="hiddenTitle" value="secret-key" />
                <div className="input-field">
                  <input
                    id="login"
                    name="login"
                    type="text"
                    className="validate"
                    required
                    value={formData.login}
                    onChange={changeValue}
                  />
                  <label htmlFor="login">Login</label>
                </div>
                <div className="input-field">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="validate"
                    required
                    value={formData.password}
                    onChange={changeValue}
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <button className="waves-effect waves-light btn" type="submit">Submit</button>
              </form>
            </div>
          </div>

        </section>
      </main>
    </>
  );
}