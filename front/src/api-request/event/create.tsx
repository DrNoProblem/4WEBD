async function eventCreate(
    classe: string,
    picture: string,
    color: Array<string>,
    object: Array<string>,
    favorite: number,
    creator: string,
    token: string | undefined) {
    var data: any = []
    const response = await fetch("http://localhost:4000/events/", {
        method: "POST",
        body: JSON.stringify({ classe, picture, color, object, favorite, creator }),
        headers: { "Content-Type": "application/json", "authorization": "Bearer " + token }
    });
    console.log(JSON.stringify({ classe, picture, color, object, favorite, creator }))
    data = [await response.json(), await response.status];
    return data
}

export default eventCreate;