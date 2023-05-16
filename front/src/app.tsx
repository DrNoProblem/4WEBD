import React, { FunctionComponent, useEffect, useState, } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import EventEdit from './pages/event-edit';
import EventAdd from './pages/event-add';
import Home from './pages/home';
import Logo from './components/event-grid/index';
import PageNotFound from './pages/not-found';
import UserHeader from './components/user-header';
import openUserSign from './helpers/display-user';
import UserProfile from './pages/user-page';
import Cookies from 'js-cookie';
import logOut from "./api-request/user/log-out"
import voidevent from './models/void-event';
import getEventsList from './api-request/event/get-list'
import getUsersList from './api-request/user/get-list'
import User from './models/user';
import Event from './models/event';
import voiduser from './models/void-user';
import getCurrent from './api-request/user/get-current';
import UserSettings from './pages/user-settings';
import DeleteMeUser from './api-request/user/delete-me';
import userUpdate from './api-request/user/update';

const App: FunctionComponent = () => {


    const [isLog, setIsLog] = useState<string | Boolean>(false);
    const [currentUser, setCurrentUser] = useState<User>(voiduser);
    const [events, setEvents] = useState<Array<Event>>([voidevent]);
    const [users, setUsers] = useState<Array<User>>([voiduser]);

    useEffect(() => {
        getEventsList.then(result => {
            setEvents(result[0])
        })
        getUsersList.then(result => {
            setUsers(result[0])
        })
    }, [])

    const checklog = () => {
        const token = Cookies.get('token')
        if (token) {
            setIsLog(token)
        }
    }

    useEffect(() => {
        const token = Cookies.get('token')
        getCurrent(token).then(result => {
            setCurrentUser(result[0])


        })
    }, [isLog])

    const log_out = () => {
        Cookies.remove('token')
        logOut().then( () => {
            setIsLog(false)
            setCurrentUser(voiduser)
        })

    };

    const clickEventOwner = (user_id: string, new_array_crea: Array<string>, result: Event) => {
        var indexUser = users.findIndex((obj: any) => obj._id === user_id);
        if (indexUser !== -1) {
            users[indexUser] = { ...users[indexUser], eventOwner: new_array_crea };
        }
        setEvents(events)
        setUsers(users)
    }


    const updateUser = (name: string, value: string) => {
        const token = Cookies.get('token')
        if (token) {
            userUpdate(currentUser, token, name, value)
        }
    }
    const DeleteUser = (target: string) => {
        if (target === 'me') {
            const token = Cookies.get('token')
            if (token) {
                DeleteMeUser(token).then(() => {
                    log_out()
                })
            }
        } else {
            console.log('delete user')
        }
    }


    return (
        <Router>
            <div>
                <nav className="header flex-bet flex-row flex-center-x flex-center-y header w100 zi9 active-in">

                    <Link to="/">
                        <Logo sizeblocs={0.5} hover={false} />
                    </Link>
                    {isLog ? (

                        <div className="header__user-part flex-row w20 w60-tab flex-center g25">
                            <h3 className='m0 blue'>
                                <Link to={`/user-profile/${currentUser._id}`} >
                                    {currentUser.name}
                                </Link>
                            </h3>
                            <div className='cta cta-red' onClick={() => log_out()}>
                                <span>
                                    Log Out
                                </span>
                            </div>
                        </div>
                    ) : (

                        <div className="header__user-part flex-row w20 w60-tab flex-bet">
                            <div className='cta' onClick={() => openUserSign("in")}>
                                <span>
                                    Sign In
                                </span>
                            </div>
                            <div className='cta' onClick={() => openUserSign("up")}>
                                <span>
                                    Sign Up
                                </span>
                            </div>
                        </div>
                    )}
                </nav>
                <div className="header__marge"></div>
                <Switch>
                    <Route exact path="/" render={() => <Home eventlist={events}  CurrentUser={currentUser} />} />
                    <Route exact path="/event-settings/:id" render={(props) => <EventEdit {...props} eventList={events} CurrentUser={currentUser} />} />
                    <Route path="/user-profile/:id" render={(props) => <UserProfile {...props} eventList={events} userList={users} CurrentUser={currentUser} />} />
                    <Route exact path="/user-settings/:id" render={(props) => <UserSettings {...props} usercalled={currentUser} requestUpdate={updateUser} requestDelete={DeleteUser} />} />
                    <Route exact path="/events/add" render={() => <EventAdd user={currentUser} clickEventOwner={clickEventOwner} />}></Route>
                    <Route component={PageNotFound}></Route>
                </Switch>

            </div>
            <UserHeader testmaxleroux={checklog} />

        </Router>

    )
}

export default App;