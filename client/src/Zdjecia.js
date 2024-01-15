import React, { useEffect, useState } from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './Zdjecia.css'
import Gallery from './components/gallery/gallery';

export default function Home() {

    // const [backendData, setBackendData] = useState([{}])

    // useEffect(() => {
    //     fetch("/api").then(
    //         response => response.json()
    //     ).then(
    //         data => {
    //             setBackendData(data)
    //         }
    //     )
    // }, [])

    // return (
    //     <div>
    //         {(typeof backendData.users === 'undefined') ? (
    //             <p>Loading...</p>
    //         ) : (
    //             backendData.users.map((user, i) => (
    //                 <p key={i}>{user}</p>
    //             ))
    //         )}
    //     </div>
    // )
    
    return (<Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Zdjecia />} />
        </Route>
    </Routes>)
}

function Layout() {
    return (<>
        <header>
            <ul>
                <li>
                    <Link to="/">Zdjęcia</Link>
                </li>
            </ul>
        </header>
        <Outlet />
    </>)
}

function Zdjecia() {
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

    return (<main>
        <Gallery spots={spots} />
    </main>)
}