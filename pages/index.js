import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/navbar';
import PostContainer from '../components/post';
import Category from '../components/category';

export default function Home({posts, categories}) {
  return (
    <>
      <Head>
        <title>Mag-app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen h-screen">
        <Navbar />

        <main className="w-screen h-[calc(100vh-56px)] bg-slate-100 p-5 overflow-y-auto overflow-x-hidden">
          <div className="flex gap-4 mb-3">
            <Link href='/posts/create' className='underline hover:decoration-blue-700 hover:text-blue-700'>Add Post</Link>
            <Link href='/categories/create' className='underline hover:decoration-blue-700 hover:text-blue-700'>Add Category</Link>
          </div>
          <div className="flex justify-between gap-5">
            <div className="w-4/5 bg-white drop-shadow-sm p-3">
              <h2 className="bg-black text-white p-2 font-semibold mb-5">Latest News</h2>

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
              <h2 className="bg-black text-white p-2 font-semibold mb-5">Topics</h2>

              <div className="border-t border-slate-200">
                {/* topics/ categories */}
                {
                  categories.map(category => (
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

export async function getStaticProps(){
  const posts_res = await fetch('http://127.0.0.1:8000/apis/articles/')
  const posts = await posts_res.json()

  const categories_res = await fetch('http://127.0.0.1:8000/apis/categories/')
  const categories = await categories_res.json()

  return {
    props: {posts, categories, },
  }  
}
