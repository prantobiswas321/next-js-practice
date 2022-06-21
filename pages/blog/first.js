import Link from 'next/link';

function FirstBlog(){
    return (
      <>
        <Link href='/'>
            <a>Home</a>
        </Link>
        <Link href='/blog'>
            <a>Blog</a>
        </Link>
        <h1>First Blog page</h1>
      </>
    )
}

export default FirstBlog