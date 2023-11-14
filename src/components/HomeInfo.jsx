import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'> 
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
        
    </div>
)
const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">Hi, I am <span classname="font-semibold">Saarim Shaikh</span>👋🏻
        <br />
        A Software Engineer from India
        
        </h1>
    ),
    2: (
        <InfoBox
        text="To pursue a career as a software professional by contributing my thoughts and actions to the
        company’s vision and thus achieve self-development by playing a significant role in building the
        organization."
        link="/about"
        btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="Here you can check out the projects i've made using cool tech-stacks"
            link="/projects"
            btnText="View projects"
        />
    ),
    4: (
        <InfoBox 
            text="Need a developer? I'm just a few keystrokes away"
            link="/contact"
            btnText= "Let's talk"
        />
    ),
}


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo