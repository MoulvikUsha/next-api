async function getUsers(id) {
    let response = await fetch(`http://localhost:3000/api/users/${id}`)
    response = response.json()
    return response
}

export default async function UserDetails({ params }) {
    const user = await getUsers(params.userId)
    return (
        <>
            <h2>User Detail</h2>
            <h2>Name: {user.result[0].name}</h2>
            <h2>ID: {user.result[0].id}</h2>
            <h2>Age: {user.result[0].age}</h2>
            <h2>Email: {user.result[0].email}</h2>
        </>
    )
}