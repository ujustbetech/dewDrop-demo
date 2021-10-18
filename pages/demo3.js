import React, { useEffect, useState } from 'react'
import styles from "/styles/Listing.module.scss";





function demo3() {
    const [state, setstate] = useState([]);
    //const [staticd, setstatic] = useState([1,2,3,4])
    function fetchdata() {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            // .then(json => console.log(json))
            .then(json => {
                // console.log(json);
                setstate(json)
            })
    }


    useEffect(() => {
        fetchdata()

    }, [])
    return (
        <div>

            <div className={styles.CardWrapper}>
                <h2>Message List</h2>


                {state.map((post) => (
                    <div className={`${styles.listingCard} ${styles.columnflex}`}>

                        <img src="/images/img.jpg" />
                        <button>{post.id}</button>
                        <span>{post.title}</span>
                       

                    </div>
                ))}




            </div>
           
        </div>
    )
}

export default demo3
