import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Navbar from "./Navbar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Dashboard() {

    const supabase = createServerComponentClient({ cookies })
    const { data } = await supabase.auth.getUser()

    if (!data.user) {
        redirect("/login")
    }

    return (
        <main className="max-w-4xl py-8 mx-auto px-4">
            <Navbar email={data.user.email!} />
        </main>
    )
}
