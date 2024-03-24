interface IpropsProjectsSection {
    id: string,
    name: string,
    team: string,
    description: string,
    obs: string,
    conclusion: string,
    experience: string
}

export function SectionProjects (data:IpropsProjectsSection) {
    return(
        <>
            <div className="flex flex-col gap-1" key={data.id}>
                <h2 className="text-lg font-semibold">{data.name}</h2>
                <h3 className="text-justify">

                    <h2 className="text-base font-semibold">Descrição do projeto:</h2>
                    {data.description}
                    <h2 className="text-base font-semibold">Equipe:</h2>
                    {data.team}

                    <h2 className="text-base font-semibold">Observações:</h2>
                    {data.obs}

                    <h2 className="text-base font-semibold">Conclussão:</h2>
                    {data.conclusion}
                    <br />
                    <br />
                    {data.experience}
                </h3>
            </div>
        </>
    )
}