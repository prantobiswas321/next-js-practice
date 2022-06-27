import { useRouter } from "next/router";

function News({news}){
    const router = useRouter();

    if(router.isFallback){
        return <div>
            Loading...
        </div>
    }
    
    return (
        <div>
            <h2>
                {news?.id} {news?.title} {news?.category}
            </h2>
            <p>{news?.description}</p>
            <hr />
        </div>
    )
}

export default News

export async function getStaticProps(context){
    const {params} = context;
    const response = await fetch(`http://localhost:4000/news/${params.newsId}`);
    const data = await response.json();
    return {
        props: {
            news: data
        }
    }
}

export async function getStaticPaths(){
    return {
        paths: [{params: {newsId: '1'}}],
        fallback: true
    }
}