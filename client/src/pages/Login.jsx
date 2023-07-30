import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import { Button, Grid, Input, MantineProvider, Title } from '@mantine/core';
import { Container } from '@mantine/core';
import { Center, Text, BackgroundImage } from "@mantine/core"
import background from "../Assets/teachers-desk.jpg"
import { StyledBreadcrumb } from "../components/StyledBreadcrumb";
import { FormGroup } from "../components/FormGroup";
import { At, Lock } from 'tabler-icons-react';

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

      <StyledBreadcrumb>
        <Link to="/signup">← Go to Signup</Link>
      </StyledBreadcrumb>

      <Container>
        <Grid grow>
          <Grid.Col span={12}>
            <Center p="md">
              <Title order={1} color="#fff">Login</Title>
            </Center>
          </Grid.Col>
          <Grid.Col span={12}>
            <Center p="md">
              <form onSubmit={handleFormSubmit}>
                <FormGroup>
                  <label htmlFor="email" style={{ color: "#fff" }}>Email address:</label>
                  <Input
                    placeholder="youremail@test.com"
                    icon={<At />}
                    name="email"
                    type="email"
                    id="email"
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="pwd" style={{ color: "#fff" }}>Password:</label>
                  <Input
                    placeholder="******"
                    icon={<Lock />}
                    name="password"
                    type="password"
                    id="pwd"
                    onChange={handleChange}
                  />
                </FormGroup>
                {error ? (
                  <div>
                    <p className="error-text" style={{ color: "#fff" }}>The provided credentials are incorrect</p>
                  </div>
                ) : null}
                <div className="flex-row flex-end">
                  <Button type="submit">Submit</Button>
                </div>
              </form>
            </Center>
          </Grid.Col>
        </Grid>
      </Container>
    </BackgroundImage>
  );
}

export default Login;
