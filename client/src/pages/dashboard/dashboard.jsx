import React from 'react'
import styles from './dashboard.module.css'
import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <section>
      <h5 className={styles.classname}>Welcome</h5>
      <h2 className={styles.classname}>--Student Name--</h2>

          <article className={styles.attendance}>
            <h5 className={styles.attendance_text}>Attendance</h5>
            <p>80/100%</p>
          </article>

          <article className={styles.modules}>
            <h5 className={styles.modules_text}>Modules</h5>
            <ul>maths</ul>
            <ul>english</ul>
            <ul>science</ul>
          </article>

          <article className={styles.assigments}>
            <h5 className={styles.assigments_text}>Assigments</h5>
          <p>you have 3 assigments for maths due on the 2nd of august</p>
          </article>

    </section>
    )
}

export default Dashboard