import React, { FunctionComponent, useEffect, useState } from "react";
import Event from "../../models/event";
import "./style.css"
import User from "../../models/user";

type Props = {
    event: Event
    clickcard: Function
};

const EventCard: FunctionComponent<Props> = ({ event, clickcard }) => {





    return (
        <li key={event._id} className='card-event flex-row flex-center-y p15 relative'>
            <img alt='event' className="card-event__item" src={event.picture} onClick={() => clickcard(event)}></img>
        </li>
    );

}

export default EventCard;