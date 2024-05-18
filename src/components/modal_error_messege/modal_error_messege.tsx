type ModalPrps = {
    messege: string,
}

export function ModalErrorMessege ({messege}:ModalPrps) {
    return(
        <>
            <div className={`
                fixed bottom-20 left-[-28rem] rounded-lg flex items-center justify-center bg-red-700 text-white w-auto px-4 py-2 h-16
            `}>
                {messege}
            </div>
        </>
    )
}