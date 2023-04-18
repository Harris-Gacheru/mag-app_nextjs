import Link from "next/link"

export default function Category(props){
    return(
        <div className="border-b border-slate-200 p-2">
            <Link href='/categories/slug' className="font-light">{props.name}</Link>
        </div>
    )
}