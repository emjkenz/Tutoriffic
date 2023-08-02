import { Link } from "react-router-dom"
import { StyledBreadcrumb } from "../components/StyledBreadcrumb";
import styles from './Assignments.module.css'
import test from "../Assets/assignments/test2.jpg"
import background from "../Assets/assignments/assignmentBackground.jpg"
import { Center, Grid, Title, Text, Image, BackgroundImage } from "@mantine/core"
import { Container } from '@mantine/core';

const Maths = () => {
    return (
        <BackgroundImage src={background} style={{ height: "90vh" }}>
            <Sidebar />
            <div>
                <img className="testImage" src={test} style={{ height: 600, width: 900, position: 'relative', left: 900, top: 50, }} />
                <h3 className="assText" style={{ position: 'relative', left: 1250, top: 40, }}>
                    Press play to begin your lesson.
                </h3>
            </div>

            <Container size="30rem" px={2} style={{ position: 'relative', left: -500, top: -500, }}>
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