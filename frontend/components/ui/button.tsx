import { HTMLAttributes } from "react"



const btnColor: {
    Default: string,
    Primary: string,
    Secondary: string,
    Action: string
} = {
    Default: "  rounded outline-none text-white  hover:opacity-80  cursor-pointer",
    Primary: " px-4 py-2 bg-[#27187E] ",
    Secondary: " px-4 py-2 bg-[#27187E]",
    Action: " px-3 py-2 bg-[#27187E] itmes-center "
}




export function Button({ name, type, onClick }: {
    name: String,
    type: "Primary" | "Secondary" | "Action",
    onClick: () => void
}) {
    return (
        <>
            <button className={`${btnColor[type]} ${btnColor.Default}  `} onClick={onClick}>{name}</button>
        </>
    )
}