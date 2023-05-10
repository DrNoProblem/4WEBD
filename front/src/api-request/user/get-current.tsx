async function getCurrent(token:string | undefined) {
    var data: any = []
    const response = await fetch(`http://localhost:4000/users/me`, {
        method: "GET",
        headers: { "authorization" : "Bearer " + token }
    });
    data = [await response.json(), await response.status];
    return data
}

export default getCurrent;