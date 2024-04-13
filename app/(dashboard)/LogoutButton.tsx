"use client"

import { useState } from "react"
import Button from "../components/Button"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"

export default function LogoutButton() {
       
    const [pending, setPending] = useState<boolean>(false)
    const router = useRouter()
    
    async function handleClick() {
        setPending(true)
        
        const supabase = createClientComponentClient()
        await supabase.auth.signOut()
        
        router.refresh()
        router.push("/login")
        
        setPending(false)
    }

    return (
        <span className="inline-block" onClick={handleClick}>
            <Button text="Logout" disabled={pending} />
        </span>
    )
}
