"use client"

export default function Error({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
    return (
        <div className="py-40 px-4 text-center max-w-lg mx-auto">
            <h2 className="text-7xl font-bold text-amber-500 mb-4">Error!</h2>
            <p className="text-lg mb-4">
                Something went wrong: {error.message}
            </p>
            <span className="text-amber-500 underline cursor-pointer" onClick={reset}>
                click here to try again
            </span>
        </div>
    )
}
