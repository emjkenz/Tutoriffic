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


const Assignments = () => {
    return (
        <BackgroundImage src={background} style={{ height: "90vh" }}>
            <div>
                <Sidebar />
                <img className="playButton" src={play} style={{ height: 600, width: 1000, position: 'relative', left: 900, top: 50, }} />
                <h3 className="assText" style={{ position: 'relative', left: 1250, top: 40, }}>Click play to begin todays lesson!</h3>
            </div>
        </BackgroundImage >
    )
}

const Sidebar = () => {
    return (
        <div className={styles.Sidebar}>
            <div className={styles.Sidebar_title}>Menu</div>
            <ul className={styles.Sidebar_nav}>
                <button className={styles.mathButton}>Maths</button>
                <button className={styles.englishButton}>English</button>
                <button className={styles.scienceButton}>Sciences</button>
                <button className={styles.artButton}>Arts</button>

            </ul>
        </div>

    )
}





export default Assignments;