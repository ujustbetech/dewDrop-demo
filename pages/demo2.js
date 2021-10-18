import { Thead } from '@chakra-ui/table'
import React, { useEffect, useState } from 'react'



function fetchdata(){
    fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(json => console.log(json))
  .then((json) => {
      //console.log("test",json),
            //   setstate(json)
            })
}

// useEffect(() => {
//     fetchdata()
    
// }, [])

function demo2({ posts }) {
    return (
        
        <>
        
        <table className="table table-hover" border="1">
            <thead>

                <tr>
                   
                        <th>Id</th>
                        <th>Title</th>
                 
                </tr>
            </thead>
          
            <tbody>
               

                    
        {posts.map((post) => (
          

            <tr>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                </tr>
                 
            
        ))}
                </tbody>
            </table>
        </>
        
          
        
    )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}

export default demo2
