import { useQuery } from '@apollo/client';
import { QUERY_LOGEDIN, QUERY_ALL_QUIZZES } from '../utils/queries';
import styles from './dashboard.module.css'
import { useEffect, useState } from 'react';
import { Container, Grid, Title, Center, Text, Box, Divider } from '@mantine/core';
import { Link, NavLink } from 'react-router-dom';
import QuizTile from '../components/QuizTile';
import { Ce, Divide } from 'tabler-icons-react';
import styled from 'styled-components';
import AssignmentTile from '../components/AssignmentTile';
import Maths from '../Assets/assignments/calculator.jpg';
import English from '../Assets/assignments/childReading.jpg';
import Science from '../Assets/assignments/scienceKid.jpg';
import Arts from '../Assets/assignments/artKid.jpg';

const QuizContainer = styled(Box)`
  /* border: 1px solid #ccc; */
`

const dummyData = {
  name: "John Doe",
  attendance: 89,
  grade: "B-"
}

const dummyQuiz = [
  {
    id: 1,
    title: "Dummy Quiz",
    description: "Share your knowledge with the world!",
    date: "2023-08-05T00:00:00.000Z",
    questions: [
      {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
      },
      {
        question: "What is the capital of Spain?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
      },
      {
        question: "What is the capital of Germany?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
      },
    ],
  },
  {
    id: 2,
    title: "Dummy Quiz 2",
    description: "Share your knowledge with the world!",
    date: "2023-08-05T00:00:00.000Z",
    questions: [
      {
        question: "What is the capital of Spain?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
      },
      {
        question: "What is the capital of Germany?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
      },
    ],
  }
];

const Dashboard = () => {
  const user = useQuery(QUERY_LOGEDIN);
  const quizzes = useQuery(QUERY_ALL_QUIZZES);

  const myUser = user?.data?.loggedInUser;
  const myQuizzes = /*quizzes.data.quizzes*/dummyQuiz;
  console.log(myQuizzes);
  return (
    <Container>
      <Grid>
        <Grid.Col span={12}>
          <Title order={1} py="md">Dashboard</Title>
          <Title order={2} mt="md">Welcome <Text variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 45 }} sx={{ display: 'inline-block' }}>{myUser?.firstName} {myUser?.lastName}!</Text></Title>
        </Grid.Col>
        <Grid.Col span={12}>
          <Divider my="sm" variant='solid' />
        </Grid.Col>
        <Grid.Col span={12}>
          <Title order={3}>Quizes</Title>
          <QuizContainer>
            <Center>
              {myQuizzes?.map((quiz) => (
                <QuizTile key={quiz.id} quiz={quiz} />
              ))}
            </Center>
          </QuizContainer>
        </Grid.Col>
        <Grid.Col span={12} mb="md">
          <Divider my="sm" variant='solid' />
        </Grid.Col>
        <Grid.Col span={12} mb="md">
          <Title order={3}>Assignments</Title>
        </Grid.Col>
        <Grid.Col span={12} mb="md">
          <Center>
            <AssignmentTile 
              title="Maths"
              description="Learn Maths with our interactive quizzes!"
              link="../Maths"
              background={Maths}
            />
            <AssignmentTile 
              title="Arts"
              description="Release your inner artist!"
              link="../Arts"
              background={Arts}
            />
            <AssignmentTile 
              title="Science"
              description="Learn about the world around you!"
              link="../Science"
              background={Science}
            />
            <AssignmentTile 
              title="English"
              description="Improve your English skills!"
              link="../English"
              background={English}
            />
          </Center>
        </Grid.Col>
        <Grid.Col span={12} mb="md">
          <Divider my="sm" variant='solid' />
        </Grid.Col>
      </Grid>
    </Container>

  )
}

const Item = ({
  title,
  description,
  color,
}) => {
  return (
    <article className={styles.item}>
      <h3 className={styles.item_title}>{title}</h3>
      <p className={styles.item_description}>{description}</p>
    </article>
  )
}

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_title}>Menu</div>
      <ul className={styles.sidebar_nav}>
        <li>Maths</li>
        <li>English</li>
        <li>Science</li>
      </ul>
    </div>
  );
}

export default Dashboard