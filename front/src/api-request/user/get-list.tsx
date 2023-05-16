
async function getUsersList() {
    var data: any = []
    const response = await fetch("http://localhost:4004/users", {
        method: "GET",
    });
    data = [await response.json(), await response.status];
    return data
}

export default getUsersList();