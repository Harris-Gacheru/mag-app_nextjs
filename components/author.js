import Link from "next/link"

export default function SideAuthor(props){
    return(
        <div className="border-b border-slate-200 p-2">
            <Link href='/authors/id' className="font-light">{props.name}</Link>
        </div>
    )
}