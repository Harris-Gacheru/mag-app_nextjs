import Link from "next/link"

export default function PostContainer(props){
    return (
        <div className="flex mb-4">
            <div className="w-1/3 h-[220px] relative drop-shadow">
                {/* src: https://www.nchealthinfo.org/wp-content/uploads/2019/08/GoodHealthInformation-768x477.jpg */}
                <img src={props.src} alt={props.title} className="w-full h-full" />
                <h3 className="text-white bg-red-500 absolute bottom-[10px] left-[10px] px-5 py-1 drop-shadow">{props.category}</h3>
            </div>

            <div className="w-2/3 ps-5 flex flex-col">
                <h3 className="mb-3 font-bold text-2xl hover:text-blue-500">
                    <Link href='/posts/1'>{props.title}</Link>
                </h3>

                <div className="mb-3 flex gap-5 font-light text-base">
                    <h4>{props.author}</h4>
                    <p>{props.date}</p>
                </div>
                {/* content: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, cum inventore! Vero in porro doloremque libero eum officia cumque id. */}
                <div className="content font-light">{props.content}</div>
            </div>
        </div>
    )
}