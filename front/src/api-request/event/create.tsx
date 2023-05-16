async function eventCreate(
    name: string,
    picture: string,
    maxPlace: number,
    locality: string,
    cost: number,
    token: string | undefined) {
    var data: any = []
    const response = await fetch("http://localhost:4000/events", {
        method: "POST",
        body: JSON.stringify({ name, picture, maxPlace, locality, cost }),
        headers: { "Content-Type": "application/json", "authorization": "Bearer " + token }
    });
    data = [await response.json(), response.status];
    return data
}

export default eventCreate;