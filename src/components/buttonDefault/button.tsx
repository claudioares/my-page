type ButtonProps = {
    title: string
}

export function Button ({title}:ButtonProps) {
    return (
        <>
            <button className={`
                w-full h-[45px] bg-yellow-600 text-white 
                rounded-2xl font-semibold
            `}>{title}</button>
        </>
    )
}