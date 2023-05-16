import React, { FunctionComponent } from "react";
import Event from "../../../models/event";
import { Link } from "react-router-dom";
import User from "../../../models/user";
import "./style.css"

type Props = {
    events: Array<Event>
    CurrentUser: User
};

const OrgaTable: FunctionComponent<Props> = ({ events, CurrentUser }) => {
    return (
        <div className="mt50">
            <h2 className="blue pl25">List event :</h2>
            <ul>
                <li className="flex-row flex-center flex-bet">
                    <p className="grey">name</p>
                    <p className="grey">date</p>
                    <p className="grey">locality</p>
                    <p className="grey">maxPlace</p>
                    <p className="grey">dispoPlace</p>
                    <i className="material-icons grey">expand_more</i>
                </li>
                {events.map(event => (
                    <li className="flex-row flex-center flex-bet">
                        <p>{event.name}</p>
                        <p>{event.date}</p>
                        <p>{event.locality}</p>
                        <p>{event.maxPlace}</p>
                        <p>{event.dispoPlace}</p>
                        <Link to={`/event-settings/${event._id}`}>
                            <i className="material-icons">edit</i>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default OrgaTable