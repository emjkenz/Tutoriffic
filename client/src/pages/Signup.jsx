import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { CREATE_USER } from '../utils/mutations'
import { Center, Container, BackgroundImage, Grid, Title, Input, Button } from "@mantine/core"
import background from "../Assets/teachers-desk.jpg"
import styled from "styled-components"
import { At, CursorText, Lock } from 'tabler-icons-react';
import { StyledBreadcrumb } from "../components/StyledBreadcrumb";
import { FormGroup } from "../components/FormGroup";

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [createUser, { error, data }] = useMutation(CREATE_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
    console.log(userFormData);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("entered form submit");
    console.log(userFormData);

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await createUser({
        variables: { ...userFormData }
      });
      if (!data.createUser) {
        throw new Error('something went wrong!');
      }

      const { token, user } = await data.createUser;
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  };
  return (
    <BackgroundImage src={background}
      style={{ height: "90vh" }}
    >
      <StyledBreadcrumb color={"red"}>
        <Link to="/login">← Go to Login</Link>
      </StyledBreadcrumb>

      <Container>
        <Grid grow>
          <Grid.Col span={12}>
            <Center p="md">
              <Title order={1} color="#fff">Signup</Title>
            </Center>
          </Grid.Col>
          <Grid.Col span={12}>
            <Center p="md">
              <form onSubmit={handleFormSubmit}>
                <FormGroup>
                  <label htmlFor="firstName" style={{ color: "#fff" }}>First Name:</label>
                  <Input
                    placeholder="First"
                    icon={<CursorText size={16} />}
                    name="firstName"
                    type="text"
                    id="firstName"
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="lastName" style={{ color: "#fff" }}>Last Name:</label>
                  <Input
                    placeholder="Last"
                    icon={<CursorText size={16} />}
                    name="lastName"
                    type="text"
                    id="lastName"
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="email" style={{ color: "#fff" }}>Email:</label>
                  <Input
                    placeholder="youremail@test.com"
                    icon={<At size={16} />}
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
                    icon={<Lock size={16} />}
                    name="password"
                    type="password"
                    id="pwd"
                    onChange={handleInputChange}
                  />
                </FormGroup>
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

export default SignupForm;
