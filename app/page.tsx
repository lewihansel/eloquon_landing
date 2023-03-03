"use client"
import useScrollPosition from "hooks/useScrollPosition"
import { CaretDown } from "phosphor-react"

export default function Home() {
    const scrollPos = useScrollPosition()

    return (
        <main>
            {/* Navbar */}
            <div
                className={`fixed flex w-screen items-center justify-between bg-deep-green-500 py-4 px-6 sm:h-20 sm:px-20 ${
                    scrollPos > 40 ? "shadow-lg" : ""
                }`}
            >
                <div>
                    <img
                        alt="Eloquon Logo"
                        src="/logo/eloquon_logo.svg"
                        className="mb-2 w-full max-w-[100px] sm:max-w-[140px]"
                    />
                </div>
                <div className="hidden w-fit text-light-green-500 sm:flex">
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

            {/* Section: Hero */}
            <div className="flex min-h-screen w-full flex-col-reverse items-center justify-between gap-4 py-20 px-6 sm:flex-row sm:gap-16 sm:px-20">
                <div className="sm:max-w-xl">
                    <h2 className="mb-5 text-3xl font-bold leading-snug text-deep-orange-500 sm:text-5xl">
                        Professional English Bootcamp
                    </h2>
                    <p className="mb-8 leading-normal sm:text-xl">
                        Good command of English is a critical skill when it
                        comes to working for top consulting, multinational and
                        tech companies.
                    </p>
                    <button className="rounded-full bg-deep-orange-500 px-5 py-2 sm:text-lg">
                        Start Learning
                    </button>
                </div>

                <img
                    className="aspect-[4/3] w-full rounded-3xl object-cover sm:w-[36vw]"
                    src="https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress"
                    alt=""
                />
            </div>

            {/* Section 2 */}
            <div className="grid h-screen place-items-center px-6">
                <div className="flex w-full flex-wrap justify-center gap-4 sm:gap-6">
                    {new Array(3).fill("1").map((_, i) => (
                        <div
                            key={i}
                            className="aspect-video w-full max-w-[320px] rounded-2xl bg-light-green-400 object-cover p-6 text-deep-green-500 sm:p-8"
                        >
                            <img
                                className="mb-4 w-full rounded-lg bg-white"
                                src="https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=400&q=80"
                                alt=""
                            />
                            <h5 className="mb-2 text-xl font-bold">
                                Supportive speaking communities with 100+ alumni
                                members
                            </h5>
                            <p>
                                Amet et ad aliqua ut reprehenderit voluptate
                                dolore laboris dolore ullamco minim officia
                                nostrud culpa aliqua venia
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section 3 Testimony */}
        </main>
    )
}
