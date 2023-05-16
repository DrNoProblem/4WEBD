
async function DeleteMeUser(token:string) {
    var data: any = []
    const response = await fetch(`http://localhost:4000/users/deleteMe`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token // token d'authentification
        },
    });
    data = [await response.json(), await response.status];
    return data
}

export default DeleteMeUser;