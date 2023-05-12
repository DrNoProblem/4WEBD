async function eventCreate(
    name: string,
    picture: string,
    maxPlace: number,
    dispoPlace: number,
    usersReserve: Array<string>,
    token: string | undefined) {
    var data: any = []
    const response = await fetch("http://localhost:4000/events/", {
        method: "POST",
        body: JSON.stringify({ name, picture, maxPlace, dispoPlace, usersReserve }),
        headers: { "Content-Type": "application/json", "authorization": "Bearer " + token }
    });
    console.log(JSON.stringify({ name, picture, maxPlace, dispoPlace, usersReserve }))
    data = [await response.json(), await response.status];
    return data
}

export default eventCreate;