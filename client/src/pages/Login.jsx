import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { Button, Grid, Input, MantineProvider, Title } from '@mantine/core';
import { Container } from '@mantine/core';
import { Center, Text, BackgroundImage } from "@mantine/core"
import background from "../Assets/teachers-desk.jpg"
import { StyledBreadcrumb } from "../components/StyledBreadcrumb";
import { FormGroup } from "../components/FormGroup";
import { At, Lock } from 'tabler-icons-react';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [loginUser, { error, data }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await loginUser({
        variables: { ...userFormData }
      });

      if (!data.loginUser) {
        throw new Error('something went wrong!');
      }

      const { token, user } = await data.loginUser;
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }


  setUserFormData({
    email: '',
    password: '',
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
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

export default LoginForm;
