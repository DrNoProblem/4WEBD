async function payementCreate(
    nameCard: string,
    numbersCard: number,
    CVVCard: number,
    dateCard: string,
    ownerCard: string,
    token: string | undefined) {
    var data: any = []
    const response = await fetch("http://localhost:4001/payement/", {
        method: "POST",
        body: JSON.stringify({ nameCard, numbersCard, CVVCard, dateCard, ownerCard }),
        headers: { "Content-Type": "application/json", "authorization": "Bearer " + token }
    });
    data = [await response.json(), await response.status];
    return data
}

export default payementCreate;