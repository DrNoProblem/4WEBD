import React, { FunctionComponent, useState } from 'react';
import EventsListInput from '../components/event-list';
import Event from '../models/event';
import voidevent from '../models/void-event';
import EventDetail from '../components/event-detail';
import User from '../models/user';

type Props = {
    eventlist: Array<Event>
    clickfav: Function
    CurrentUser: User
};

const EventsList: FunctionComponent<Props> = ({ eventlist, clickfav, CurrentUser }) => {


    const [detailevent, setDetailevent] = useState(voidevent);

    const openDetail = (eventfrom: Event) => {
        setDetailevent(eventfrom)
    }

    return (

        <div>
            {/*             <div onClick={() => incr(test)}>test</div> */}
            <EventsListInput
                EventsIn={eventlist}
                DomClass={"all-event"}
                clickcard={openDetail}
                clickfav={clickfav}
                CurrentUser={CurrentUser}
            />

            {detailevent.classe !== "no-display" ? (

                <EventDetail
                    event={detailevent}
                    clickcard={openDetail}
                    clickfav={clickfav}
                    CurrentUser={CurrentUser}
                />

            ) : null}

        </div>
    );
}

export default EventsList;