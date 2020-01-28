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

function ResultadoSearchbar() {
    const imgSize = 226
    const largura = 306
    const alturaBase = 293, alturaFinal = 249
    const maxStep = 0.914675768 //um passo n pode diminuir mais que isso (valor em porcentagem)
    const minStep = 1.176706827 //um passo n pode aumentar mais que isso (valor em porcentagem)

    let range = [1, 2, 3]

    // seja n == range.size(), e X==step, queremos:  alturaBase*(X^n) = alturaFinal
    // então: x = raiz-n de (alturaFinal/alturaBase)
    let step = Math.pow(alturaFinal / alturaBase, 1 / range.length)
    step = Math.min(Math.max(step, maxStep), minStep)


    //trabalho em progresso, ta mal organizado mesmo
    const boxes = range.map((value, i) => {
        return (
            <div className='PostBox'>
                <div style={{
                    backgroundColor: 'green',
                    height: imgSize
                }}></div>

                <div className='PostBox_down' style={{
                    height: alturaBase * Math.pow(step, i + 1),
                    backgroundColor: 'white'
                }}>

                    <div className='PostBox_titulo'>
                        <span>Melanoma</span>
                    </div>
                    <ul className='PostBox_conteudo'>
                        <li className='PostBox_autor'></li>
                        <li className='PostBox_descricao'></li>
                        <li className='PostBox_tags'></li>
                        <li className='PostBox_interagirBtn'></li>
                    </ul>

                </div>
            </div>
        )
    })

    return (
        <div style={{ display: 'inline-flex' }}>
            {boxes}
        </div>
    )
}

class Main extends Component {
    render() {
        return (
            //<CarouselFeed className="CarouselFeed" />
            <div className="MainPageContainer">
                <CarouselSlider className="Slider" />

                {/*TODO: reorganizar esses tres abaixo para um componente só em outro arquivo*/}
                <Searchbar />
                <AbasSearchbar />
                <ResultadoSearchbar />
            </div>
        )
    }
}

export default Main;