import React, { SyntheticEvent, useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import ReactDOM, {render} from 'react-dom';

const Register = () => {
  let firstName = '';
  let lastName = '';
  let email = '';
  let password = '';
  let passwordConfirm = '';

  const [state, setState] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios.post('http://localhost:3333/api/admin/register', {
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
    });
    setState(true);
  };

  if (state) {
    return <Redirect to={'/login'}/>;
  }



  return (
    <main className="form-signin">
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            className="form-control"
            placeholder="First name"
            onChange={(e) => (firstName = e.target.value)}
          />
          <label>First name</label>
        </div>

        <div className="form-floating">
          <input
            className="form-control"
            placeholder="Last name"
            onChange={(e) => (lastName = e.target.value)}
          />
          <label>Last name</label>
        </div>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
            onChange={(e) => (email = e.target.value)}
          />
          <label>Email address</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => (password = e.target.value)}
          />
          <label>Password</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            placeholder="Password Confirm"
            onChange={(e) => (passwordConfirm = e.target.value)}
          />
          <label>Password Confirm</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
};

export default Register;
