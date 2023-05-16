
async function getEventById(id:string) {
    var data: any = []
    const response = await fetch(`http://localhost:4000/events/${id}`, {
        method: "GET",
    });
    data = [await response.json(), await response.status];
    return data
}

export default getEventById;