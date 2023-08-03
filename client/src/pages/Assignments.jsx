import { Center, Grid, Title, Text, Image, BackgroundImage } from "@mantine/core"
import styles from './Assignments.module.css'
import { Link } from "react-router-dom"
import styled from "styled-components"
import calculator from '../Assets/assignments/calculator2RS.jpg';
import book from '../Assets/assignments/openBookRS.jpg';
import brushes from '../Assets/assignments/paintBrushesRS.jpg';
import play from '../Assets/assignments/playButton2.jpg';
import Logo from "../Assets/Logo.webp"
import background from "../Assets/assignments/assignmentBackground.jpg"
import { StyledBreadcrumb } from "../components/StyledBreadcrumb";
import { Container } from '@mantine/core';

const Assignments = () => {
    return (
        <BackgroundImage src={background} style={{ minHeight: "90vh" }} pb='xl'>
            <div>
                <Sidebar />
                <Center sx={{ flexDirection: "column", marginLeft: '15%' }}>
                    <img className="playButton" src={play} style={{ height: 600, width: 1000 }} />
                    <h3 className="assText">Click play for this weeks rundown!</h3>
                </Center>
            </div>
            <Container size="30rem" px={2}>
                <h4>Class Leader: Mrs Paul</h4> Welcome back students for another week of learning, fun and discovery! Before you head off to your individual modules, please view the above video so you can gain an understanding of what we are learning about this week, how it builds upon last weeks lessons, and to get a sneak peak at some of the most fun activities we have planned for you!
            </Container>
        </BackgroundImage >
    )
}

const Sidebar = () => {
    return (
        <div className={styles.Sidebar}>
            <div className={styles.Sidebar_title}>Menu</div>
            <ul className={styles.Sidebar_nav}>
                <StyledBreadcrumb>
                    <Link to="/Maths">← Maths</Link>
                </StyledBreadcrumb>
                <StyledBreadcrumb>
                    <Link to="/English">← English</Link>
                </StyledBreadcrumb>
                <StyledBreadcrumb>
                    <Link to="/Sciences">← Sciences</Link>
                </StyledBreadcrumb>
                <StyledBreadcrumb>
                    <Link to="/Arts">← Arts</Link>
                </StyledBreadcrumb>
            </ul>
        </div>

    )
}





export default Assignments;