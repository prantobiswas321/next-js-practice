function NewsList({news}){
    return (
        <>
          <h1>List of News Articles</h1>
          {
            news.map(n => {
                return (
                    <div key={n?.id}>
                        <h2>{n?.id} {n?.title} | {n?.category}</h2>
                    </div>
                )
            })
          }
        </>
    )
}

export default NewsList

// export async function getStaticProps(){
//     const response = await fetch("http://localhost:4000/news");
//     const data = await response.json();
//     return {
//         props: {
//             news: data
//         }
//     }
// }

export async function getServerSideProps(){
    const response = await fetch("http://localhost:4000/news");
    const data = await response.json();
    return {
        props: {
            news: data
        }
    }
}