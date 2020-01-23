import React, { Component } from 'react'
import CarouselSlider from '../components/Slider'
import Searchbar from '../components/Searchbar'

import './Main.css'

function AbasSearchbar(){
    return (
        <div>
            <ul>
                <li>Todos os resultados</li>
                <li>Pesquisas</li>
                <li>Divulgação científica</li>
                <li>Vagas</li>
            </ul>
        </div>
    )
}

class Main extends Component {
    render() {
        return (
            //<CarouselFeed className="CarouselFeed" />
            <div className="MainPageContainer">
                <CarouselSlider className="Slider" />
                <Searchbar />
                <AbasSearchbar />
            </div>

        )
    }
}

export default Main;