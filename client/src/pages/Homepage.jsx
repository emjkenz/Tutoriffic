import { Grid, Title } from "@mantine/core"

const Homepage = () => {
    return(
        <>
            <h1>Student portal</h1>
            <Grid grow>
                <Grid.Col span={4}>
                    <Title order={1} align="center">Homepage</Title>
                </Grid.Col>
            </Grid>
        </>
    )
}
export default Homepage