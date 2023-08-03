import { Link } from "react-router-dom"
import { StyledBreadcrumb } from "../components/StyledBreadcrumb";
import styles from './Assignments.module.css'
import test from "../Assets/assignments/test2.jpg"
import background from "../Assets/assignments/assignmentBackground.jpg"
import { Center, Grid, Title, Text, Image, BackgroundImage } from "@mantine/core"
import { Container } from '@mantine/core';

const Maths = () => {
    return (
        <BackgroundImage src={background} style={{ minHeight: "90vh" }} pb="xl">
            <Sidebar />
            <Center sx={{ flexDirection: "column", marginLeft: '15%' }}>
                <img className="testImage" src={test} style={{ height: 600, width: 900}} />
                <h3 className="assText">
                    Press play to begin your lesson.
                </h3>
            </Center>

            <Container size="30rem" px={2}>
                <h3>Division and subtraction</h3> <h4>Teacher: Mr Miyagi</h4> In todays lesson we are building upon the skills we learned and practiced in our previous class. Now that you have mastered multiplication and addition, we are excited to help you master the fun skills of division and subtraction!
                When you are ready, click the play button so we can get started!
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
                    <Link to="/Assignments">← Back to assignments</Link>
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

export default Maths;