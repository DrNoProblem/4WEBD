async function userUpdateCrea(eventOwner:Array<String>, token:String | undefined) {
    var data: any = []
    const response = await fetch("http://localhost:4000/users/updateMe", {
        method: "PATCH",
        body: JSON.stringify({ "eventOwner" : eventOwner}),
        headers: { "Content-Type": "application/json", "authorization" : "Bearer " + token}
    });
    data = [await response.json(), await response.status];
    return data
}

export default userUpdateCrea;