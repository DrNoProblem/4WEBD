import React, { FunctionComponent, useState, useEffect } from 'react';
import Event from '../../models/event';
import EventCard from '../event-card';
import { Link } from 'react-router-dom';
import './style.css'
import User from '../../models/user';

type Props = {
    EventsIn: Array<Event>
    clickcard: Function
    CurrentUser: User
};

const eventsListInput: FunctionComponent<Props> = ({ EventsIn, clickcard, CurrentUser}) => {



    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [events, setEvents] = useState(EventsIn);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        setEvents(EventsIn);
    }, [EventsIn]);

    return (


        // eslint-disable-next-line no-useless-concat
        <div className={'event-list flex-center-x flex-col pl50 pr50 pt10'} >


            <ul className='event-list__container flex-wrap w100-tab g15 pb50 flex-center'>
                {events.map(event => (
                    <EventCard 
                    key={event._id} 
                    event={event} 
                    clickcard={clickcard}
                    />
                ))}
                {CurrentUser.role === 'orga' ? (
                    
                <li className='card-event__create flex-row flex-center-y relative'>
                    <Link to='/events/add'>
                        <img className='card-event__create__item' src='https://media.discordapp.net/attachments/967347575390863360/1097519818581737542/image.png' alt='event'></img>
                    </Link>
                </li>
                ) : null}
            </ul>


        </div>
    );
}

export default eventsListInput;