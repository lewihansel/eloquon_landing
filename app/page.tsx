"use client"
import { CaretDown } from "phosphor-react"

export default function Home() {
    return (
        <main>
            {/* Navbar */}
            <div className="fixed flex h-20 w-screen items-center justify-between px-20">
                <div>
                    <img
                        className="w-full max-w-[140px]"
                        src="/logo/eloquon_logo.svg"
                        alt="Eloquon Logo"
                    />
                </div>
                <div className="flex w-fit text-light-green-500">
                    <button className="flex items-center gap-1 p-3">
                        Individual <CaretDown size="12" />
                    </button>
                    <button className="flex items-center gap-1 p-3">
                        Corporate <CaretDown size="12" />
                    </button>
                    <button className="flex items-center gap-1 p-3">
                        Articles <CaretDown size="12" />
                    </button>
                    <button className="flex items-center gap-1 p-3">
                        About Us
                    </button>
                </div>
            </div>

            {/* Hero */}
            <div className="flex h-screen w-full items-center justify-between gap-16 py-20 px-20">
                <div className="max-w-xl">
                    <h2 className="mb-5 text-5xl font-bold leading-snug text-deep-orange-500">
                        Professional English Bootcamp
                    </h2>
                    <p className="mb-8 text-xl leading-normal">
                        Good command of English is a critical skill when it
                        comes to working for top consulting, multinational and
                        tech companies.
                    </p>
                    <button className="rounded-full bg-deep-orange-500 px-5 py-2 text-lg">
                        Start Learning
                    </button>
                </div>

                <img
                    className="aspect-[4/3] w-[36vw] rounded-3xl object-cover"
                    src="https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress"
                    alt=""
                />
            </div>
        </main>
    )
}
