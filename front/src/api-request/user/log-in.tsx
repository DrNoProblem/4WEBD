async function logIn(email: string, password: string) {
    var data: any = ''
    try {
        const response = await fetch("http://localhost:4004/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        data = [await response.json(), await response.status];
    } catch {
        return false
    }
    return data
}
export default logIn;