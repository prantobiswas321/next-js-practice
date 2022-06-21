import Link from 'next/link';


function SecondBlog(){
    return (
     <div>
        <Link href='/'>
            <a>Home</a>
        </Link>
        <Link href='/blog'>
            <a>Blog</a>
        </Link>
        <h1>Second Blog page</h1>
     </div>
    )
}

export default SecondBlog