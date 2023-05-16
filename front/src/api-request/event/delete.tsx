import React, { FunctionComponent } from "react";

async function eventDelete(token:string, _id:string) {
    var data: any = []
    const response = await fetch(`http://localhost:4000/events/${_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token // token d'authentification
        },
    });
    data = [await response.json(), response.status];
    return data
}

export default eventDelete;
