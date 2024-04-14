import { Restaurant, FitnessCenter } from "@mui/icons-material"
import { format } from "date-fns"

export default function RecordsList({ records, goal }: { records: RecordResponse[], goal: UserData }) {
    return (
        <div>
            {records.map((record) => {
                if ("protein" in record.record) {
                    return (
                        <div className="card">
                            <Restaurant color="primary" />
                            <div className="flex-auto">
                                <p className="text-lg font-bold flex items-center gap-2 mb-2">
                                    {record.record.title}
                                    <span className="text-sm text-neutral-400 font-medium">{format(new Date(record.timestamp), "HH:mm")}</span>
                                </p>
                                <p>
                                    protein {record.record.protein}g • carbs {record.record.carbs}g • fat {record.record.fat}g
                                </p>
                            </div>
                            {
                                goal.goal === "loose weight" ?
                                <span className="text-red-600 text-xl font-bold">+{record.record.calories}</span> :
                                <span className="text-green-600 text-xl font-bold">+{record.record.calories}</span>
                            }
                        </div>
                    )
                }
                else {
                    return (
                        <div className="card">
                            <FitnessCenter color="primary" />
                            <div className="flex-auto">
                                <p className="text-lg font-bold flex items-center gap-2 mb-2">
                                    {record.record.title}
                                    <span className="text-sm text-neutral-400 font-medium">{format(new Date(record.timestamp), "HH:mm")}</span>
                                </p>
                                <p>
                                    duration {record.record.hours}hrs • {record.record.minutes}mins
                                </p>
                            </div>
                            {
                                goal.goal === "loose weight" ?
                                <span className="text-green-600 text-xl font-bold">{record.record.calories}</span> :
                                <span className="text-red-600 text-xl font-bold">{record.record.calories}</span>
                            }
                        </div>
                    )
                }
            })}
        </div>
    )
}
