import Button from "@/app/components/Button";
import { addSportRecord } from "../actions";

export default async function Sport() {
    return (
        <>
            <h2 className="form-title">Add New Sport</h2>
            <form action={addSportRecord}>
                <label>
                    Title:
                    <input className="text-field" type="text" name="title" required />
                </label>
                <label>
                    Calories:
                    <input className="text-field" type="number" name="calories" min={1} required />
                </label>
                <label>
                    Duration (hrs):
                    <input className="text-field" type="number" name="hours" min={0} required />
                </label>
                <label>
                    Duration (mins):
                    <input className="text-field" type="number" name="minutes" min={1} max={60} required />
                </label>
                <div className="w-fit mx-auto mt-8">
                    <Button text="Add" submit />
                </div>
            </form>
        </>
    )
}
