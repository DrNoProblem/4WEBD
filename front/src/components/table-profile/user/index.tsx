import React, { FunctionComponent, useEffect, useState } from "react";
import Event from "../../../models/event";
import { Link } from "react-router-dom";
import User from "../../../models/user";
import "./style.css"
import getEventById from "../../../api-request/event/get-by-id";

type Props = {
    events: Array<Event>
    CurrentUser: User
};

const UserTable: FunctionComponent<Props> = ({ events, CurrentUser }) => {

    const [listReserved, setListReserved] = useState([])
    const [thelistReserved, settheListReserved] = useState([])

    useEffect(() => {
        var list: any = [];
        CurrentUser.reserv.map((reservation) => {
            var reserveList: any = [];
            reserveList.push(reservation[0]);
            getEventById(reservation[1]).then(event => {
                reserveList.push(event[0].name)
                reserveList.push(event[0].date)
                reserveList.push(event[0].locality)
            })
            list.push(reserveList)
        }
        )
        setListReserved(list)
    }, [CurrentUser])

    useEffect(() => {
        settheListReserved(listReserved)
    }, [listReserved])



    return (
        <div className="mt50">
            <h2 className="blue pl25">List event :</h2>
            <ul>
                <li className="flex-row flex-center flex-bet">
                    <p className="grey">place</p>
                    <p className="grey">name</p>
                    <p className="grey">date</p>
                    <p className="grey">locality</p>
                    <i className="material-icons grey">expand_more</i>
                </li>
                {thelistReserved.map(reservation => (

                    <li className="flex-row flex-center flex-bet">
                        <p>{reservation[0]}</p>
                        <p>{reservation[1]}</p>
                        <p>{reservation[2]}</p>
                        <p>{reservation[3]}</p>
                        <i className="material-icons grey">delete</i>
                    </li>
                )
                )}
            </ul>
        </div>
    )
}

export default UserTable