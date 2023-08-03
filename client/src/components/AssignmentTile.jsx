import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BlueOcean } from '../styles/gradiants';
import { NavLink } from '@mantine/core';
import { ArrowRight, QuestionMark } from 'tabler-icons-react';
import { formatDueDate } from '../utils/dateFormatter';

const Tile = styled.div`
    background: url(${props => props.background});
    background-size: cover;
    width: 25%;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    margin: 1rem;
    color: #fff;
    a {
        text-decoration: none;
    }
`

const AssignmentTile = ({
    title,
    description,
    background,
    link,
}) => {
    return (
        <Tile background={background} >
            <div className="title">
                <h2>{title}</h2>
            </div>
            <div className="description">
                <p>{description}</p>
            </div>

            <Link to={`/quiz/${link}`}>
                <NavLink
                    label="View Assignment"
                    rightSection={<ArrowRight size={18} />}
                    variant="filled"
                    active
                />
            </Link>
        </Tile>
    );
};

export default AssignmentTile;