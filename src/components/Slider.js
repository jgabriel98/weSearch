import React, { Component } from 'react'
import Slider from 'react-animated-slider';
//import 'react-animated-slider/build/horizontal.css';


import './Slider.css'

import leftArrowIcon from '../images/Seta.png'
import imgTeste from '../images/imagemTeste.jpg'


export default class CarouselSlider extends Component {

    getSlideItens = () => {
        return ([
            <div className='SlideItem' key='teste1'><img src={imgTeste} alt="imagem de teste sem significado"/></div>,
            <div className='SlideItem' key='teste2'><span>teste</span></div>,
            <div className='SlideItem' key='teste3'><span>teste3</span></div>
        ])
    }

    render() {
        const arrowIcon = {
            left: <img className="SliderArrowIcon" src={leftArrowIcon} alt='navegar para esquerda' />,
            right: <img className="SliderArrowIcon" src={leftArrowIcon} alt='navegar para direita' style={{ transform: 'rotate(180deg)' }} />
        }

        return (
            <Slider
                autoplay={7000}
                previousButton={arrowIcon.left}
                nextButton={arrowIcon.right}
                classNames={{
                    slider: "slider Slider",    //duas classes para manter o css padrão da classe do pacote
                    slide: "slide SlideItem",
                }}
            >
                {this.getSlideItens()}
            </Slider>)
    }
}