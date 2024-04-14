type UserData = {
    id: string
    calories: number
    goal: string
}

type UserResponse = {
    data: UserData[]
    error: Error | null
}

type MealRecord = {
    title: string
    calories: number
    protein: number
    carbs: number
    fat: number
}

type SportRecord = {
    title: string
    calories: number
    hours: number
    minutes: number
}

type RecordResponse = {
    id: string
    timestamp: unknown
    created_by: string
    created_at: string
    type: string
    record: MealRecord | SportRecord
}
