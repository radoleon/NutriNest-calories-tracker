"use server"

import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function addMealRecord(formData: FormData) {
    
    const data: MealRecord = {
        title: formData.get("title")?.toString()!,
        calories: parseInt(formData.get("calories") as string),
        protein: parseInt(formData.get("protein") as string),
        carbs: parseInt(formData.get("carbs") as string),
        fat: parseInt(formData.get("fat") as string)
    }

    const supabase = createServerActionClient({ cookies })
    const { error } = await supabase.from("records")
        .insert({ created_at: new Date().toISOString(), type: "meal", record: data })

    if (error) {
        throw error
    } 
    else {
        revalidatePath("/")
        redirect("/")
    }
}

export async function addSportRecord(formData: FormData) {

    const data: SportRecord = {
        title: formData.get("title")?.toString()!,
        calories: parseInt(formData.get("calories") as string) * -1,
        hours: parseInt(formData.get("hours") as string),
        minutes: parseInt(formData.get("minutes") as string)
    }

    const supabase = createServerActionClient({ cookies })
    const { error } = await supabase.from("records")
        .insert({ created_at: new Date().toISOString(), type: "sport", record: data })

    if (error) {
        throw error
    } 
    else {
        revalidatePath("/")
        redirect("/")
    }
}
