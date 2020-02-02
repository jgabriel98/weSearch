import React, { Component } from 'react'
import Slider from 'react-animated-slider';
//import 'react-animated-slider/build/horizontal.css';


import './Slider.css'

import leftArrowIcon from '../images/Seta.png'
import img1 from '../images/Retrato de mulher sorridente.webp'
import img2 from '../images/imagem de mao escrevendo.webp'


export default class CarouselSlider extends Component {

    getSlideItens = () => {
        const generateItem = (key, color, content) => {
            return <div className='Slide' key={key}>
                <div className='SlideLefttSide' style={{ backgroundColor: 'white' }} />
                <div className='SlideMiddle'>
                    {content}
                </div>
                <div className='SlideRightSide' style={{ backgroundColor: color }} />
            </div>
        }
        let itensConf = [
            generateItem('teste1', '#414141', [
                <span>descricao aqui</span>,
                <img src={img1} alt="retrato de mulher sorridente" />]),
            generateItem('teste2', '#B48755', [
                <span>descricao aqui</span>,
                <img src={img2} alt="imagem de mão escrevendo" />]),
            generateItem('item3', '#557357', [
                <span>descricao aqui</span>,
                <span>teste3</span>])

        ]

        return itensConf;
    }

    render() {
        const arrowIcon = {
            left: <img className="SliderArrowIcon" src={leftArrowIcon} alt='navegar para esquerda' />,
            right: <img className="SliderArrowIcon" src={leftArrowIcon} alt='navegar para direita' style={{ transform: 'rotate(180deg)' }} />
        };

        return (
            <Slider
                autoplay={7000}
                previousButton={arrowIcon.left}
                nextButton={arrowIcon.right}
                classNames={{
                    slider: "slider Slider",    //duas classes para manter o css padrão da classe do pacote
                    slide: "slide Slide",
                }}
            >
                {this.getSlideItens()}
            </Slider>)
    }
}