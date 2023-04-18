import Head from "next/head"
import Link from "next/link"
import Navbar from "../../components/navbar"

export default function CreateCategory(){
    return (
        <>
            <Head>
                <title>Category | Create</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-screen h-screen">
                <Navbar />

                <main className="w-screen h-[calc(100vh-56px)] bg-slate-100 p-5 overflow-y-auto overflow-x-hidden">
                    <div className="flex justify-center items-center gap-5">
                        <div className="w-1/3 bg-white drop-shadow-sm p-3">
                            <h4 className="font-bold text-xl text-center mb-3">Add Category</h4>

                            <form>
                                <div className="mb-3 flex flex-col">
                                    <label htmlFor="name" className="font-semibold mb-1">Name</label>
                                    <input type="text" className="py-1 px-2 border outline-0 focus:border-blue-700 rounded" />
                                </div>

                                <div className="mb-3 flex flex-col">
                                    <label htmlFor="description" className="font-semibold mb-1">Description</label>
                                    <textarea name="description" id="description" cols="5" rows="5" className="py-1 px-2 border outline-0 focus:border-blue-700 rounded"></textarea>
                                </div>

                                <div className="flex justify-center">
                                    <button className="bg-blue-700 text-white px-4 py-1 rounded hover:bg-blue-800">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}