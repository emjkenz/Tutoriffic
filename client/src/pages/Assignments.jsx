import { Center, Grid, Title, Text, Image, BackgroundImage } from "@mantine/core"
import styles from './Assignments.css'
import { Link } from "react-router-dom"
import styled from "styled-components"
import calculator from '../Assets/assignments/calculator2RS.jpg';
import book from '../Assets/assignments/openBookRS.jpg';
import brushes from '../Assets/assignments/paintBrushesRS.jpg';
import play from '../Assets/assignments/playButton2.jpg';
import Logo from "../Assets/Logo.webp"


const Assignments = () => {
    return (
        <div>
            <Sidebar />

            <img className="playButton" src={play} style={{ height: 600, width: 1000, position: 'relative', right: 90, }} />
            <p className="assText" style={{ position: 'relative', right: 450, bottom: 400, }}>Click play to begin todays lesson!</p>
        </>
    )
}


const Sidebar = () => {
    return (
        <div className={styles.Sidebar}>
            <div className={styles.Sidebar_title}>Menu</div>
            <ul className={styles.Sidebar_nav}>
                <li>Maths</li>
                <li>English</li>
                <li>Science</li>
                <li>I'm just trying to steal Tristans damn sidebar RAWR</li>
            </ul>
        </div>
    );
}





export default Assignments;