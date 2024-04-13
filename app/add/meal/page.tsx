import Button from "@/app/components/Button";
import { addMealRecord } from "../actions";

export default function Meal() {
    return (
        <>
            <h2 className="form-title">Add New Meal</h2>
            <form action={addMealRecord}>
                <label>
                    Title:
                    <input className="text-field" type="text" name="title" required />
                </label>
                <label>
                    Calories:
                    <input className="text-field" type="number" name="calories" required min={1} />
                </label>
                <label>
                    Protein:
                    <input className="text-field" type="number" name="protein" required min={0} />
                </label>
                <label>
                    Carbs:
                    <input className="text-field" type="number" name="carbs" required min={0} />
                </label>
                <label>
                    Fat:
                    <input className="text-field" type="number" name="fat" required min={0} />
                </label>
                <div className="w-fit mx-auto mt-8">
                    <Button text="Add" submit />
                </div>
            </form>
        </>
    )
}
