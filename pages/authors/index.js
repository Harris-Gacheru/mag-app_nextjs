import Head from "next/head"
import Link from "next/link"
import Navbar from "../../components/navbar"

export default function AuthorsListing({authors}){
    return (
        <>
            <Head>
                <title>Mag-app | Authors</title>
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
                                {
                                    authors.map(author => (
                                        <Link key={author.id} href={`/authors/${author.id}`} className="flex items-center gap-4 px-5 py-2 hover:bg-slate-100">
                                            <img src="/blank-profile.png" alt={author.name} className="rounded-full w-[40px] h-[40px]" />
                                            <p>{author.name}</p>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export async function getStaticProps(){
    const res = await fetch('http://127.0.0.1:8000/apis/authors/')
    const authors = await res.json()

    return {
        props: {
            authors,
        }
    }
}