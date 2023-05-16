import React, { FunctionComponent } from "react";
import User from "../../../models/user";
import Event from "../../../models/event";
import "./style.css"
import { Link } from "react-router-dom";

type Props = {
    users: Array<User>
    events: Array<Event>
};

const AdminTable: FunctionComponent<Props> = ({ users, events }) => {
    return (
        <div className="mt50">
            <h2 className="blue pl25">List users :</h2>
            <ul>
                <li className="flex-row flex-center flex-bet">
                    <p className="grey">name</p>
                    <p className="grey">email</p>
                    <p className="grey">role</p>
                    <i className="material-icons grey">expand_more</i>
                </li>
                {users.map(user => (
                    <li className="flex-row flex-center flex-bet">
                        <p className="pl10">{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.role}</p>
                        <Link to={`/user-settings/${user._id}`}>
                            <i className="material-icons">edit</i>
                        </Link>
                    </li>
                ))}
            </ul>
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
                        <p className="pl10">{event.name}</p>
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

export default AdminTable