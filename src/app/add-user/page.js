'use client'

import { useState } from "react"

export default function AddUser() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const addUser = async () => {
        let response = await fetch('http://localhost:3000/users', {
            method: "POST",
            body: JSON.stringify({ name, age, email })
        })
        response = await response.json()
    }
    return (
        <>
            <h1>Add New User</h1>
            <input type="text" value={name} placeholder="Enter Name" onChange={(event) => setName(event.target.value)} />
            <input type="text" value={age} placeholder="Enter Age" onChange={(event) => setAge(event.target.value)} />
            <input type="text" value={email} placeholder="Enter Email" onChange={(event) => setEmail(event.target.value)} />
            <button onClick={addUser}>Submit</button>
        </>
    )
}