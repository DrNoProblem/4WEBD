async function register(email:string, name:string, password:string, role:string ) {
    var data: any = ''
    try {
        const response = await fetch("http://localhost:4004/users/signup", {
            method: "POST",
            body: JSON.stringify({ email, name, password, role }),
            headers: { "Content-Type": "application/json"}

            //body: JSON.stringify({ "email": email, "pseudo": pseudo, "password": password, "role": role })

        });
        data = [await response.json(), await response.status];
    } catch {
        return false
    }
    return data
}
export default register;