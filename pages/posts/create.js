import Head from "next/head"
import Link from "next/link"
import Navbar from "../../components/navbar"

export default function CreatePost(){
    return (
        <>
            <Head>
                <title>Post | Create</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-screen h-screen">
                <Navbar />

                <main className="w-screen h-[calc(100vh-56px)] bg-slate-100 p-5 overflow-y-auto overflow-x-hidden">
                    <div className="flex justify-center items-center gap-5">
                        <div className="w-1/3 bg-white drop-shadow-sm p-3">
                            <h4 className="font-bold text-xl text-center mb-3">Add Post</h4>

                            <form>
                                <div className="flex gap-2">
                                    <div className="w-1/2 mb-3 flex flex-col">
                                        <label htmlFor="title" className="font-semibold mb-1">Title</label>
                                        <input type="text" className="py-1 px-2 border outline-0 focus:border-blue-700 rounded" />
                                    </div>
                                    <div className="w-1/2 mb-3 flex flex-col">
                                        <label htmlFor="publish_date" className="font-semibold mb-1">Published Date</label>
                                        <input type="date" className="py-1 px-2 border outline-0 focus:border-blue-700 rounded" />
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <div className="w-1/2 mb-3 flex flex-col">
                                        <label htmlFor="author" className="font-semibold mb-1">Author</label>
                                        <select name="author" id="author" className="py-1 px-2 border outline-0 focus:border-blue-700 rounded">
                                            <option value="">John Doe</option>
                                            <option value="">Mary Jane</option>
                                        </select>
                                    </div>
                                    <div className="w-1/2 mb-3 flex flex-col">
                                        <label htmlFor="category" className="font-semibold mb-1">Category</label>
                                        <select name="category" id="category" className="py-1 px-2 border outline-0 focus:border-blue-700 rounded">
                                            <option value="">Health</option>
                                            <option value="">Science</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-3 flex flex-col">
                                    <label htmlFor="image" className="font-semibold mb-1">Image</label>
                                    <input type="text" className="py-1 px-2 border outline-0 focus:border-blue-700 rounded" />
                                </div>

                                <div className="mb-3 flex flex-col">
                                    <label htmlFor="content" className="font-semibold mb-1">Content</label>
                                    <textarea name="content" id="content" cols="5" rows="5" className="py-1 px-2 border outline-0 focus:border-blue-700 rounded"></textarea>
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