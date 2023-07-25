import React from 'react'
import styles from './dashboard.module.css'
import { Outlet, Link } from "react-router-dom";

const dummyData = {
  name: "John Doe",
  attendance: 100,
  grade: "B-"
}

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <section className={styles.sidebar}>
        <Sidebar />
      </section>
      <section className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>Dashboard</h1>
          <h2 className={styles.subtitle}>Welcome {dummyData.name}!</h2>
          <div className={styles.items}>
            <Item
              title={"Attendance"}
              description={dummyData.attendance + "/100%"}
            />

            <Item
              title={"Modules"}
              description={
                <ul>
                  <li>Maths</li>
                  <li>English</li>
                  <li>Science</li>
                </ul>
              }
            />

            <Item
              title={"Assigments"}
              description={"you have 3 assigments for maths due on the 2nd of august"}
            />
          </div>
        </div>
      </section>
    </div>
    )
}

const Item = ({
  title,
  description,
}) => {
  return (
    <article className={styles.item}>
      <h3 className={styles.item_title}>{title}</h3>
      <p className={styles.item_description}>{description}</p>
    </article>
  )
}

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_title}>Menu</div>
      <ul className={styles.sidebar_nav}>
        <li>Maths</li>
        <li>English</li>
        <li>Science</li>
      </ul>
    </div>
  );
}

export default Dashboard