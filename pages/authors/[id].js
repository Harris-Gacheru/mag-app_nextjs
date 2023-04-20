import Head from "next/head"
import Navbar from "../../components/navbar"
import SidePostContainer from "../../components/side-post"
import SideAuthor from "../../components/author"

export default function Author({author, posts, o_authors}){
    return (
        <>
            <Head>
                <title>Mag-App | Author</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-screen h-screen">
                <Navbar />

                <main className="w-screen h-[calc(100vh-56px)] bg-slate-100 p-5 overflow-y-auto overflow-x-hidden">
                <div className="flex justify-between gap-5">
                    <div className="w-2/3 bg-white drop-shadow-sm p-3">
                        {/* post */}
                        <div className="">
                            <div className="flex justify-center items-center mb-3">
                                <img src="/blank-profile.png" alt="" className="rounded-full w-[200px] h-[200px]" />
                            </div>

                            <h4 className="mb-3 font-light text-center">Author: <span className="italic">{author.name}</span></h4>

                            {/* bio */}
                            <h3 className="mb-2 font-bold text-2xl">Bio</h3>
                            <div className="mb-3 text-justify font-light">{author.bio}</div>

                            {/* posts */}
                            <h3 className="mb-2 font-bold text-2xl">Posts</h3>
                            <div className="">
                                {
                                    posts.data.length > 0 ? (
                                        posts.data.map(post => (
                                            <SidePostContainer
                                                key={post.id}
                                                src= "https://www.nchealthinfo.org/wp-content/uploads/2019/08/GoodHealthInformation-768x477.jpg"
                                                title={post.title}
                                                category={post.category.name}
                                                author={post.author.name}
                                                date={post.published_on}
                                            />
                                        ))

                                    ) : (
                                        <p className="font-light">{posts.message}</p>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <div className="w-1/3 h-fit bg-white drop-shadow-sm p-3">
                        <h2 className="bg-black text-white p-2 font-semibold mb-5">Authors</h2>

                        <div className="border-t border-slate-200">
                            {/* other authors */}
                            {
                                o_authors.map(author => (
                                    <SideAuthor
                                        key={author.id}
                                        id={author.id}
                                        name={author.name}
                                    />
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

export async function getStaticPaths(){
    const authors_res = await fetch('http://127.0.0.1:8000/apis/authors/')
    const authors = await authors_res.json()

    const paths = authors.map(author => ({
        params: {id: author.id.toString(),}
    }))

    return {paths, fallback: false}
}

export async function getStaticProps({params}){
    const author_res = await fetch(`http://127.0.0.1:8000/apis/author/${params.id}`)
    const author = await author_res.json()

    const posts_res = await fetch(`http://127.0.0.1:8000/apis/articles/author/${params.id}/`)
    const posts = await posts_res.json()

    const o_authors_res = await fetch(`http://127.0.0.1:8000/apis/authors/${params.id}/`)
    const o_authors = await o_authors_res.json()

    return {
        props: {author, posts, o_authors, }
    }
}