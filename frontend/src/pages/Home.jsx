import React from 'react'
import Pricing from '../components/Pricing'
import Feature from '../components/Feature'
import Hero from '../components/Hero'

const Home = () => {
    return (
        <div className="text-slate-200">
            <div id="hero">
                <Hero />
            </div>
            <div id="features">
                <Feature />
            </div>
            <div id="pricing">
                <Pricing />
            </div>
        </div>
    )
}

export default Home