import { Metadata } from "next";
import Logo from "../components/Logo";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "NutriNest | Auth"
}

export default async function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    const supabase = createServerComponentClient({ cookies })
    const { data } = await supabase.auth.getUser()

    if (data.user) {
        redirect("/")
    }

    return (
        <section className="py-40 px-4">
            <div className="w-fit mx-auto mb-10">
                <Logo size={64} />
            </div>
            <main className="max-w-sm mx-auto">
                {children}
            </main>
        </section>
    )
}
