import React, { Component } from 'react'
import CarouselSlider from '../components/Slider'
import Searchbar from '../components/Searchbar'

import './Main.css'

function AbasSearchbar() {
    const lineDecoration = <div data-border-width="1" style={{
        transformOrigin: 'center',
        width: '486px',
        borderTop: '1px solid rgba(65, 65, 65, 0.1)',
    }}>
    </div>
    return (
        <div className='AbasSearchbar'>
            {lineDecoration}
            <ul>
                <li>Todos os resultados</li>
                <li>Pesquisas</li>
                <li>Divulgação científica</li>
                <li>Vagas</li>
            </ul>
            {lineDecoration}
        </div>
    )
}

function ResultadoSearchbar(){

    return (
        <div></div>
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
                <ResultadoSearchbar />
            </div>
        )
    }
}

export default Main;