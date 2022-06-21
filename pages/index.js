import Link from 'next/link';
import { useRouter } from 'next/router';

function Home(){

  const router = useRouter();

  const handleClick = e =>{
    console.log('Order placed successfully');
    router.push('/product');
  }
  return (
    <div>
      <h1>This is Home</h1>
        <Link href='/blog'>
           <a>Blog</a>
        </Link>
        <Link href='/product'>
           <a>Products</a>
        </Link>
        <button onClick={handleClick}>
           Place Order
        </button>
    </div>
  )
}

export default Home