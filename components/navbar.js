import Link from "next/link"

export default function Navbar(){
    return(
        <div className="w-screen h-14 bg-black text-white p-4 flex justify-between items-center">
            <h1 className="font-bold text-xl">MAG-APP</h1>
            <ul className="flex gap-10">
                <li>
                    <Link href='/' className="hover:text-red-500">Home</Link>
                </li>
                <li>
                    <Link href='/categories' className="hover:text-red-500">Categories</Link>
                </li>
                <li>
                    <Link href='/authors' className="hover:text-red-500">Authors</Link>
                </li>
            </ul>
        </div>
    )
}