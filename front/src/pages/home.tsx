import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/event-grid';
import Event from '../models/event';
import EventCard from '../components/event-card';
import voidevent from '../models/void-event';
import EventDetail from '../components/event-detail';
import User from '../models/user';

type Props = {
    eventlist: Array<Event>
    clickfav: Function
    CurrentUser: User
};

const Home: FunctionComponent<Props> = ({ eventlist, clickfav, CurrentUser }) => {


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
                        {eventlist.map((event: Event) => (

                            <EventCard
                                key={event._id}
                                event={event}
                                CurrentUser={CurrentUser}
                                clickcard={openDetail}
                                clickfav={clickfav}
                            />

                        ))}
                    </ul>
                    <Link to={"/events"} className='mb15'>
                        <div className="cta">
                            <span>See all events</span>
                        </div>
                    </Link>

                </div>


            </div>
            {detailevent.classe !== "no-display" ? (
                <EventDetail
                    event={detailevent}
                    clickcard={openDetail}
                    clickfav={clickfav}
                    CurrentUser={CurrentUser}
                />
            ) : null}
        </div>
    )
}

export default Home;