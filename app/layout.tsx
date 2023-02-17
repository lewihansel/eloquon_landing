import "./globals.css"
import { Montserrat } from "@next/font/google"

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            {/*
                <head /> will contain the components returned by the nearest parent
                head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
            */}
            <head />
            <body
                className={`${montserrat.variable} bg-deep-green-500 text-white`}
            >
                {children}
            </body>
        </html>
    )
}
