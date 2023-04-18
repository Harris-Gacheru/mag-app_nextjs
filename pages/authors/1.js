import Head from "next/head"
import Navbar from "../../components/navbar"
import SidePostContainer from "../../components/side-post"
import SideAuthor from "../../components/author"

export default function Author(){
    return (
        <>
            <Head>
                <title>Article | Article title</title>
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

                            <h4 className="mb-3 font-light text-center">Author: <span className="italic">John Doe</span></h4>

                            {/* bio */}
                            <h3 className="mb-2 font-bold text-2xl">Bio</h3>
                            <div className="mb-3 text-justify font-light">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti distinctio ab rerum deleniti quod aliquam vel repellat incidunt non. Dicta amet quo temporibus cum a animi fuga aliquam vitae. Neque rerum vel harum nam accusamus reiciendis recusandae alias odit eos. Tenetur, similique cum qui, commodi, suscipit aperiam asperiores quidem beatae excepturi ipsa magnam. Voluptatum, reiciendis fugit libero quod iusto amet! Possimus officiis quos perspiciatis, quidem labore minus dolorum provident laborum officia omnis ab aspernatur quam dolorem cumque nesciunt illo alias in fugit et voluptates nihil amet laboriosam cum illum? Eos vel, aut consectetur dolor reprehenderit tenetur iusto! Perferendis, minima aut.
                            </div>

                            {/* posts */}
                            <h3 className="mb-2 font-bold text-2xl">Posts</h3>
                            <div className="">
                                <SidePostContainer src= "https://www.nchealthinfo.org/wp-content/uploads/2019/08/GoodHealthInformation-768x477.jpg" title="Good Health Container" category="Health" author="John Doe" date="January 2, 2023"/>
                                <SidePostContainer src= "https://www.nchealthinfo.org/wp-content/uploads/2019/08/GoodHealthInformation-768x477.jpg" title="Good Health Container" category="Health" author="John Doe" date="January 2, 2023"/>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/3 h-fit bg-white drop-shadow-sm p-3">
                        <h2 className="bg-black text-white p-2 font-semibold mb-5">Authors</h2>

                        <div className="border-t border-slate-200">
                            {/* other authors */}
                            <SideAuthor name='Mary Jane'/>
                            <SideAuthor name='Harry Potter'/>
                        </div>
                    </div>
                </div>
                </main>
            </div>
        </>
    )
}