import { ChartsReferenceLine, PieChart, LineChart } from "@mui/x-charts";
import { format } from "date-fns";

interface Nutrients {
    protein: number
    carbs: number
    fat: number
}

export default function Graphs({ records, goal }: { records: RecordResponse[], goal: UserData }) {

    if (!records.length) return <div></div>

    const nutrientsCount: Nutrients = { protein: 0, carbs: 0, fat: 0 }
    
    const progressData: { x: string, y: number }[] = []
    const nutrientsData: { value: number, label: string, color: string }[] = []

    for (let record of records) {
        
        if ("protein" in record.record) {
            nutrientsCount.protein += record.record.protein
            nutrientsCount.carbs += record.record.carbs
            nutrientsCount.fat += record.record.fat
        }
        
        if (!progressData.length) {
            progressData.push({ 
                x: format(new Date(record.timestamp), "HH:mm"), 
                y: record.record.calories
            })
        }
        else {
            progressData.push({ 
                x: format(new Date(record.timestamp), "HH:mm"), 
                y: record.record.calories + progressData[progressData.length - 1].y
            })
        }
    }

    nutrientsCount.protein !== 0 && nutrientsData.push(
        { value: nutrientsCount.protein, label: "Protein", color: "#f59e0b" }
    )
    nutrientsCount.carbs !== 0 && nutrientsData.push(
        { value: nutrientsCount.carbs, label: "Carbs", color: "#a3a3a3" }
    )
    nutrientsCount.fat !== 0 && nutrientsData.push(
        { value: nutrientsCount.fat, label: "Fat", color: "#27272a" }
    )

    return (
        <div className="flex-1 flex flex-col gap-16">
            {
                progressData.length >= 2 &&
                <div>
                    <LineChart
                        axisHighlight={{x: "band"}}
                        grid={{ horizontal: true, vertical: true }}
                        dataset={progressData}
                        xAxis={[{ dataKey: "x", scaleType: "band" }]}
                        series={[{ dataKey: "y", color: "#f59e0b" }]}
                        height={250}
                        margin={{ right: 0, top: 10, bottom: 25, left: 35 }}
                    >
                        <ChartsReferenceLine
                            y={goal.calories}
                            lineStyle={{ strokeDasharray: '10 5' }}
                            labelStyle={{ fontSize: '16' }}
                            label={`Goal ${goal.calories} kcal`}
                            labelAlign="start"
                        />
                    </LineChart>
                </div>
            }
            {
                nutrientsData.length && 
                <div>
                    <PieChart
                        series={[
                        {
                            data: nutrientsData,
                            arcLabel: "value",
                            highlightScope: { faded: 'global', highlighted: 'item' },
                            innerRadius: 30,
                            outerRadius: 100,
                            paddingAngle: 2,
                            cornerRadius: 5,
                        },
                        ]}
                        height={200}
                        margin={{ left: 0 }}
                    />
                </div>
            }
        </div>
    )
}
