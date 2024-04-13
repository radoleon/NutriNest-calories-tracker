import { Metadata } from "next"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
    title: "NutriNest | Setup"
}

export default async function SetupLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    
    const supabase = createServerComponentClient({ cookies })
    const { data } = await supabase.auth.getUser()

    if (!data.user) {
        redirect("/login")
    }
    
    return (
        <main className="max-w-sm mx-auto py-40 px-4">
            <h2 className="form-title">Account Setup</h2>
            {children}
        </main>
    )
}
