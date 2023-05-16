import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import Event from '../models/event';
import voidevent from '../models/void-event';
import EventDetail from '../components/event-detail';
import EventsListInput from '../components/event-list';
import User from '../models/user';

type Props = {
    eventlist: Array<Event>
    CurrentUser: User
};

const Home: FunctionComponent<Props> = ({ eventlist, CurrentUser }) => {


    const [detailevent, setDetailevent] = useState(voidevent);

    const openDetail = (eventfrom: Event) => {
        setDetailevent(eventfrom)
    }



    return (

        <div>
            <div className='home pl50 pr50 flex-col relative flex-center-x'>



                <div className="home__event-list flex-col w60 mlrauto">
                    <h1 className='home__event-list__team__title w100 mt50 relative'>List event :</h1>
                    <ul className='home__event-list__container flex-wrap w100-tab w100 g15 pt15 pb15 flex-around relative'>

                            <EventsListInput
                                EventsIn={eventlist}
                                clickcard={openDetail}
                                CurrentUser={CurrentUser}
                            />

                    </ul>

                </div>


            </div>
            {detailevent !== voidevent ? (
                <EventDetail
                    event={detailevent}
                    clickcard={openDetail}
                    CurrentUser={CurrentUser}
                />
            ) : null}
        </div>
    )
}

export default Home;