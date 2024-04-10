"use server"

import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function signup(formData: FormData) {
    const supabase = createServerActionClient({ cookies })

    const { error } = await supabase.auth.signUp({
        email: formData.get("email")?.toString()!,
        password: formData.get("password")?.toString()!
    })
    
    if (error) {
        throw error
    }
    else {
        redirect("/dashboard")
    }
}

export async function login(formData: FormData) {
    const supabase = createServerActionClient({ cookies })

    const { error } = await supabase.auth.signInWithPassword({
        email: formData.get("email")?.toString()!,
        password: formData.get("password")?.toString()!
    })

    if (error) {
        throw error
    }
    else {
        redirect("/dashboard")
    }
}