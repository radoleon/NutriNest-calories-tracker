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
    date?: Date
    title: string
    calories: number
    protein: number
    carbs: number
    fat: number
}

type SportRecord = {
    date?: Date
    title: string
    calories: number
    hours: number
    minutes: number
}
