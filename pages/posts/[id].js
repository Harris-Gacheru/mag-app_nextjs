import Head from "next/head"
import Navbar from "../../components/navbar"
import SidePostContainer from "../../components/side-post"

export default function Post({post, o_posts}){
    return(
        <>
        <Head>
            <title>Mag-app | Article</title>
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
                            <img src="https://www.nchealthinfo.org/wp-content/uploads/2019/08/GoodHealthInformation-768x477.jpg" alt="" className="rounded-full w-[200px] h-[200px]" />
                        </div>

                        <div className="flex flex-col items-center justify-center font-light mb-5">
                            <h3 className="mb-1 text-center text-white text-xs w-fit rounded-lg px-3 bg-red-500 drop-shadow">{post.category.name}</h3>
                            <h4>Author: <span className="italic">{post.author.name}</span></h4>
                            <p className="text-sm">{post.published_on}</p>
                        </div>

                        <h3 className="mb-3 font-bold text-2xl">{post.title}</h3>

                        {/* content */}
                        <div className="text-justify font-light">
                            {post.content}
                        </div>
                    </div>
                </div>

                <div className="w-1/3 h-fit bg-white drop-shadow-sm p-3">
                    <h2 className="bg-black text-white p-2 font-semibold mb-5">Related posts</h2>

                    <div className="border-t border-slate-200">
                        {/* related posts */}
                        {
                            o_posts.map(post => (
                                <SidePostContainer
                                    key= {post.id}
                                    id={post.id}
                                    src= "https://www.nchealthinfo.org/wp-content/uploads/2019/08/GoodHealthInformation-768x477.jpg"
                                    title={post.title}
                                    category={post.category.name}
                                    author={post.author.name}
                                    date={post.published_on}
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
    const res = await fetch('http://127.0.0.1:8000/apis/articles')
    const posts = await res.json()
    const paths = posts.map(post => ({params: {id: post.id.toString()}, }))

    return {paths, fallback: false}
}

export async function getStaticProps({params}){
    const post_res = await fetch(`http://127.0.0.1:8000/apis/article/${params.id}`)
    const post = await post_res.json()

    const o_posts_res = await fetch(`http://127.0.0.1:8000/apis/articles/${params.id}`)
    const o_posts = await o_posts_res.json()

    return {
        props: {post, o_posts, }
    }
}