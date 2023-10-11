import { users } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET(request, content) {
    const userData = users.filter((item) => item.id == content.params.userid)
    return NextResponse.json(userData.length == 0 ? { result: 'No data found', success: false } : { result: userData, success: true }, { status: 200 })
}

export async function PUT(request, content) {
    let payload = await request.json()
    payload.id = content.params.userid
    if (!payload.id || !payload.name || !payload.age || !payload.email) {
        return NextResponse.json({ result: "not data found", success: false })
    }
    return NextResponse.json({ result: payload, success: true })

}