import React, { useEffect } from 'react'
//API
import api from '../../services/api'

export default function Dashboard() {
    //Quando se passa um array vazio no useEffect, ele executa apenas uma vez
    //Dentro do array, você pode passar o filtro

    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                headers: { user_id }
            });
            console.log(response.data)
        }
        loadSpots();
    }, []);
    return <h1>Dashboard</h1>
}