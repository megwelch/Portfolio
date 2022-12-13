import React, { forwardRef } from "react";

const AboutMe = (props, aboutMe) => {
    return (
        <>
        <div  ref={aboutMe} className='section-title d-flex justify-content-center'>
                <img className='section-title-img computer-title-display mt-4 mb-5' src='https://i.imgur.com/TJZMjvy.png' alt='About Me'></img>
                <img className='mobile-display mobile-section-title mb-3' src='https://i.imgur.com/oK79nnh.png' alt='About Me'></img>
        </div>
        <div className='about-me-container'>
            <section>
                <div className='about-me-background'>
                <img className='about-me-img' src='https://i.imgur.com/bfVUDz5.jpg' alt='Meg with Pod'></img>
                </div>
                {/* <img className='about-me-img' src='https://i.imgur.com/bfVUDz5.jpg'></img> */}
            </section>
            <section className='about-me'>
            I'm a dental hygienist turned software engineer. My background in healthcare has provided me with valuable communication skills that will benefit any team environment. When my creative side was left wanting more, I began taking web development courses and never looked back. I truly enjoy building things and the problem-solving that comes with it, and my passion for learning is what drives me. I love combining the worlds of logic and creativity to make eye-catching, accessible, and user-friendly websites. When I'm not coding, I love reading, spending time with my nephews, and cuddling with my corgi, Podrick.
            </section>
        </div>
        </>
    )
}

export default forwardRef(AboutMe)