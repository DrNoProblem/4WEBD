async function eventUpdate(
    _id: string,
    name: string,
    picture: string,
    maxPlace: number,
    dispoPlace: number,
    locality: string,
    cost: number,
    usersReserve: Array<string | number>,
    token: string | undefined) {
    var data: any = []
    console.log( JSON.stringify({ name, picture, maxPlace, dispoPlace, locality, cost, usersReserve }))
    const response = await fetch("http://localhost:4000/events/" + _id, {
        method: "PUT",
        body: JSON.stringify({ name, picture, maxPlace, dispoPlace, locality, cost, usersReserve }),
        headers: { "Content-Type": "application/json", "authorization": "Bearer " + token }
    });
    data = [await response.json(), await response.status];
    return data
}

export default eventUpdate;