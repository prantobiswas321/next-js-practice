import Link from "next/link";
import { useRouter } from "next/router"



function ProductDetails(){
    const router = useRouter();
    const productId = router.query.productId;
    return (
        <>
            <Link href='/product'>
                <a>Product</a>
            </Link>
            <h1>Details about product {productId} </h1>
        </>
    )
}

export default ProductDetails