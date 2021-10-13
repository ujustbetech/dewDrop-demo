import React from 'react'
import Image from 'next/image';

function demowithdata() {
    return (
        <div>
        {['1','2','3','5','6','7'].map((path)=>{
            return(
                <div key={path}>
                <Image src={`/${path}.jpg`} alt='demos' width='300' height="300" />
                

                </div>
            )
        })}
        
             
            
        </div>
    )
}

export default demowithdata
