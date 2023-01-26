import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma5 mt0' style={{ display: 'flex', justifyContent: 'center' }}>
            <Tilt glareEnable={true} glareMaxOpacity={0.9} glareColor="#ffffff" glarePosition="all" glareBorderRadius="1rem">
                <div className="Tilt-inner"><img className='logo' src={brain} alt="logo"/></div>
            </Tilt>
        </div>
    );
};

export default Logo;