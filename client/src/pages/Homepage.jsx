import { Grid, Title } from "@mantine/core"

const Homepage = () => {
    return(
        <>
            <Grid grow>
                <Grid.Col span={4}>
                    <Title order={1} align="center">Homepage</Title>
                </Grid.Col>
            </Grid>
        </>
    )
}
export default Homepage