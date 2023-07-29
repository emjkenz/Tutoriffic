import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import { Center, Text, BackgroundImage } from "@mantine/core"
import background from "../assets/plantRing.jpg"

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <BackgroundImage src={background}
      style={{ height: "90vh" }}
    >
      <div className="container my-1">
        <Link to="/login" style={{ color: "#fff" }}>← Go to Login</Link>

        <h1 style={{ color: "#fff" }}>Signup</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2">
            <label htmlFor="firstName" style={{ color: "#fff" }}>First Name:</label>
            <input
              placeholder="First"
              name="firstName"
              type="firstName"
              id="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="lastName" style={{ color: "#fff" }}>Last Name:</label>
            <input
              placeholder="Last"
              name="lastName"
              type="lastName"
              id="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="email" style={{ color: "#fff" }}>Email:</label>
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="pwd" style={{ color: "#fff" }}>Password:</label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row flex-end">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </BackgroundImage>
  );
}

export default Signup;
