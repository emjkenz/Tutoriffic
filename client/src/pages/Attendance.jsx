import { Container, Grid, Title } from "@mantine/core"

const Attendance = () => {
    return(
        <>
            <Container>
                <Grid>
                    <Grid.Col span={12}>
                        <Title order={1}>Attendance</Title>
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    )
}

export default Attendance;