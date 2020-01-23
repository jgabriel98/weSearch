import React, {Component} from 'react'

import './Searchbar.css'
import filtroIcon from '../images/Filtro.webp'


export default class Searchbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            entrada: '',
            filtros: {}
        }
    }

    render() {
        return (
            <form className="SearchbarContainer">
                <input type="text "placeholder="Pesquisar no wesearch..." />
                <img className="SearchbarFilter"src={filtroIcon} alt="filtro de pesquisa" />
            </form>
        )
    }
}