import React from "react";

import FormInput from "../form-input/form-input.component";

import CustomButton from '../custom-buttom/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';

import "./sign-in.style.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
    console.log(this.state);
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label = 'email'
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label ='password'
            required
          />
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton onClick={signInWithGoogle}>SIGN IN with GOOGLE</CustomButton>

        </form>
      </div>
    );
  }
}

export default SignIn;