import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import icalPlugin from '@fullcalendar/icalendar';
import { useMediaQuery } from 'react-responsive';

// Replace with https://calendar.google.com/calendar/ical/c_fa86ad1c3f04173928178d272467fcbba9b5160e0fdb37c5e9a97a5473b47e23@group.calendar.google.com/public/basic.ics
const url = 'https://calendar.google.com/calendar/ical/c_fa86ad1c3f04173928178d272467fcbba9b5160e0fdb37c5e9a97a5473b47e23%40group.calendar.google.com/private-f41abf541fef4c7aa4c051bfa00fd5ea/basic.ics';

const Calendar = () => {
  const lg = useMediaQuery({ minWidth: 1024 });
  const md = useMediaQuery({ minWidth: 768 });

  return (
    <FullCalendar
      plugins={[dayGridPlugin, icalPlugin]}
      initialView={lg ? 'dayGridMonth' : md ? 'dayGridWeek' : 'dayGridDay'}
      buttonText={{
        today: 'Today',
      }}
      eventInteractive
      viewClassNames="calendar"
      events={{
        format: 'ics',
        url,
      }}
    />
  );
};

export default Calendar;
