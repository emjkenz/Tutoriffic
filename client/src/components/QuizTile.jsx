import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BlueOcean } from '../styles/gradiants';
import { NavLink } from '@mantine/core';
import { ArrowRight, QuestionMark } from 'tabler-icons-react';

const Tile = styled.div`
    ${BlueOcean}
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    margin: 1rem;
    color: #fff;
    a {
        text-decoration: none;
    }
`

const QuizTile = ({ quiz }) => {
    return (
        <Tile>
            <div className="title">
                <h2>{quiz.title}</h2>
            </div>
            <div className="description">
                <p>{quiz.description}</p>
            </div>

            <Link to={`/quiz/${quiz.id}`}>
                <NavLink
                    label="Start Quiz"
                    rightSection={<ArrowRight size={18} />}
                    variant="filled"
                    active
                />
            </Link>
        </Tile>
    );
};

export default QuizTile;