import React, { Component } from 'react'
import CarouselSlider from '../components/Slider'
import Searchbar from '../components/Searchbar'

import './Main.css'


class Main extends Component {
    render() {
        return (
            //<CarouselFeed className="CarouselFeed" />
            <div className="MainPageContainer">
                <CarouselSlider className="Slider" />
                <Searchbar />
            </div>

        )
    }
}

export default Main;