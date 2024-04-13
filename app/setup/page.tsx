"use client"

import { FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { useEffect, useState } from "react"
import Button from "@/app/components/Button"
import { useRouter } from "next/navigation"

export default function Setup() {

    const [caloriesBalance, setCaloriesBalance] = useState<string>("")
    const [goal, setGoal] = useState<string>("loose weight")
    
    const [pending, setPending] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const router = useRouter()

    useEffect(() => {
        if (error) {
            throw new Error(error)
        }  
    }, [error])

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        setError(null)
        setPending(true)

        const calories = parseInt(caloriesBalance)

        const response = await fetch(`${location.origin}/api/user`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })

        const json: UserResponse = await response.json()
        
        if (json.error) {
            setError(json.error.message)
            return
        }

        if (!json.data.length) {
            const response = await fetch(`${location.origin}/api/user`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ calories, goal })
            })

            const json: { error: Error | null } = await response.json()

            if (json.error) {
                setError(json.error.message)
                return
            }
        }
        
        else {
            const response = await fetch(`${location.origin}/api/user`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ calories, goal })
            })

            const json: { error: Error | null } = await response.json()
            
            if (json.error) {
                setError(json.error.message)
                return
            }
        }

        setPending(false)
        router.push("/")
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>
                Calorie Balance:
                <input 
                    className="text-field" 
                    type="number"
                    value={caloriesBalance}
                    onChange={(e) => setCaloriesBalance(e.target.value)}
                    required
                    min={1}
                />
            </label>
            <p>
                Weight Adjustement:
            </p>
            <RadioGroup
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                row
            >
                <FormControlLabel value="loose weight" control={<Radio size="small" />} label="Loose Weight" />
                <FormControlLabel value="gain weight" control={<Radio size="small" />} label="Gain Weight" />
            </RadioGroup>
            <div className="w-fit mx-auto mt-6">
                <Button text="Set" submit disabled={pending} />
            </div>
        </form>
    )
}
