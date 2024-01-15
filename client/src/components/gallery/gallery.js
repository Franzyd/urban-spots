import React from 'react'
import './gallery.css'

export default function Gallery({spots}) {
    return (<div className='gallery'>
        {(typeof spots.data === 'undefined') ? (
            <p>Loading...</p>
        ) : (
            spots.data.map((spot, i) => (
                <article key={i} className='spot'>
                    <img src={process.env.PUBLIC_URL + '/spot-images/' + spot.imagename} />
                </article>
            ))
        )}
    </div>)
}
