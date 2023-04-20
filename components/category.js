import Link from "next/link"

export default function Category({category}){
    return(
        <div className="border-b border-slate-200 p-2">
            <Link href={`/categories/${category.id}`} className="font-light">{category.name}</Link>
        </div>
    )
}