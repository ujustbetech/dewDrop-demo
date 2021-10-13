import React, { useEffect } from 'react'

const [state, setstate] = useState([])

function fetchdata(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  .then((json) => {
      //console.log("test",json),
              setstate(json)
            })
}

useEffect(() => {
    fetchdata()
    
}, [])

function demo2({ posts }) {
    return (
        <ul>
            {posts.map((post) => (
                <li>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
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
