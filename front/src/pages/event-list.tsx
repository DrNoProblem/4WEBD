import React, { FunctionComponent, useState } from 'react';
import EventsListInput from '../components/event-list';
import Event from '../models/event';
import voidevent from '../models/void-event';
import EventDetail from '../components/event-detail';
import User from '../models/user';

type Props = {
    eventlist: Array<Event>
    CurrentUser: User
};

const EventsList: FunctionComponent<Props> = ({ eventlist, CurrentUser }) => {


    const [detailevent, setDetailevent] = useState(voidevent);

    const openDetail = (eventfrom: Event) => {
        setDetailevent(eventfrom)
    }

    return (

        <div>
            <EventsListInput
                EventsIn={eventlist}
                clickcard={openDetail}
            />

            {detailevent.classe !== "no-display" ? (

                <EventDetail
                    event={detailevent}
                    clickcard={openDetail}
                    CurrentUser={CurrentUser}
                />

            ) : null}

        </div>
    );
}

export default EventsList;