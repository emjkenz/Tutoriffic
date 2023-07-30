import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import { Center, Container, BackgroundImage, Grid, Title, Input, Button } from "@mantine/core"
import background from "../Assets/teachers-desk.jpg"
import styled from "styled-components"
import { At, CursorText, Lock } from 'tabler-icons-react';
import { StyledBreadcrumb } from "../components/StyledBreadcrumb";
import { FormGroup } from "../components/FormGroup";

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
                    type="firstName"
                    id="firstName"
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="lastName" style={{ color: "#fff" }}>Last Name:</label>
                  <Input
                    placeholder="Last"
                    icon={<CursorText size={16} />}
                    name="lastName"
                    type="lastName"
                    id="lastName"
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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

export default Signup;
