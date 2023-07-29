import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import { MantineProvider } from '@mantine/core';
import { Container } from '@mantine/core';
import { Center, Text, BackgroundImage } from "@mantine/core"
import background from "../assets/plantRing.jpg"


function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
        <Link to="/signup" style={{ color: "#fff" }}>← Go to Signup</Link>

        <Container>
          <h2 style={{ color: "#fff" }}>Login</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="flex-row space-between my-2">
              <label htmlFor="email" style={{ color: "#fff" }}>Email address:</label>
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
            {error ? (
              <div>
                <p className="error-text" style={{ color: "#fff" }}>The provided credentials are incorrect</p>
              </div>
            ) : null}
            <div className="flex-row flex-end">
              <button type="submit">Submit</button>
            </div>
          </form>
        </Container>
      </div>
    </BackgroundImage>
  );
}

export default Login;
