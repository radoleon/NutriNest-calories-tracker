type userData = {
    id: string
    calories: number
    goal: string
}

type userResponse = {
    data: userData[]
    error: Error | null
}