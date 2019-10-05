import React, { useState } from 'react'
//API
import api from '../../services/api'

export default function Login({ history }) {
    const [email, setEmail] = useState('')


    async function handleSubmit(event) {
        event.preventDefault()
        //Quando a chave tem o mesmo nome que o valor, só precisa usar a chave! 
        const response = await api.post('/sessions', { email })
        console.log("TCL: handleSubmit -> response", response)

        const { _id } = response.data
        console.log("TCL: handleSubmit -> _id ", _id)

        //Vamos precisar do id para usar na aplicação, então armazenaremos em local storage
        localStorage.setItem('user', _id)
        history.push('/dashboard')
    }
    return (
        <>
            <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong>para sua empresa</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail *</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <button className="btn" type="submit">Entrar</button>

            </form>
        </>
    )
}