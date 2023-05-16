async function userUpdateReserve(eventdata:Array<string | number>, token:string | undefined) {
    var data: any = []
    const response = await fetch("http://localhost:4000/users/updateMe", {
        method: "PATCH",
        body: JSON.stringify({ "reserv" : eventdata}),
        headers: { "Content-Type": "application/json", "authorization" : "Bearer " + token}
    });
    data = [await response.status];
    return data
}

export default userUpdateReserve;