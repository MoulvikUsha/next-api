'use client'

import { useEffect, useState } from "react";

export default function UpdateUser({ params }) {
    console.log('params:', params.userId);
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        getUserDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getUserDetails = async () => {
        let data = await fetch(`http://localhost:3000/api/users/${params.userId}`)
        data = await data.json()
        setName(data.result.name)
        setAge(data.result.age)
        setEmail(data.result.email)
    }

    const updateUser = async () => {
        let result = await fetch(`  http://localhost:3000/api/users/${params.userId}`, {
            method: 'PUT',
            body: JSON.stringify({ name, age, email })
        })
        result = result.json()
        console.log('result:', result);
    }

    return (
        <>
            <h1>Update User Detail</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" value={age} onChange={(event) => setAge(event.target.value)} />
            <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
            <button onClick={updateUser}>Submit</button>
        </>
    )
}