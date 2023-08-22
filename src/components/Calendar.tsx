import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendar from '@fullcalendar/google-calendar';
import { useMediaQuery } from 'react-responsive';

const Calendar = () => {
  const lg = useMediaQuery({ minWidth: 1024 });
  const md = useMediaQuery({ minWidth: 768 });

  return (
    <FullCalendar
      plugins={[dayGridPlugin, googleCalendar]}
      initialView={lg ? 'dayGridMonth' : md ? 'dayGridWeek' : 'dayGridDay'}
      buttonText={{
        today: 'Today',
      }}
      eventInteractive
      viewClassNames="calendar"
      events={{
        googleCalendarApiKey: import.meta.env.PUBLIC_GOOGLE_API_KEY,
        googleCalendarId: 'c_fa86ad1c3f04173928178d272467fcbba9b5160e0fdb37c5e9a97a5473b47e23@group.calendar.google.com',
      }}
    />
  );
};

export default Calendar;
