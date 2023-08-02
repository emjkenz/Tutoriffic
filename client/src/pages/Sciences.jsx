import background from "../Assets/assignments/assignmentBackground.jpg"
import { StyledBreadcrumb } from "../components/StyledBreadcrumb";
import { Link } from "react-router-dom"
import styles from './Assignments.module.css'
import { Center, Grid, Title, Text, Image, BackgroundImage } from "@mantine/core"
import { Container } from '@mantine/core';
import scienceKid2 from "../Assets/assignments/scienceKid2.jpg"

const Sciences = () => {
    return (
        <BackgroundImage src={background} style={{ height: "90vh" }}>
            <Sidebar />
            <div>
                <img className="scienceKid" src={scienceKid2} style={{ height: 600, width: 900, position: 'relative', left: 900, top: 50, }} />
                <h3 className="assText" style={{ position: 'relative', left: 1250, top: 40, }}>
                    Press play to begin your lesson.
                </h3>
            </div>

            <Container size="30rem" px={2} style={{ position: 'relative', left: -500, top: -500, }}>
                <h3>Electricity and magnetism!</h3> <h4>Teacher: Tony Stark</h4> In todays exciting lesson, we are going to start learning about one of the wonders of the modern world! You use it every day! So does your family, even your pets! If you guessed electricity, then you would be correct!
                Where does it come from? How does it work? Click the play button so we can find out!
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
                    <Link to="/English">← English</Link>
                </StyledBreadcrumb>
                <StyledBreadcrumb>
                    <Link to="/Arts">← Arts</Link>
                </StyledBreadcrumb>
            </ul>
        </div>

    )

}

export default Sciences