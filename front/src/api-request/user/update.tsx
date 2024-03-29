import User from "../../models/user";

async function userUpdate(user:User, token:string | undefined, valueType:string, value:string) {
    var data: any = []
    const response = await fetch("http://localhost:4004/users/updateMe", {
        method: "PATCH",
        body: JSON.stringify({ ...user, [valueType]: value}),
        headers: { "Content-Type": "application/json", "authorization" : "Bearer " + token}
    });
    data = [await response.json(), await response.status];
    return data
}

export default userUpdate;