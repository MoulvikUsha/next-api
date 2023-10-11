import Link from "next/link"

async function getUsers() {
    let response = await fetch('http://localhost:3000/api/users')
    response = response.json()
    return response
}
export default async function Page() {
    let users = await getUsers()
    return (
        <div>
            <h1>User List</h1>
            {
                users.map((item) => (
                    <div key={item.id}>
                        <Link href={`users/${item.id}`}>{item.id} - {item.name}</Link>&nbsp;&nbsp;
                        <Link href={`users/${item.id}/update`}>Edit</Link>
                    </div>
                ))
            }
        </div>
    )
}