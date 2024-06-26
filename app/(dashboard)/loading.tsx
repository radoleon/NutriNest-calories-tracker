import { LinearProgress } from "@mui/material"

export default function Loading() {
    return (
        <div className="h-screen w-screen grid place-items-center">
            <LinearProgress sx={{ width: "25%"}} />
        </div>
    )
}
