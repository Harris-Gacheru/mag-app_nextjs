import Head from "next/head"
import Link from "next/link"
import Navbar from "../../components/navbar"
import { useState } from "react"

export default function CreatePost({authors, categories}){
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        author: "",
        category: "",
        image: "",
        content: ""
    })

    const handleInput = (e) => {
        const field = e.target.name
        const fieldValue = e.target.value

        if (field == 'author' || field == 'category'){
            JSON.parse(fieldValue)
        }


        setFormData(prevState => ({
            ...prevState,
            [field]: fieldValue
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(formData)
        const data = new FormData()
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value)
        })

        fetch('http://127.0.0.1:8000/apis/article/add/', {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'accept': 'application/json',
            }
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data)
        })
    }

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

                            {/* action="http://127.0.0.1:8000/apis/article/add/" */}

                            <form method="POST" action="http://127.0.0.1:8000/apis/article/add/" onSubmit={handleSubmit}>
                                <div className="flex gap-2">
                                    <div className="w-1/2 mb-3 flex flex-col">
                                        <label htmlFor="title" className="font-semibold mb-1">Title</label>
                                        <input type="text" className="py-1 px-2 border outline-0 focus:border-blue-700 rounded" name="title" onChange={handleInput}/>
                                    </div>
                                    <div className="w-1/2 mb-3 flex flex-col">
                                        <label htmlFor="publish_date" className="font-semibold mb-1">Published Date</label>
                                        <input type="date" className="py-1 px-2 border outline-0 focus:border-blue-700 rounded" name="date"  onChange={handleInput}/>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <div className="w-1/2 mb-3 flex flex-col">
                                        <label htmlFor="author" className="font-semibold mb-1">Author</label>
                                        <select name="author" id="author" className="py-1 px-2 border outline-0 focus:border-blue-700 rounded" onChange={handleInput}>
                                            <option>Select Author</option>
                                            {
                                                authors && authors.map(author => (
                                                    <option key={author.id} value={author.id}>{author.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="w-1/2 mb-3 flex flex-col">
                                        <label htmlFor="category" className="font-semibold mb-1">Category</label>
                                        <select name="category" id="category" className="py-1 px-2 border outline-0 focus:border-blue-700 rounded" onChange={handleInput}>
                                            <option>Select Category</option>
                                            {
                                                categories && categories.map(category => (
                                                    <option key={category.id} value={category.id}>{category.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-3 flex flex-col">
                                    <label htmlFor="image" className="font-semibold mb-1">Image</label>
                                    <input type="text" className="py-1 px-2 border outline-0 focus:border-blue-700 rounded" name="image" onChange={handleInput}/>
                                </div>

                                <div className="mb-3 flex flex-col">
                                    <label htmlFor="content" className="font-semibold mb-1">Content</label>
                                    <textarea name="content" id="content" cols="5" rows="5" className="py-1 px-2 border outline-0 focus:border-blue-700 rounded" onChange={handleInput}></textarea>
                                </div>

                                <div className="flex justify-center">
                                    <button className="bg-blue-700 text-white px-4 py-1 rounded hover:bg-blue-800" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export async function getStaticProps(){
    const authors_res = await fetch('http://127.0.0.1:8000/apis/authors/')
    const authors = await authors_res.json() 

    const categories_res = await fetch('http://127.0.0.1:8000/apis/categories/')
    const categories = await categories_res.json() 

    return {
        props: {authors, categories,},
    }
}