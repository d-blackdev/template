import React from 'react'
import HeroSection from '../../components/HeroSection'
import {homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data'
import Pricing from '../../components/Pricing'
function Home() {
    return (
        <div>
            <HeroSection {...homeObjOne}/>
            <HeroSection {...homeObjThree}/>
            <HeroSection {...homeObjTwo} />
            <Pricing/>
            <HeroSection {...homeObjFour}/>
        </div>
    )
}

export default Home
