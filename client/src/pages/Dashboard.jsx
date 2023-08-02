import { useQuery } from '@apollo/client';
import { QUERY_LOGEDIN } from '../utils/queries';
import styles from './dashboard.module.css'
import { Link } from "react-router-dom";

const dummyData = {
  name: "John Doe",
  attendance: 89,
  grade: "B-"
}

const Dashboard = () => {
  const { data, loading, error } = useQuery(QUERY_LOGEDIN);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const user = data.loggedInUser;

  return (
    <div className={styles.dashboard}>
      <section className={styles.sidebar}>
        <Sidebar />
      </section>
      <section className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>Dashboard</h1>
          <h2 className={styles.subtitle}>Welcome {user.firstName} {user.lastName}!</h2>
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
  color,
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