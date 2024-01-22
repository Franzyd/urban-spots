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
                    <img src={
                        (spot.imagename.includes("/"))
                        ? (spot.imagename)
                        : (process.env.PUBLIC_URL + '/spot-images/' + spot.imagename)
                    } title={(spot.description !== null ? spot.description + `
` : '') + 'miejsce: ' + spot.location + `
rating: ` + spot.rating} />
                    <p>{spot.title}</p>
                </article>
            ))
        )}
    </div>)
}
