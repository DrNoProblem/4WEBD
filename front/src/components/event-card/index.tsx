import React, { FunctionComponent, useEffect, useState } from "react";
import Event from "../../models/event";
import "./style.css"
import Cookies from "js-cookie";
import getCurrent from "../../api-request/user/get-current";
import userUpdateFav from "../../api-request/user/update-fav";
import eventUpdate from "../../api-request/event/update";
import User from "../../models/user";

type Props = {
    event: Event
    clickcard: Function
    clickfav: Function
    CurrentUser: User
};

const EventCard: FunctionComponent<Props> = ({ event, CurrentUser, clickcard, clickfav }) => {

    const handleSelectEvent = () => {
        clickcard(event);
    };




    return (
        <li key={event._id} className='card-event flex-row flex-center-y p15 relative'>
            <img alt='event' className="card-event__item" src={event.picture} onClick={handleSelectEvent}></img>
        </li>
    );

}

export default EventCard;