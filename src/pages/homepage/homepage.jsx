import React from 'react'
import HeroBlocks from '../../components/HeroBlocks/heroBlocks'
import Features from '../../components/Features/features'
import Projects from '../../components/Projects/projects'
import Application from '../../components/Application/application'

function Homepage() {
    return (
        <div>
            <HeroBlocks />
            <Features />
            <Projects />
            <Application />
        </div>
    )
}

export default Homepage