
async function getUserById(user_id:string) {
    var data: any = []
    const response = await fetch(`http://localhost:4004/users/${user_id}`, {
        method: "GET",
    });
    data = [await response.json(), await response.status];
    return data
}

export default getUserById;