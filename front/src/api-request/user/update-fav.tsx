async function userUpdateFav(eventFavorite:Array<String>, token:String | undefined) {
    var data: any = []
    const response = await fetch("http://localhost:4000/users/updateMe", {
        method: "PATCH",
        body: JSON.stringify({ "eventFavorite" : eventFavorite}),
        headers: { "Content-Type": "application/json", "authorization" : "Bearer " + token}
    });
    data = [await response.status];
    return data
}

export default userUpdateFav;