import Link from "next/link";
import Layout from "./layout";

export default function Blog() {
    return (
        <Layout>
            <Link href='/blog'>
                <div>Blog page</div>
            </Link>
        </Layout>
    )
}