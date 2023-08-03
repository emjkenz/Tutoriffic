
import { StyledBreadcrumb } from "../components/StyledBreadcrumb";
import { Link } from "react-router-dom"
import styles from './Assignments.module.css'
import background from "../Assets/assignments/assignmentBackground.jpg"
import { Center, Grid, Title, Text, Image, BackgroundImage } from "@mantine/core"
import { Container } from '@mantine/core';
import artKid2 from "../Assets/assignments/artKid2.jpg"



const Arts = () => {
    return (
        <BackgroundImage src={background} style={{ height: "90vh" }}>
            <Sidebar />
            <div>
                <img className="artClass" src={artKid2} style={{ height: 700, width: 900, position: 'relative', left: 900, top: 50, }} />
                <h3 className="assText" style={{ position: 'relative', left: 1250, top: 40, }}>
                    Press play to begin your lesson.
                </h3>
            </div>

            <Container size="30rem" px={2} style={{ position: 'relative', left: -500, top: -500, }}>
                <h3>Free painting</h3> <h4>Teacher: Mrs Doubtfire</h4> In todays lesson we are unleashing our inner creativity and passions! First you will be shown an introductory video of other artists your age and what they have created, to hopefully inspire you, and then you will be free to create your own art!
                We cannot wait to see the master pieces you will produce!
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
                    <Link to="/Sciences">← Sciences</Link>
                </StyledBreadcrumb>
            </ul>
        </div>

    )

}




export default Arts