import React, { useState } from 'react'
import styles from "/styles/Listing.module.scss";
import fire from '../config/fire-config';
import { firestore } from '../config/fire-config';

const listmsg = () => {
    const [hook, setHook] = useState();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [notification, setNotification] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();


     //firebase
        fire.Firestore()
         .collection('message')
         .add({
          title: title,
          content: content,
        });
   

        setTitle('');
        setContent('');

    setNotification('Message created');
    setTimeout(() => {
      setNotification('')
    }, 2000)

}
    return (
        <div>
         <h2>Add message</h2>
       
             {notification}

         <form onSubmit={handleSubmit}>
            <div>
                Title<br />
                <input type="text" value={title} 
                onChange={({target}) => setTitle(target.value)} />
            </div>
            <div>
                Content<br />
                <textarea value={content} 
                onChange={({target}) => setContent(target.value)} />
            </div>
                <button type="submit">Save</button>
        </form>
            {/* <div className={styles.CardWrapper}>
                <h2>Message List</h2>
                <div className={`${styles.listingCard} `}>

                    <img src="/images/img.jpg"  width="300" height="200" />
                        <span>Name:</span>
                        <button>Comment</button>
                        <button>Like</button>
                </div>
            </div> */}
        </div>   
    )
}

export default listmsg


{/* <div className="card" style={{width: "18rem"}}>
                    <Image 
                    src="/images/img.jpg"
                    width={2400}
                    height={1598}
                    layout="responsive"
                    className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
         */}