import Image from 'next/image';
import React from 'react'


function demo() {
    return (
        <div>
        <ul>
            <li>
            <div className="card">
                <div>
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
            </div>
                </li>
            </ul>
        </div>
           
        
    )
}

export default demo


//RUNNING CODE

//   <div>
        
//             <div className="card" style={{width: "18rem"}}>
//             <Image 
//             src="/images/img.jpg"
//             width={2400}
//             height={1598}
//             layout="responsive"
//             className="card-img-top" alt="..." />
//             <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//             </div>
//             </div>
//         </div>

// const UserCard = ({ user }) => {

//     return (
//     <div className={styles.card}>
//     <Image src={`/images/logo.png`} width={200} height={200} />
//     <div className={styles.container}>
//     <h4><b>{user.first_name} {user.last_name}</b></h4>
//     <p>{user.email}</p>
//     <Link href={`/users/${user.id}`}>
//     <a className="button">Details</a>
//     </Link>
//     </div>
//     </div>
//     );
//     }
//     export default UserCard;