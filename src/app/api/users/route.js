import { users } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET(request) {
    const data = users
    return NextResponse.json(data, { status: 200 })
}

export async function POST(request) {
    const payload = await request.json()
    console.log('payload:', payload);
    if (!payload.name || !payload.age || !payload.email) {
        return NextResponse.json({ result: 'Required field not found' })
    }
    return NextResponse.json({ result: 'New User Created', success: true }, {status: 201})
}