
async function getEventsList() {
    var data: any = []
    const response = await fetch("http://localhost:4000/events", {
        method: "GET",
    });
    data = [await response.json(), await response.status];
    return data
}

export default getEventsList();