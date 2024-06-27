import { ReactNode } from "react"

type ChildrenContainerTypes = {
    children: ReactNode
}
export function Container ({children}:ChildrenContainerTypes) {
    return(
        <div className="w-full h-screen pt-20 bg-zinc-900 text-slate-50">
            {children}
        </div>
    )
}