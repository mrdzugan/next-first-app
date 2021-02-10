import Link from "next/link";

const IndexPage = () => {
    return (
        <div>
            <Link href="/counter">
                <button>Counter page</button>
            </Link>
            <Link href="/todo">
                <button>Todo page</button>
            </Link>
        </div>
    )
}

export default IndexPage;