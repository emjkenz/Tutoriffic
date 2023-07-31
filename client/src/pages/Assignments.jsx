import { Container, Grid, Title } from "@mantine/core"

const Assignments = () => {
    return(
        <>
            <Container>
                <Grid>
                    <Grid.Col span={12}>
                        <Title order={1}>Assignments</Title>
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    )
}

export default Assignments