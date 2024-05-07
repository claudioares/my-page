
type ButtonHobbyProps = {
    nameButton: string;
}

export function ButtonHobby ({nameButton}:ButtonHobbyProps) {
    return(
        <>
            <div className="border w-auto h-auto px-10 py-4 cursor-pointer hover:bg-zinc-300 hover:bg-opacity-5">
              <p>{nameButton}</p>
            </div>
        </>
    )
}