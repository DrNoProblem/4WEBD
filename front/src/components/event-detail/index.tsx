import React, { FunctionComponent, useState } from "react";
import Event from "../../models/event";

import "./style.css"
import voidevent from "../../models/void-event";
import User from "../../models/user";
import { Link } from "react-router-dom";
import voiduser from "../../models/void-user";
import openUserSign from "../../helpers/display-user";
import Cookies from "js-cookie";
import eventUpdate from "../../api-request/event/update";
import userUpdateReserve from "../../api-request/user/update-fav";

type Props = {
    event: Event
    clickcard: Function
    CurrentUser: User
};

const EventDetail: FunctionComponent<Props> = ({ event, clickcard, CurrentUser }) => {


    console.log(CurrentUser)
    var [user, setUser] = useState(CurrentUser);
    var [reverseIsOK, setreverseIsOK] = useState(false);


    const handleSelectEvent = () => {
        clickcard(voidevent);
    };

    const reservationEvent = () => {
        const token = Cookies.get('token')
        if (token) {
            const maxId: number = event.usersReserve.length === 0 ? 0 : event.usersReserve.reduce((acc, pair: any) => Math.max(acc, pair[0]), 0);
            eventUpdate(event._id, event.name, event.picture, event.maxPlace, event.dispoPlace, [`${maxId + 1}`, event.locality, event.cost, CurrentUser._id], token).then(result => {
                console.log(result);
                userUpdateReserve([maxId + 1, event._id], token).then((caca) => {
                    console.log(caca);
                })
            })
        }
    };


    return (
        <div className='detail-event p50 flex-row flex-center flex-col-tab flex-start-x'>
            <div className='detail-event__back-button absolute t0 l0 m50'>
                <div className='cta' onClick={handleSelectEvent}>
                    <span>
                        back
                    </span>
                </div>
            </div>


            {event ? (
                <div className='detail-event__container flex-col w80 flex-center mt50 w95-tab t0'>

                    <div>
                        <div className="flex-row flex-center g15">
                            <img src={event.picture} alt="" />
                            <div className="flex-col g15">
                                <h2>{event.name}</h2>
                                <p>{event.date}</p>
                                <p>{event.locality}</p>
                            </div>
                        </div>
                        <div className="flex-col mt25">
                            <p>{event.cost} $</p>
                            {event.dispoPlace !== 0 ? (<p>{event.dispoPlace} spots left</p>) : null}
                        </div>
                    </div>
                    {!reverseIsOK ? (

                        <div>
                            <div>
                                <div className="flex-row flex-center g15">
                                    {(CurrentUser.payement.length !== 0) ? (
                                        <div>
                                            <p className="blue flex-center"><i className="material-icons blue mr15">done</i>Payement informations are valids</p>
                                        </div>
                                    ) : (
                                        <div>
                                            <p className="red flex-center"><i className="material-icons red mr15">close</i>Payement informations are invalids</p>
                                            <p><Link className="blue" to={`/user-settings/${CurrentUser._id}`}>clic here</Link> to update your payement informations</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {CurrentUser !== voiduser ? (
                                <div>
                                    {event.dispoPlace !== 0 ? (
                                        <div>
                                            {(CurrentUser.payement.length !== 0) ? (
                                                <div className="cta" onClick={() => reservationEvent()}>
                                                    <span>confirm reservation</span>
                                                </div>
                                            ) : null}
                                        </div>
                                    ) : (
                                        <div>
                                            <p className="red">No spots left</p>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div>
                                    <p><b className="blue capit" onClick={() => openUserSign('in')}>sign in</b> or <b className="blue capit" onClick={() => openUserSign('up')}>sign up</b> to reserve a place to this event</p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div>
                            <p className="red flex-center"><i className="material-icons red mr15">close</i>Payement encounter a problem, reservation is cancel</p>
                            <p><Link className="blue" to={`/user-settings/${CurrentUser._id}`}>clic here </Link>to update your payement informations</p>
                        </div>
                    )}

                </div>
            ) : (
                <div className='detail-event__not-found'>
                    <h2 className='detail-event__not-found__title'>No event find</h2>
                </div>
            )}
        </div>
    )
}

export default EventDetail;