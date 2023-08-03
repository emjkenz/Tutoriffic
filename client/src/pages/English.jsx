import background from "../Assets/assignments/assignmentBackground.jpg"
import { StyledBreadcrumb } from "../components/StyledBreadcrumb";
import { Link } from "react-router-dom"
import styles from './Assignments.module.css'
import { Center, Grid, Title, Text, Image, BackgroundImage } from "@mantine/core"
import { Container } from '@mantine/core';
import childReading from "../Assets/assignments/childReading2.jpg"


const English = () => {
    return (
        <BackgroundImage src={background} style={{ height: "90vh" }}>
            <Sidebar />
            <div>
                <img className="scienceKid" src={childReading} style={{ height: 600, width: 900, position: 'relative', left: 900, top: 50, }} />
                <h3 className="assText" style={{ position: 'relative', left: 1250, top: 40, }}>
                    Press play to begin your lesson.
                </h3>
            </div>

            <Container size="30rem" px={2} style={{ position: 'relative', left: -500, top: -500, }}>
                <h3>Reading comprehension</h3> <h4>Teacher: Miss Trunchbull</h4> Today we are going to try something a little more challenging, but I know you are more than ready! We have a wonderful story to read to you all, about a little girl who goes on adventures with her loyal dog. You will be able to practice all the skills you have learned while reading along with your classmates, but this adventure is worth the effort!
                If you are ready for the story to begin, click play!
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
                    <Link to="/Maths">← Maths</Link>
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

export default English