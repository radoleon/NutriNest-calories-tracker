type TodayProps = {
    records: RecordResponse[]
    goal: UserData
}

export default function Today({ records, goal }: TodayProps) {

    let currentCalories: number = 0
    let progressClass: string = ""
    
    for (let record of records) {
        currentCalories += record.record.calories
    }

    if (currentCalories != 0) {
        if (goal.goal === "loose weight" && currentCalories <= goal.calories) progressClass = "green"
        if (goal.goal === "loose weight" && currentCalories > goal.calories) progressClass = "red"
        if (goal.goal === "gain weight" && currentCalories >= goal.calories) progressClass = "green"
        if (goal.goal === "gain weight" && currentCalories < goal.calories) progressClass = "red"
    }

    return (
        <section className="flex flex-col gap-8 md:flex-row md:gap-16 md:items-end">
            <div className="font-bold text-lg pt-8 flex-1">
                <h2 className="text-2xl">Your Goal</h2>
                <p className="pt-4">Calorie Balance<span className="ml-2 text-amber-500">{goal.calories} kcal</span></p>
                <p>Weight Adjustement<span className="ml-2 text-amber-500">{goal.goal}</span></p>
            </div>
            <div className="flex-1">
                <div className="flex justify-between text-2xl font-bold">
                    <span>Today</span>
                    {
                        progressClass ?
                        progressClass === "green" ?
                        <span className="text-green-600">{currentCalories}</span> :
                        <span className="text-red-600">{currentCalories}</span> :
                        <span>{currentCalories}</span>
                    }
                </div>
                <progress className={`bg-white ${progressClass}`} max={goal.calories} value={currentCalories} />
            </div>
        </section>
    )
}
