import Link from 'next/link';


function Blog(){
    return (
        <div>
            <Link href='/'>
               <a>Home</a>
            </Link>
            <h1>Blog page</h1>
            <Link href='/blog/first'>
                <a>Blog{"'"}s first page</a>
            </Link>
            <br/>
            <Link href='/blog/second'>
                <a>Blog{"'"}s second page</a>
            </Link>
        </div>
    )
}

export default Blog