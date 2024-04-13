import Link from "next/link";
import Button from "../components/Button";

export default function Add() {
    return (
        <>
            <h2 className="form-title">
                Add a New Record
            </h2>
            <div className="flex justify-center items-center gap-8 mt-8">
                <Link href="add/meal" className="inline-block">
                    <Button text="Add Meal" />
                </Link>
                <Link href="add/sport" className="inline-block">
                    <Button text="Add Sport" />
                </Link>
            </div>
        </>
    )
}
