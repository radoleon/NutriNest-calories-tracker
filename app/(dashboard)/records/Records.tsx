"use client"

import Button from "@/app/components/Button"
import Link from "next/link"
import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@mui/icons-material';
import { useEffect, useState } from "react";

type RecordProps = {
    records: RecordResponse[]
    goal: UserData
    getRecords: (id: string, date: Date) => Promise<RecordResponse[]>
}

export default function Records({ records: _records, goal, getRecords }: RecordProps) {

    const [date, setDate] = useState<Date>(new Date())
    const [records, setRecords] = useState(_records)

    useEffect(() => {
        handleDateChange()
    }, [date])

    async function handleDateChange() {
        const newRecords = await getRecords(goal.id, date)
        setRecords(newRecords)
    }

    return (
        <section className="mt-16">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
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
                        onClick={() => setDate(prevDate => new Date(prevDate.getTime() - 86400000))}
                    />
                    <span 
                        className="text-base font-bold mx-2 hover:opacity-50 cursor-pointer"
                        onClick={() => setDate(new Date())}
                    >
                        {date.toDateString()}
                    </span>
                    <ArrowForwardIosRounded 
                        className="hover:opacity-50 cursor-pointer "
                        onClick={() => setDate(prevDate => new Date(prevDate.getTime() + 86400000))}
                    />
                </div>
            </div>
            <div>{JSON.stringify(records)}</div>
        </section>
    )
}
