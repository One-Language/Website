import React, { useState } from 'react'
import { Link,animateScroll as Scroll } from "react-scroll";
import {Navbar,Nav} from 'react-bootstrap'
import Image from 'next/image';
import popwork from "../../../public/images/popwork0.png";

const AppNav = () => {
    const[navbar,setNavbar]=useState(false)
  const changeNav=()=>{
    if(window.scrollY>=120)
    setNavbar(true);
    else
      setNavbar(false)
  }
//   window.addEventListener('scroll',changeNav);
  return (
    <Navbar expand="lg"  className={navbar?' scroll':''} >
      <div className="logo">
        <h3 onClick={Scroll.scrollToTop}><Image src={popwork} alt=""/></h3>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="nav-drop">
      <Nav className="ml-auto nav-links">
      <Link
        // activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        duration={500}
      >
        Products
      </Link>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        // offset={200}
      >
        Customers
      </Link>
      <Link
        activeClass="active"
        to="porto"
        spy={true}
        smooth={true}
        duration={500}
      >
        Pricing
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
      >
        Manifesto
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
      >
        Blog
      </Link>
      <Link id='login'
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
      >
        Log in
      </Link>
      <Link
        id='tryit'
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
      >
        Try it now
      </Link>
      
      </Nav>
      </Navbar.Collapse>
      {/* <FaBars/> */}
    </Navbar>
  );
}

export default AppNav
