import React, { FunctionComponent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import EventForm from '../components/event-form';
import Event from '../models/event';
import User from '../models/user';
import eventCreate from '../api-request/event/create';
import Cookies from 'js-cookie';
import userUpdateCrea from '../api-request/user/update-crea';

type props = {
    user: User
    clickCrea: Function
}

const EventAdd: FunctionComponent<props> = ({ user, clickCrea }) => {

    const history = useHistory();

    const requestAdd = (newEventPart: any) => {
        const newEvent: Event = { ...newEventPart, favorite: 0, creator: user._id }

        const token = Cookies.get('token')
        eventCreate(newEvent.classe, newEvent.picture, newEvent.color, newEvent.object, newEvent.favorite, user._id, token).then(eventResult => {
            console.log("eventResult")
            console.log(eventResult)
            delete eventResult[0].__v
            console.log('create result[0]')
            console.log(eventResult[0])
            var new_array_crea: Array<string> = user.eventOwner
            new_array_crea.push(eventResult[0]._id)
            userUpdateCrea(new_array_crea, token).then(userResult => {
                clickCrea(user._id, new_array_crea, eventResult[0])
                history.push(`../user-profile/${user._id}`)
            })
        })
    }

    return (
        <div className='event-add p50 flex-row flex-center relative'>

            <div className='event-add__back-button absolute t0 l0 m50'>
                <Link to='/events' className='cta '>
                    <span>
                        back
                    </span>
                </Link>
            </div>

            <EventForm request={requestAdd} />
        </div>
    )
}

export default EventAdd;