import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/navbar';
import PostContainer from '../components/post';
import Category from '../components/category';

export default function Home() {
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
                <PostContainer src= "https://www.nchealthinfo.org/wp-content/uploads/2019/08/GoodHealthInformation-768x477.jpg" title="Good Health Container" category="Health" author="John Doe" date="January 2, 2023" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, cum inventore! Vero in porro doloremque libero eum officia cumque id."/>
                <PostContainer src= "https://www.nchealthinfo.org/wp-content/uploads/2019/08/GoodHealthInformation-768x477.jpg" title="AI Robot" category="Technology" author="Harry Potter" date="January 2, 2023" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, cum inventore! Vero in porro doloremque libero eum officia cumque id."/>

              </div>
            </div>

            <div className="w-1/5 h-fit bg-white drop-shadow-sm p-3">
              <h2 className="bg-black text-white p-2 font-semibold mb-5">Topics</h2>

              <div className="border-t border-slate-200">
                {/* topics/ categories */}
                <Category name='Science' /> 
                <Category name='Health' /> 
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
