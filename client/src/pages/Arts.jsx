
import { StyledBreadcrumb } from "../components/StyledBreadcrumb";
import { Link } from "react-router-dom"
import styles from './Assignments.module.css'
import background from "../Assets/assignments/assignmentBackground.jpg"
import { Center, Grid, Title, Text, Image, BackgroundImage } from "@mantine/core"





const Arts = () => {
    return (
        <BackgroundImage src={background} style={{ height: "90vh" }}>
            <Sidebar />
            <div>
                <p className="artText" style={{ position: 'relative', left: 1250, top: 40, }}>
                    crayons are tasty
                </p>
            </div>
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