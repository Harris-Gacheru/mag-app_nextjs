import Head from "next/head"
import {useRouter} from "next/router"
import { useState } from "react"
import Navbar from "../../components/navbar"

export default function CreateCategory(){
    const [formData, setFormData] = useState({
        name: "",
        description: ""
    })

    
    const [formSuccess, setFormSuccess] = useState(false)
    const [formSuccessMessage, setFormSuccessMessage] = useState("")
    const router = useRouter()

    const handleInput = (e) => {
        const field = e.target.name
        const fieldValue = e.target.value

        setFormData(prevState => ({
            ...prevState,
            [field]: fieldValue
        }))
    }

    const submitForm = (e) => {
        e.preventDefault()

        const formURL = e.target.action
        
        const data = new FormData()

        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        })

        fetch(formURL, {
            method: "POST",
            body: data,
            headers: {
              'accept': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((data) => {
          setFormData({ 
            name: "", 
            email: "", 
            message: "" 
          })
    
          setFormSuccess(true)
          setFormSuccessMessage(data.message)

          setTimeout(() => {
            router.push('/')
          }, 2000);
        })
    }

    return (
        <>
            <Head>
                <title>Mag-App | Category Create</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-screen h-screen">
                <Navbar />

                <main className="w-screen h-[calc(100vh-56px)] bg-slate-100 p-5 overflow-y-auto overflow-x-hidden">
                    <div className="flex justify-center items-center gap-5">
                        <div className="w-1/3 bg-white drop-shadow-sm p-3">
                            {
                                formSuccess ?
                                    <div className="text-green-700">{formSuccessMessage}!!</div>
                                    :

                                    <>

                                        <h4 className="font-bold text-xl text-center mb-3">Add Category</h4>

                                        <form method="POST" action="http://127.0.0.1:8000/apis/category/add/" onSubmit={submitForm}>
                                            <div className="mb-3 flex flex-col">
                                                <label htmlFor="name" className="font-semibold mb-1">Name</label>
                                                <input type="text" className="py-1 px-2 border outline-0 focus:border-blue-700 rounded" name="name" onChange={handleInput} value={formData.name}/>
                                            </div>

                                            <div className="mb-3 flex flex-col">
                                                <label htmlFor="description" className="font-semibold mb-1">Description</label>
                                                <textarea name="description" id="description" cols="5" rows="5" className="py-1 px-2 border outline-0 focus:border-blue-700 rounded" onChange={handleInput} value={formData.description}></textarea>
                                            </div>

                                            <div className="flex justify-center">
                                                <button className="bg-blue-700 text-white px-4 py-1 rounded hover:bg-blue-800" type="submit">Submit</button>
                                            </div>
                                        </form>
                                    </>
                            }
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}