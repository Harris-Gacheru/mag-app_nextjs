import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/navbar';
import PostContainer from '../../components/post';
import Category from '../../components/category';

export default function ArticlesByCategory({posts, o_categories, category}) {
  return (
    <>
      <Head>
        <title>Mag-app | Article</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen h-screen">
        <Navbar />

        <main className="w-screen h-[calc(100vh-56px)] bg-slate-100 p-5 overflow-y-auto overflow-x-hidden">
          <div className="flex justify-between gap-5">
            <div className="w-4/5 bg-white drop-shadow-sm p-3">
              <h2 className="bg-black text-white p-2 font-semibold mb-5">{category.name} Articles</h2>

              {/* posts */}
              <div className="">
                {
                  posts.map(post => (
                    <PostContainer
                      key={post.id}
                      id={post.id}
                      src= "https://www.nchealthinfo.org/wp-content/uploads/2019/08/GoodHealthInformation-768x477.jpg" 
                      title={post.title} 
                      category={post.category.name} 
                      author={post.author.name} 
                      date={post.published_on} 
                      content={post.content}
                    />
                  ))
                }
              </div>
            </div>

            <div className="w-1/5 h-fit bg-white drop-shadow-sm p-3">
              <h2 className="bg-black text-white p-2 font-semibold mb-5">Other Topics</h2>

              <div className="border-t border-slate-200">
                {/* topics/ categories */}
                {
                    o_categories.map(category => (
                        <Category key={category.id} category={category} />
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
    const res = await fetch('http://127.0.0.1:8000/apis/categories/')
    const categories = await res.json()
    const paths = categories.map(category => ({params: {id: category.id.toString()}}))

    return {paths, fallback: false}
}

export async function getStaticProps({params}){
  const res = await fetch(`http://127.0.0.1:8000/apis/articles/category/${params.id}`)
  const posts = await res.json()

  const o_categories_res = await fetch(`http://127.0.0.1:8000/apis/categories/${params.id}`)
  const o_categories = await o_categories_res.json()

  const category_res = await fetch(`http://127.0.0.1:8000/apis/category/${params.id}`)
  const category = await category_res.json()

  return {
    props: {posts, o_categories, category},
  }  
}
