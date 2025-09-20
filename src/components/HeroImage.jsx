import React from 'react';
import landingImage from '../assets/landingpage.jpeg';

const HeroImage = () => {
    return (
        <div className='flex justify-center items-center'>
            <img
                src={landingImage}
                alt='GokhanDrive Landing Page'
            />
        </div>
    );
};

export default HeroImage;