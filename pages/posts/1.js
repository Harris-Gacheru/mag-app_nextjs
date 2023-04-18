import Head from "next/head"
import Navbar from "../../components/navbar"
import SidePostContainer from "../../components/side-post"

export default function Post(){
    return(
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
                            <img src="https://www.nchealthinfo.org/wp-content/uploads/2019/08/GoodHealthInformation-768x477.jpg" alt="" className="rounded-full w-[200px] h-[200px]" />
                        </div>

                        <div className="flex flex-col items-center justify-center font-light mb-5">
                            <h3 className="mb-1 text-center text-white text-xs w-fit rounded-lg px-3 bg-red-500 drop-shadow">Health</h3>
                            <h4>Author: <span className="italic">John Doe</span></h4>
                            <p className="text-sm">January 2, 2023</p>
                        </div>

                        <h3 className="mb-3 font-bold text-2xl">Good Health Information</h3>

                        {/* content */}
                        <div className="text-justify font-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti distinctio ab rerum deleniti quod aliquam vel repellat incidunt non. Dicta amet quo temporibus cum a animi fuga aliquam vitae. Neque rerum vel harum nam accusamus reiciendis recusandae alias odit eos. Tenetur, similique cum qui, commodi, suscipit aperiam asperiores quidem beatae excepturi ipsa magnam. Voluptatum, reiciendis fugit libero quod iusto amet! Possimus officiis quos perspiciatis, quidem labore minus dolorum provident laborum officia omnis ab aspernatur quam dolorem cumque nesciunt illo alias in fugit et voluptates nihil amet laboriosam cum illum? Eos vel, aut consectetur dolor reprehenderit tenetur iusto! Perferendis, minima aut.
                        </div>
                    </div>
                </div>

                <div className="w-1/3 h-fit bg-white drop-shadow-sm p-3">
                    <h2 className="bg-black text-white p-2 font-semibold mb-5">Related posts</h2>

                    <div className="border-t border-slate-200">
                        {/* related posts */}
                        <SidePostContainer src= "https://www.nchealthinfo.org/wp-content/uploads/2019/08/GoodHealthInformation-768x477.jpg" title="Good Health Container" category="Health" author="John Doe" date="January 2, 2023"/>
                        <SidePostContainer src= "https://www.nchealthinfo.org/wp-content/uploads/2019/08/GoodHealthInformation-768x477.jpg" title="Good Health Container" category="Health" author="John Doe" date="January 2, 2023"/>
                    </div>
                </div>
            </div>
            </main>
        </div>
        </>
    )
}