import React, { useEffect, useState } from 'react'
//API
import api from '../../services/api'
//ROUTER/LINKS
import { Link } from 'react-router-dom'
//Styles
import './styles.css'

export default function Dashboard() {
    const [spots, setSpots] = useState([])
    //Quando se passa um array vazio no useEffect, ele executa apenas uma vez
    //Dentro do array, você pode passar o filtro

    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                headers: { user_id }
            });
            console.log(response.data)
            setSpots(response.data)
        }
        loadSpots();
    }, []);
    return (
        <>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `R$ ${spot.price}/dia` : `Gratuito`}</span>

                    </li>
                ))}
            </ul>
            <Link to="/new">
                <button className="btn">
                    Cadastrar novo spot
               </button>
            </Link>
        </>
    )
}