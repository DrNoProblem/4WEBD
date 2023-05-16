import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Event from "../models/event";
import User from '../models/user';
import voiduser from '../models/void-user';
import UserTable from '../components/table-profile/user';
import AdminTable from '../components/table-profile/admin';
import OrgaTable from '../components/table-profile/orga';
import voidevent from '../models/void-event';

interface Props extends RouteComponentProps<{ id: string }> {
    eventList: Array<Event>,
    userList: Array<User>,
    CurrentUser: User
}

const UserProfile: FunctionComponent<Props> = ({ match, eventList, userList, CurrentUser }) => {


    const [user, setUser] = useState<User>(voiduser);
    const [orgaList, setorgaList] = useState<Array<Event>>([voidevent]);


    useEffect(() => {
        userList.forEach((user: User) => {
            if (match.params.id === user._id) {
                setUser(user)
            }
        });
        
        var neworgaList: Array<Event> = [];
        eventList.map((event) => {
            if (user.eventOwner.includes(event._id)) {
                neworgaList.push(event);
            }
        })
        setorgaList(neworgaList)

    }, [match.params.id, eventList, userList, CurrentUser]);





    return (
        <div className='user-page p50 pb0 relative flex-col flex-center'>
            <div className='absolute t5 l5'>
                <Link to={`/user-settings/${user._id}`} className="cta mb35">
                    <span>
                        Account settings
                    </span>
                </Link>
            </div>
            <div className="user-page__container flex-col w75" >
                {(() => {
                    if (user.role === 'user') {
                        return <UserTable events={eventList} CurrentUser={user} />
                    } else if (user.role === 'admin') {
                        return <AdminTable users={userList} events={eventList} />
                    } else if (user.role === 'orga') {
                        return <OrgaTable events={orgaList} CurrentUser={user} />
                    }
                })()
                }
            </div>

        </div>
    );
}

export default UserProfile;