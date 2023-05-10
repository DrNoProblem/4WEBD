import React, { FunctionComponent, useState } from "react";
import Event from "../../models/event";

import "./style.css"
import voidevent from "../../models/void-event";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import userUpdateFav from "../../api-request/user/update-fav";
import eventUpdate from "../../api-request/event/update";
import getUserById from "../../api-request/user/get-by-id";
import User from "../../models/user";

type Props = {
    event: Event
    clickcard: Function
    CurrentUser: User
};

const EventDetail: FunctionComponent<Props> = ({ event, clickcard, CurrentUser }) => {


    var [user, setUser] = useState(CurrentUser);


    const handleSelectEvent = () => {
        clickcard(voidevent);
    };

    return (
        <div className='detail-event p50 flex-row flex-center flex-col-tab flex-start-y-tab'>
            <div className='detail-event__back-button absolute t0 l0 m50'>
                <div className='cta' onClick={handleSelectEvent}>
                    <span>
                        back
                    </span>
                </div>
            </div>


            {event ? (
                <div className='detail-event__container flex-col w80 flex-center-x flex-center-y w95-tab t0'>

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