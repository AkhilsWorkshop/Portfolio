import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particles } from '../data/ParticlesConfig';

const ParticleBackground = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };



    return (
        <div className='h-screen absolute'>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={particles}
            />
        </div>
    )
}

export default ParticleBackground
