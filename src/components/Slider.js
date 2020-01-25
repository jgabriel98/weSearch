import React, { Component } from 'react'
import Slider from 'react-animated-slider';
//import 'react-animated-slider/build/horizontal.css';


import './Slider.css'

import leftArrowIcon from '../images/Seta.png'
import img1 from '../images/Retrato de mulher sorridente.webp'
import img2 from '../images/imagem de mao escrevendo.webp'


export default class CarouselSlider extends Component {

    getSlideItens = () => {
        return ([
            <div className='Slide' key='teste1'
                style={{backgroundColor: '#414141'}}
            >
                <img src={img1} alt="retrato de mulher sorridente" />
            </div>,
            <div className='Slide' key='teste2'
                style={{backgroundColor: '##B48755'}}
            >
                <img src={img2} alt="imagem de mão escrevendo" />
            </div>,
            <div className='Slide' key='teste3'
                style={{backgroundColor: '#557357'}}
            >
                <span>teste3</span>
            </div>
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
                    slide: "slide Slide",
                }}
            >
                {this.getSlideItens()}
            </Slider>)
    }
}