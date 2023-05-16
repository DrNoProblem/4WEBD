async function userUpdateOwner(eventOwner:Array<string>, token:string | undefined) {
    var data: any = []
    const response = await fetch("http://localhost:4004/users/updateMe", {
        method: "PATCH",
        body: JSON.stringify({ "eventOwner" : eventOwner}),
        headers: { "Content-Type": "application/json", "authorization" : "Bearer " + token}
    });
    data = [await response.json(), await response.status];
    return data
}

export default userUpdateOwner;