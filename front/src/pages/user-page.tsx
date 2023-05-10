import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import EventsListInput from '../components/event-list';
import EventDetail from '../components/event-detail';
import Event from "../models/event";
import voidevent from '../models/void-event';
import User from '../models/user';
import voiduser from '../models/void-user';
import getCurrent from '../api-request/user/get-current';
import Cookies from 'js-cookie';


interface Props extends RouteComponentProps<{ id: string }> {
    eventList: Array<Event>,
    userList: Array<User>,
    CurrentUser: User
}

const UserProfile: FunctionComponent<Props> = ({ match, eventList, userList, CurrentUser }) => {


    const [user, setUser] = useState<User>(voiduser);
    const [detailevent, setDetailevent] = useState(voidevent);
    const [eventFaved, setEventFaved] = useState([voidevent]);
    const [eventOwner, setEventOwner] = useState([voidevent]);
    const [OwnPage, setOwnPage] = useState(false);

    const openDetail = (eventfrom: Event) => {
        setDetailevent(eventfrom)
    }

    useEffect(() => {
        userList.forEach((user: User) => {
            if (match.params.id === user._id) {
                setUser(user)

                const newEventFaved: any = []
                eventList.forEach((event: Event) => {
                    if (user.eventFavorite.includes(event._id)) {
                        newEventFaved.push(event)
                    }
                })
                const newEventOwner: any = []
                eventList.forEach((event: Event) => {
                    if (user.eventOwner.includes(event._id)) {
                        newEventOwner.push(event)
                    }
                })

                setEventFaved(newEventFaved)
                setEventOwner(newEventOwner)
            }
        })

        const token = Cookies.get('token')
        getCurrent(token).then(result => {
            if (result[0]._id === match.params.id) {
                setOwnPage(true)
            }else {
                setOwnPage(false)
            }
        })

    }, [match.params.id, eventList, userList, CurrentUser]);


    const switchUserList = (type: string) => {
        var domElement = document.querySelector('.user-page__container')!
        if (type === 'fav') {
            if (!domElement!.classList.value.includes(type)) {
                domElement.classList.remove('crea');
                domElement.classList.add('fav');
            }
        }

        if (type === 'crea') {
            if (!domElement.classList.value.includes(type)) {
                domElement.classList.add('crea');
                domElement.classList.remove('fav');
            }
        }
    }



    return (
        <div className='user-page flex-start-x flex-center-y flex-row p50 pb0 relative flex-col-tab'>
            <div className="user-page__container flex-col w75 w100-tab flex-start-x flex-start-y crea" >


                <div className='user-page__container__titles-content zi2 flex-row w100 flex-around h10 relative flex-col-tab'>
                    <div className='flex-row'>

                        <h2 className='user-page__container__titles-content__title__crea upper p25 m0 fs18-tab' onClick={() => switchUserList('crea')}><span>Events creations</span></h2>
                        <h2 className='user-page__container__titles-content__title__fav upper p25 m0 fs18-tab' onClick={() => switchUserList('fav')}><span>Events liked</span></h2>
                    </div>

                    <div className='relative mtbauto'>
                        <Link to='/events' className="cta mb35">
                            <span>
                                See all events
                            </span>
                        </Link>
                    </div>
                </div>


            </div>

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

export default UserProfile;