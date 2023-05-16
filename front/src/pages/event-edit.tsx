import React, { FunctionComponent, useEffect, useState } from 'react';
import Event from '../models/event';
import User from '../models/user';
import { Link, RouteComponentProps, useHistory } from 'react-router-dom';
import EventForm from '../components/event-form';
import Cookies from 'js-cookie';
import voidevent from '../models/void-event';
import eventUpdate from '../api-request/event/update';

interface Props extends RouteComponentProps<{ id: string }> {
    CurrentUser: User
    eventList: Array<Event>,
}

const EventEdit: FunctionComponent<Props> = ({ match, CurrentUser, eventList }) => {

    
    const history = useHistory();
    const [event, setEvent] = useState<Event>(voidevent);

    useEffect(() => {
        eventList.forEach((event: Event) => {
            if (match.params.id === event._id) {
                setEvent(event)
            }
        });

    }, [match.params.id, eventList, CurrentUser]);

    const requestEdit = (newEventPart: any) => {
        const token = Cookies.get('token')
        if (token) {
            eventUpdate(newEventPart.id, newEventPart.name, newEventPart.picture, newEventPart.maxPlace, newEventPart.locality, newEventPart.cost, newEventPart.usersReserve, token).then(() => {
                history.push(`../user-profile/${CurrentUser._id}`)
            })
        }
    }

    return (
        <div className='event-add p50 flex-row flex-center relative'>

            <div className='event-add__back-button absolute t0 l0 m50'>
                <Link to={'/user-profile/' + CurrentUser._id} className='cta '>
                    <span>
                        back
                    </span>
                </Link>
            </div>

            <EventForm request={() => requestEdit} event={event} />
        </div>
    )
}


export default EventEdit;