import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = ({projects, aboutMe}) => {
  
  const scrollTo = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  };

    return (
      <>
      <Navbar className='navigation-bar' expand='lg'>  
      <Container>   
        <Navbar.Brand><img className='logo' src='https://i.imgur.com/FIgS35z.png' alt='Logo'></img></Navbar.Brand>
        <Navbar.Toggle className='ms-auto nav-toggler' aria-controls='basic-navbar-nav' />  
        <Navbar.Collapse className='collapse' id='basic-navbar-nav'>  
          <Nav className='ms-auto nav-link-container text-center'>  
            <Nav.Link className='nav-links' onClick={()=> scrollTo(aboutMe)}>About Me</Nav.Link>  
            <Nav.Link className='nav-links' onClick={()=> scrollTo(projects)}>My Projects</Nav.Link> 
            <Nav.Link className='nav-links' target='_blank' href="https://drive.google.com/file/d/1P-D6EKkWFunjJXKTr_jPKsWSh8DqF3hY/view?usp=share_link">Resume</Nav.Link>  
            <Nav.Link className='nav-links' href="mailto:meghanmwelch@gmail.com">Contact Me</Nav.Link>
            <Nav.Link className='nav-links' target='_blank' href="https://www.linkedin.com/in/meghan-m-welch/">LinkedIn <img className='nav-icon' src='https://www.tebu-bio.com/blog/wp-content/uploads/2018/08/LinkedIn-icon-grey-RGB.png' alt='LinkedIn'></img></Nav.Link>  
            <Nav.Link className='nav-links' target='_blank' href="https://github.com/megwelch">GitHub <img className='nav-icon' src='https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png' alt='GitHub'></img></Nav.Link>
          </Nav>  
        </Navbar.Collapse>  
      </Container>  
    </Navbar> 
    </>
    )
  }
  
  export default Header
