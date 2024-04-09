import Button from "@/app/components/Button";
import Link from "next/link";

export default function Login() {
    return (
        <>
            <h2 className="text-4xl font-bold mb-4 text-center text-amber-500">Login</h2>
            <form>
                <label>
                    Email:
                    <input className="text-field" type="text" />
                </label>
                <label>
                    Password:
                    <input className="text-field" type="text" />
                </label>
                <div className="w-fit mx-auto mt-8">
                    <Button text="Login" submit />
                </div>
            </form>
            <span className="block mt-4">
                {"If you haven't created an account yet "}
                <Link className="text-amber-500 underline" href="/signup">click here to signup</Link>
            </span>
        </>
    )
}
