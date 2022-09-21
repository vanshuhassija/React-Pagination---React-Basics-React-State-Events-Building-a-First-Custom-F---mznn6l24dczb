import React from 'react'
import { PaginationButtonsList } from './PaginationButtonsList';
import { Post } from './Post';


const PostList = () => {
    const [posts,setPosts]=React.useState([]);
    const [loading,setLoading]=React.useState(false);
    const [currentPage,setCurrentPage]=React.useState(1);

    async function fetchPaginatedPosts(){
        setLoading(true)
        const postsResponse=await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=5`);
        const jsonResponse=await postsResponse.json();
        setPosts(jsonResponse);
        setLoading(false);
    }
    
    React.useEffect(()=>{
         fetchPaginatedPosts()
    },[currentPage])


    const getPageData=(page)=>{
        setCurrentPage(page)
    }

    if(loading){
        return <h1 id="loader" >Loading...</h1>
    }

    
    
    return (
        <>
        {posts.map((post)=>{
            return <Post post={post}/>
        })}
        <PaginationButtonsList currentPage={currentPage} getPageData={getPageData}/>
        </>
    )
}

export { PostList }