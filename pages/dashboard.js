import { useEffect, useState } from "react"

function Dashboard(){

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(()=>{
        async function fetchDashboardData(){
            const response = await fetch("http://localhost:4000/dashboard");
            const data = await response.json();
            setData(data);
            setLoading(!loading);
        }
        fetchDashboardData();
    },[])

    return (
        <>
            {
                loading ? <h2>Loading...</h2>
                :
                <div>
                    <h2>Dashboard</h2>
                    <h2>Posts: {data?.posts}</h2>
                    <h2>Likes: {data?.likes}</h2>
                    <h2>Followers: {data?.followers}</h2>
                    <h2>Following: {data?.following}</h2>
                </div>
            }
        </>
    )
}
export default Dashboard