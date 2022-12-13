import React, { useState } from "react";

const Intro = () => {
    // const [languagesShow, setLanguagesShow] = useState(false)
    // const [toolsShow, setToolsShow] = useState(false)
    const [text, setText] = useState('Explore my skills')

    const languagesClick = (e) => {
        setText(
            'HTML  |  CSS  |  Javascript'
        )
    }

    const frontEndClick = (e) => {
        setText(
            'React.js  |  Bootstrap  |  Liquid.js'
        )
    }

    const backEndClick = (e) => {
        setText(
            'Node.js  |  Express  |  MongoDB  |  Mongoose  |  PostgreSQL  |  Django  |  Python'
        )
    }

    const toolsClick = (e) => {
        setText(
            'Git  |  GitHub  |  Postman'
        )
    }

     return(
        <>
        <div className='intro-container'>
            <div className='intro-pic-container'>
                <img className='intro-pic' src='https://i.imgur.com/lne9kF5.jpg' alt='Meghan'></img>
            </div>
        </div>
        <div>
            <section className='developer-tabs'>
                <button className='skills-btn' onClick={languagesClick}>Languages</button>
                <button className='skills-btn' onClick={frontEndClick}>Frontend Frameworks</button>
                <button className='skills-btn' onClick={backEndClick}>Backend Frameworks</button>
                <button className='skills-btn' onClick={toolsClick}>Developer Tools</button>
            </section>
            <section className='btn-content align-items-center'>
                    <div>{text}</div>
            </section>
        </div>
        </>
     )
}

export default Intro

