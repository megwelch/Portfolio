import React, { forwardRef } from "react";

const Projects = (props, projects) => {
    return(
        <>
        <div  ref={projects} className='section-title d-flex justify-content-center'>
                <img className='section-title-img mt-5 mb-4 computer-title-display' src='https://i.imgur.com/cYc0fi7.png' alt='My Projects'></img>
                <img className='mobile-display mobile-section-title mb-3' src='https://i.imgur.com/ir4Uksq.png' alt='My Projects'></img>
        </div>
        <div className='project-container'>
            <section className='project-section project-section-bg1'>
                <a target='_blank' rel="noreferrer" href='https://megwelch.github.io/Connect-Corgs/'>
                    <div className='project-img' id='connect-corgs'></div>
                </a>
                <div className='project-description'>
                    <div className='project-title'>Connect-Corgs</div>
                    <div>A play on the classic 'Connect Four' game, featuring my fur-baby, Podrick. Users are able to play to their hearts desire and keep track of their scores.</div>
                    <div className='languages'>HTML | CSS | Javascript</div>
                </div>
            </section>
            <section className='project-section project-section-bg2'>
                <div className='project-description'>
                    <a className='d-flex justify-content-center' target='_blank' rel="noreferrer" href='https://git-input.netlify.app/'>
                        <div className='project-img mobile-display' id='git-input'></div>
                    </a>
                    <div className='project-title'>Git Input</div>
                    <div>A full-stack application designed to allow software engineers to anonymously rate and review their places of work, as well as comment on reviews made by other users. This application was built alongside three other team members.
                    </div>
                    <div className='languages'>React.js | MongoDB | Express.js | CSS | Bootstrap</div>
                </div>
                <a target='_blank' rel="noreferrer" href='https://git-input.netlify.app/'>
                    <div className='project-img project-computer-display' id='git-input'></div>
                </a>
            </section>
            <section className='project-section project-section-bg1'>
                <a target='_blank' rel="noreferrer" href='https://mixies.fly.dev/'>
                    <div className='project-img' id='mixies'></div>
                </a>
                <div className='project-description'>
                    <div className='project-title'>Mixies</div>
                    <div>A full-stack application that allows users to browse and leave reviews on existing cocktails, as well as, create, save, and delete their own cocktail creations.
                    </div>
                    <div className='languages'>Liquid.js | MongoDB | Express.js | CSS | Bootstrap</div>
                    </div>
            </section>
            <section className='project-section project-section-bg2'>
                <a target='_blank' rel="noreferrer" href='https://binge-worthy.netlify.app/'><div className='project-img mobile-display' id='bingeworthy'></div></a>
                <div className='project-description'>
                    <div className='project-title'>Bingeworthy</div>
                    <div>A full-stack application using an external API that allows users to search for and save their favorite tv shows. Users also have the ability to leave reviews on tv
                    shows. 
                    </div>
                    <div className='languages'>React.js | MongoDB | Express.js | CSS | Bootstrap</div>
                </div>
                <a target='_blank' rel="noreferrer" href='https://binge-worthy.netlify.app/'><div className='project-img project-computer-display' id='bingeworthy'></div></a>
            </section>
        </div>
        </>
    )
}

export default forwardRef(Projects)