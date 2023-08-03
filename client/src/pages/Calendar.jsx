import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useQuery } from '@apollo/client';
import { Center, Container, Grid, Title } from "@mantine/core";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const eventsData = [
    {
        start: moment().toDate(),
        end: moment().toDate(),
        title: "Present Project"
    }
];

const CalendarView = () => {
    return(
        <Container>
            <Grid>
                <Grid.Col span={12}>
                    <Center m="xl">
                        <Title order={1}>Calendar</Title>
                    </Center>
                </Grid.Col>
                <Grid.Col span={12}>
                    <div className="App" style={{padding: '50px', paddingTop: "0", backgroundColor: '#fff', margin: '50px', borderRadius: '10px', marginTop: '0'}}>
                        <Calendar
                            views={["day", "agenda", "work_week", "month"]}
                            selectable
                            localizer={localizer}
                            defaultDate={new Date()}
                            defaultView="month"
                            events={eventsData}
                            style={{ height: "80vh", backgroundColor:'#fff' }}
                        />
                    </div>
                </Grid.Col>
            </Grid>
        </Container>
    
    )
}

export default CalendarView;