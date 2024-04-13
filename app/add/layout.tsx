import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { Metadata } from "next"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
    title: "NutriNest | Add"
}

export default async function AddLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    const supabase = createServerComponentClient({ cookies })
    const { data } = await supabase.auth.getUser()

    if (!data.user) {
        redirect("/login")
    }

    return (
        <main className="py-40 px-4 max-w-sm mx-auto">
            {children}
        </main>
    )
}
