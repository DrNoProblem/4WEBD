async function eventUpdate(
    _id: string,
    classe: string,
    picture: string,
    color: Array<string>,
    object: Array<string>,
    favorite: number,
    creator: string,
    token: string | undefined) {
    var data: any = []
    const response = await fetch("http://localhost:4000/events/" + _id, {
        method: "PUT",
        body: JSON.stringify({ classe, picture, color, object, favorite, creator }),
        headers: { "Content-Type": "application/json", "authorization": "Bearer " + token }
    });
    data = [await response.status];
    return data
}

export default eventUpdate;