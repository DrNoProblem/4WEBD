import React, { FunctionComponent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import EventForm from '../components/event-form';
import Event from '../models/event';
import User from '../models/user';
import eventCreate from '../api-request/event/create';
import Cookies from 'js-cookie';
import userUpdateOwner from '../api-request/user/update-owner';
import voidevent from '../models/void-event';

type props = {
    user: User
    clickEventOwner: Function
}

const EventAdd: FunctionComponent<props> = ({ user, clickEventOwner }) => {

    const history = useHistory();

    const requestAdd = (newEventPart: any) => {
        const newEvent: any = { ...newEventPart }

        console.log(newEvent)
        const token = Cookies.get('token')
        if (token) {
            eventCreate(newEvent.name, newEvent.picture, newEvent.maxPlace, newEvent.locality, newEvent.cost, token).then(eventResult => {
                var new_array_crea: Array<string> = user.eventOwner
                new_array_crea.push(eventResult[0]._id)
                userUpdateOwner(new_array_crea, token).then(() => {
                    clickEventOwner(user._id, new_array_crea, eventResult[0])
                    history.push(`../user-profile/${user._id}`)
                })
            })
        }
    }

    return (
        <div className='event-add p50 flex-row flex-center relative'>

            <div className='event-add__back-button absolute t0 l0 m50'>
                <Link to='/' className='cta '>
                    <span>
                        back
                    </span>
                </Link>
            </div>

            <EventForm request={requestAdd} event={voidevent} />
        </div>
    )
}

export default EventAdd;