import React from 'react'
import styles from "/styles/Listing.module.scss";

function about() {
    return (
        <div className={styles.CardWrapper}>
          <h2>Invitation Sent</h2>
              <div className={`${styles.listingCard} ${styles.columnflex}`}>

              <img src="/images/img.jpg" />
                <span>Name:</span>
                <button></button>

                </div>
           
           
          
          
        </div>
    )
}

export default about


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