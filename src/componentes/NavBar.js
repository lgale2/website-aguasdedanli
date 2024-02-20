import { useState, useEffect} from 'react';
import {Navbar, Container, Nav } from 'react-bootstrap';
import Link from 'react-bootstrap/NavLink';
import logo from '../assets/img/add.png';
import navIcon1 from '../assets/img/image.png';
import navIcon2 from '../assets/img/whatsapp.png';




export const NavBar = () =>{

    const [activeLink, setActiveLink] = useState('inicio');
    const [scolled, seScrolled]= useState(false);



    useEffect(()=>{
        const onScroll = () =>{
            if(window.scrollY>50){
                seScrolled(true);
            }
            else{
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return()=> window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value)=>{
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg" class="navbar-light bg-light" className={scolled ? "scrolled": ""}>
      <Container>
        
        <Navbar.Brand className='logobrand' href="#inicio">
            <img src={logo} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio" className={activeLink==='inicio' ? 'active navbar-link' : 'navbar-link' } onClick={()=> onUpdateActiveLink('home')}>Inicio</Nav.Link>
            <Nav.Link href="#historia" className={activeLink==='historia' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('historia')}>Historia</Nav.Link>
            <Nav.Link href="#afiliacion" className={activeLink==='afiliacion' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('afiliacion')}>Afiliacion</Nav.Link>
            <Nav.Link href="#aviso" className={activeLink==='aviso' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('aviso')}>Avisos</Nav.Link>
            <Nav.Link href="#contactenos" className={activeLink==='contactenos' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('contactenos')}>Contactenos</Nav.Link>
         
     



           
            </Nav>

          <span className='navbar-text'>
               <div className='social-icon'>
                    <a href="https://www.facebook.com/profile.php?id=100063747218668"><img src={navIcon1} alt="" /></a>
                    <a href="https://api.whatsapp.com/send/?phone=94203207"><img src={navIcon2} alt="" /></a>
                   
               </div>

              
          </span>
   
        </Navbar.Collapse>


        
      </Container>

      
    </Navbar>

    
  );
}