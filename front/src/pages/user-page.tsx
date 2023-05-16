import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Event from "../models/event";
import User from '../models/user';
import voiduser from '../models/void-user';
import UserTable from '../components/table-profile/user';
import AdminTable from '../components/table-profile/admin';
import OrgaTable from '../components/table-profile/orga';

interface Props extends RouteComponentProps<{ id: string }> {
    eventList: Array<Event>,
    userList: Array<User>,
    CurrentUser: User
}

const UserProfile: FunctionComponent<Props> = ({ match, eventList, userList, CurrentUser }) => {


    const [user, setUser] = useState<User>(voiduser);


    useEffect(() => {
        userList.forEach((user: User) => {
            if (match.params.id === user._id) {
                setUser(user)
            }
        });

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
                        return <UserTable events={eventList} CurrentUser={user}/>
                    } else if (user.role === 'admin') {
                        return <AdminTable users={userList} events={eventList} />
                    } else if (user.role === 'orga') {
                        return <OrgaTable events={eventList}  CurrentUser={user}/>
                    }
                })()
                }
            </div>

        </div>
    );
}

export default UserProfile;