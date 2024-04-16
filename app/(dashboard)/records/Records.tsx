"use client"

import Button from "@/app/components/Button"
import Link from "next/link"
import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@mui/icons-material';
import { useState, startTransition } from "react";
import { format } from "date-fns";
import RecordsList from "./RecordsList";
import Graphs from "./Graphs";

type RecordsProps = {
    records: RecordResponse[]
    goal: UserData
    getRecords: (id: string, date: Date) => Promise<RecordResponse[]>
}

export default function Records({ records: _records, goal, getRecords }: RecordsProps) {

    const [date, setDate] = useState<Date>(new Date())
    const [records, setRecords] = useState(_records)

    function handleDateChange(milliseconds: number) {
        let newDate = new Date()

        if (milliseconds !== 0) {
            newDate = new Date(date.getTime() + milliseconds)
        }
        setDate(newDate)
        
        startTransition(async () => {
            const newRecords = await getRecords(goal.id, newDate)
            setRecords(newRecords)
        })
    }

    return (
        <section className="mt-16">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-8">
                <div className="flex justify-between sm:justify-start items-center gap-4">
                    <h2 className="text-3xl font-bold">Dashboard</h2>
                    {
                        date.toDateString() === new Date().toDateString()
                        ?
                        <Link href="/add" className="inline-block">
                            <Button text="Add" />
                        </Link>
                        :
                        <Button text="Add" disabled />
                    }
                </div>
                <div>
                    <ArrowBackIosRounded 
                        className="hover:opacity-50 cursor-pointer" 
                        onClick={() => handleDateChange(-86400000)}
                    />
                    <span 
                        className="text-base text-center font-bold mx-2 hover:opacity-50 cursor-pointer tracking-wide w-32 inline-block"
                        onClick={() => handleDateChange(0)}
                    >
                        {format(date, "E, MMM dd yyyy")}
                    </span>
                    <ArrowForwardIosRounded 
                        className="hover:opacity-50 cursor-pointer "
                        onClick={() => handleDateChange(86400000)}
                    />
                </div>
            </div>
            <section className="flex gap-6 flex-col md:flex-row md:gap-16">
                <RecordsList records={records} goal={goal} />
                <Graphs records={records} goal={goal} />
            </section>
        </section>
    )
}
