import { Link } from "react-router-dom"

const UniconFind = () => {
    return (
        <main className='relative min-h-screen w-full flex flex-col'>
            <p className="absolute w-full h-screen flex items-center justify-center -z-10 uppercase text-[#a5a3a0]">
                coming soon
            </p>
            <section className="h-screen flex gap-4">
                <div className="w-2/3 flex items-start justify-start my-5">
                    <div className="flex flex-col my-10 ml-[7.5rem]">
                        <Link to='/' className="hover:text-[#5a524b] uppercase text-[#a5a3a0]">
                            back
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default UniconFind