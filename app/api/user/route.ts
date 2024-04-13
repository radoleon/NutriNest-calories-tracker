import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {

    const supabase = createRouteHandlerClient({ cookies })
    const { data: user } = await supabase.auth.getUser()
    
    if (!user.user) {
        return NextResponse.json({ data: [], error: new Error("User does not exists.") })
    }

    const { data, error } = await supabase.from("users").select().eq("id", user.user.id)

    return NextResponse.json({ data, error })
}

export async function POST(request: NextRequest) {
    
    const supabase = createRouteHandlerClient({ cookies })
    const { data: user } = await supabase.auth.getUser()
    
    if (!user.user) {
        return NextResponse.json({ error: new Error("User does not exists.") })
    }

    const requestData = await request.json()
    const { error } = await supabase.from("users").insert({ ...requestData })

    return NextResponse.json({ error })
}

export async function PUT(request: NextRequest) {
    
    const supabase = createRouteHandlerClient({ cookies })
    const { data: user } = await supabase.auth.getUser()
    
    if (!user.user) {
        return NextResponse.json({ error: new Error("User does not exists.") })
    }

    const requestData = await request.json()
    const { error } = await supabase.from("users").update({ ...requestData }).eq("id", user.user.id)

    return NextResponse.json({ error })
}