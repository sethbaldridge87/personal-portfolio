import Link from "next/link"

export default function NotFound() {
    return (
        <section>
            <h1>Whoops!</h1>
            <p>Sorry, but it doesn't look like that page exists!</p>
            <Link href="/">Return Home</Link>
        </section>
    )
}