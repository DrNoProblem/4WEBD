async function payementUpdate(
    _id: string,
    nameCard: string,
    numbersCard: number,
    CVVCard: number,
    dateCard: string,
    ownerCard: string,
    token: string | undefined) {
    var data: any = []
    const response = await fetch("http://localhost:4001/payement/" + _id, {
        method: "PUT",
        body: JSON.stringify({ nameCard, numbersCard, CVVCard, dateCard, ownerCard }),
        headers: { "Content-Type": "application/json", "authorization": "Bearer " + token }
    });
    data = [await response.json(), response.status];
    return data
}

export default payementUpdate;