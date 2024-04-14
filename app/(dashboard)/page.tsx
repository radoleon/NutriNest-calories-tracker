import { createServerActionClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Navbar from "./Navbar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Today from "./today/Today";
import Records from "./records/Records";

async function getRecords (id: string, date: Date): Promise<RecordResponse[]> {
    "use server"

    const supabase = createServerActionClient({ cookies })

    const { data, error } = await supabase.from("records")
        .select()
        .eq("created_by", id)
        .eq("created_at", date.toISOString())
        .order("timestamp")
    
    if (error) {
        throw error
    }

    return data as RecordResponse[]
}

export default async function Dashboard() {

    const supabase = createServerComponentClient({ cookies })
    const { data: user } = await supabase.auth.getUser()

    if (!user.user) {
        redirect("/login")
    }

    const { data } = await supabase.from("users").select().eq("id", user.user.id)

    if (!data?.length) {
        redirect("/setup")
    }

    const records = await getRecords(user.user.id, new Date())

    return (
        <main className="max-w-4xl py-8 mx-auto px-4">
            <Navbar email={user.user.email!} />
            <Today records={records} goal={data[0]} />
            <Records records={records} goal={data[0]} getRecords={getRecords} />
        </main>
    )
}
