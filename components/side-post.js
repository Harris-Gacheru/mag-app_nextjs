import Link from "next/link"

export default function SidePostContainer(props){
    return (
        <div className="flex py-2 border-b border-slate-200">
            <div className="w-1/3 h- drop-shadow">
                <img src={props.src} alt={props.title} className="w-full h-full" />
            </div>

            <div className="w-2/3 ps-5 flex flex-col">
                <h3 className="mb-2 font-bold text-lg hover:text-blue-500">
                    <Link href='/posts/1'>{props.title}</Link>
                </h3>

                <h3 className="mb-2 text-white text-xs w-fit rounded-lg px-3 bg-red-500 drop-shadow">{props.category}</h3>

                <div className="flex gap-5 font-light text-base">
                    <h4>{props.author}</h4>
                    <p>{props.date}</p>
                </div>
            </div>
        </div>
    )
}