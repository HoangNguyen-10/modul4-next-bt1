import Link from "next/link";

export default function Layout({ children }) {
    return (
        <>

            <ul>
                <li>
                    <Link href='/'>Homepage</Link>
                </li>
                <li>
                    <Link href='/blog'>Blog</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
            <hr></hr>
            <h1>{children}</h1>

        </>
    )
}