import Image from "next/image"

export default function Logo({ size }: { size: number }) {
    
    const sizeClasses: string[] = size === 32 ? ["text-2xl", "gap-1"] : ["text-6xl", "gap-2"]
    
    return (
        <div className={`w-fit flex items-center font-bold ${sizeClasses.join(" ")}`}>
            <Image src="/assets/logo.svg" alt="Logo Icon" width={size} height={size} />
            <span>Nutri<em className="text-amber-500">Nest</em></span>
        </div>
    )
}
