
type ButtonHobbyProps = {
    nameButton: string;
}

export function ButtonHobby ({nameButton}:ButtonHobbyProps) {
    return(
        <>
            <div className={`
                border w-auto h-auto px-6 py-1   cursor-pointer hover:bg-zinc-300 hover:bg-opacity-5
                md:px-10 md:py-4
            `}>
              <p>{nameButton}</p>
            </div>
        </>
    )
}