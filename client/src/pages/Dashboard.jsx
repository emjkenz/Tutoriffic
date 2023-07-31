import { Center, Container, Grid, Title, Text } from '@mantine/core';
import styles from './dashboard.module.css'
import { Link } from "react-router-dom";

const dummyData = {
  name: "John Doe",
  attendance: 100,
  grade: "B-",
  modules: [
    {
      name: "Maths",
      grade: "A",
    },
    {
      name: "English",
      grade: "B",
    },
    {
      name: "Science",
      grade: "C",
    },
  ],
}

const Dashboard = () => {
  return (
    <Container>
      <Grid>
        <Grid.Col span={12}>
          <Center p="md">
            <Title order={1}>Dashboard</Title>
          </Center>
          <Title py="md" order={2}>Welcome <Text variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 45 }} sx={{ display: "inline-block" }}>{dummyData.name}!</Text></Title>
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
              description={
                dummyData.modules.map((module) =>
                  <div>
                    <p><strong>{module.name}</strong>:{module.grade}</p>
                  </div>
                )
              }
            />
          </div>
        </Grid.Col>
      </Grid>
    </Container>
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