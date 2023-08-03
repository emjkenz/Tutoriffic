import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { formatDueDate } from '../utils/dateFormatter';
import { QUERY_QUIZ } from '../utils/queries'
import { useParams } from 'react-router-dom';
import { Grid, Radio, Container, Button, Center, BackgroundImage, Text, Title } from '@mantine/core';
import QuizImage from '../Assets/quiz.jpg';
import { StyledBreadcrumb } from '../components/StyledBreadcrumb';
import { Link } from 'react-router-dom';


const dummyQuiz = {
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
    ]
};

const Quiz = () => {

    const { id } = useParams();

    const [quizAnswers, setQuizAnswers] = useState({});

    const { loading, data, error } = useQuery(QUERY_QUIZ, {
        variables: { quizId: id },
    });

    const quiz = data?.quiz || dummyQuiz

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }

    const handleChange = (question, answer) => {
        setQuizAnswers({ ...quizAnswers, [question]: answer });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(quizAnswers);
    };

    return (
        <Container>
            <Grid>
                <Grid.Col span={12}>
                    <div key={quiz._id}>
                        <BackgroundImage src={QuizImage} my="md" sx={{ borderRadius: "10px", color: '#fff' }}>
                            <Center>
                                <Title order={1} p='xl'>{quiz.title}</Title>
                            </Center>
                        </BackgroundImage>

                        <h2>{quiz.description}</h2>
                        {/* Format date due in x days */}
                        <p>Due: {formatDueDate(quiz.date)}</p>
                        {/* Quiz Form */}
                        <form onSubmit={handleSubmit}>
                            {quiz.questions.map((question, index) => (
                                <div key={question._id}>
                                    <h3>{question.question}</h3>
                                    <Radio.Group
                                        onChange={(e) => handleChange(index, e)}
                                        value={quizAnswers[index]}
                                    >
                                        {question.answers.map((answer) => (
                                            <Radio
                                                checked={quizAnswers[index] === answer}
                                                label={answer.toUpperCase()}
                                                value={answer}
                                                py={2}
                                            />
                                        ))}
                                    </Radio.Group>
                                </div>
                            ))}
                            <Button my="md" type="submit">Submit</Button>
                        </form>
                        <StyledBreadcrumb>
                            <Link to="/Dashboard">← Return to dashboard</Link>
                        </StyledBreadcrumb>
                    </div>
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default Quiz;