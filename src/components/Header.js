import React, { Component } from 'react'
//import { Link, BrowserRouter } from 'react-router-dom'

import './Header.css'
import logo from '../images/Logo - Branca.webp'
import iconeUsuario from '../images/User.webp'

function Menu(props) {
    return (
        <nav className="MenuNavigation">
            <ul>
                {props.itens.map(item => <li>{item}</li>)}
            </ul>
        </nav>)
}

function ItemMenu(props) {
    //return <Link to
    return (
        <a className="NavItemMenu" href={props.rota}>
            <div>{props.text}</div>
        </a>)
}


export default class Header extends Component {

    render() {
        const itensMenu = [
            <ItemMenu rota='/pesquisas' text="Pesquisas" />,
            <ItemMenu rota="/editais" text="Editais" />,
            <ItemMenu rota="/vagas" text="Vagas" />,
            <ItemMenu rota="/sobre" text="Sobre" />,
            <ItemMenu rota="/noticias" text="Notícias" />,
            <ItemMenu rota="/para_Empresas" text="Para Empresas" />
        ]
        return (
            <header className="Header">
                <div className="Container">
                    <img src={logo} className="Logo" alt='logo We search' />
                    <Menu itens={itensMenu} />
                    <img src={iconeUsuario} className="IconeUser" alt='ícone de usuário' />
                </div>
            </header>
        )
    }
}