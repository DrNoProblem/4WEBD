async function payementDelete(token:string, _id:string) {
    var data: any = []
    const response = await fetch(`http://localhost:4001/payement/${_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token // token d'authentification
        },
    });
    data = [await response.json(), await response.status];
    return data
}

export default payementDelete;