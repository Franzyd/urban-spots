import React, { useEffect, useState } from 'react'
import './gallery.css'

export default function Gallery() {
    const [spots, setSpots] = useState([{}])

    useEffect(() => {
        fetch("/spots").then(
            response => response.json()
        ).then(
            data => {
                setSpots(data)
            }
        )
    }, [])

    return (<div className='gallery'>
        {(typeof spots.data === 'undefined') ? (
            <p className='spot'>Loading...</p>
        ) : (
            spots.data.map((spot, i) => (
                <article key={i} className='spot'>
                    <img src={process.env.PUBLIC_URL + '/spot-images/' + spot.imagename} />
                </article>
            ))
        )}
    </div>)
}
