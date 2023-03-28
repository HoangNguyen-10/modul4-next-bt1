import Link from "next/link";
import Layout from "./layout";

export default function About() {

    return (
        <Layout>
            <Link href='/about'>
                <div>About page</div>
            </Link>
        </Layout>
    )
}