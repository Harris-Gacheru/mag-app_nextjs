import Head from "next/head"
import Link from "next/link"
import Navbar from "../../components/navbar"

export default function AuthorsListing(){
    return (
        <>
            <Head>
                <title>Mag-app</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-screen h-screen">
                <Navbar />

                <main className="w-screen h-[calc(100vh-56px)] bg-slate-100 p-5 overflow-y-auto overflow-x-hidden">
                    <div className="flex justify-center items-center gap-5">
                        <div className="w-[250PX] bg-white drop-shadow-sm">
                            <h4 className="font-bold text-xl text-center mb-3 py-3">Authors</h4>

                            {/* authors */}
                            <div className="">
                                <Link href={`/authors/1`} className="flex items-center gap-4 px-5 py-2 hover:bg-slate-100">
                                    <img src="/blank-profile.png" alt="" className="rounded-full w-[40px] h-[40px]" />
                                    <p>John Doe</p>
                                </Link>
                                <Link href={`/authors/1`} className="flex items-center gap-4 px-5 py-2 hover:bg-slate-100">
                                    <img src="/blank-profile.png" alt="" className="rounded-full w-[40px] h-[40px]" />
                                    <p>Harry Potter</p>
                                </Link>
                                <Link href={`/authors/1`} className="flex items-center gap-4 px-5 py-2 hover:bg-slate-100">
                                    <img src="/blank-profile.png" alt="" className="rounded-full w-[40px] h-[40px]" />
                                    <p>Mary Jane</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}