import { Container, Grid, Title } from "@mantine/core"

const Modules = () => {
    return(
        <>
            <Container>
                <Grid>
                    <Grid.Col span={12}>
                        <Title order={1}>Modules</Title>
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    )
}

export default Modules