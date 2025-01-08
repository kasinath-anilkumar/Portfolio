import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Modal } from "react-bootstrap";
import Spline from "@splinetool/react-spline";
import { Button } from "@mui/material";
import { TextGenerateEffect } from "./TextGenerateEffect"; // Ensure this path is correct
import Parallax from "../components/Parallax";
import ParticleEffect from "./Particles/ParticleEffect ";
import Timeline from "./Timeline";
import ParallaxScrollDemo from "./ParallaxScrollDemo";
import Skills from "./Skills";
import SkillList from './SkillList';
import TracingBeam from "./TracingBeam";
import Projects from "./Projects/Projects";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaRegCopy } from "react-icons/fa";


const Portfolio = () => {
  const [scale, setScale] = useState(1);
  const [isTextLoaded, setIsTextLoaded] = useState(false);


  // Modal
  const [showModal, setShowModal] = useState(false);
  const email = "kasinathanikumar@gmail.com";  // Replace with your actual email

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      toast.success('Email copied to clipboard!', {
        style: {
          backgroundColor: '#333', // Dark background color
          color: '#fff', // White text
        }
      });
    }).catch(() => {
      toast.error('Failed to copy email.', {
        style: {
          backgroundColor: '#333', // Dark background color
          color: '#fff', // White text
        }
      });
    });
  };


  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTextLoaded(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = Math.max(0.5, 1 - scrollY / 1000);
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <style>
        {`
          body {
            background-color: #000;
            margin: 0;
            padding: 0;
            color: white;
            font-family: Arial, sans-serif;
            overflow-x: hidden;
          }

          .navbar {
            background-color: black;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
          }

          .overlay-content {
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white; /* Text color set to white */
            text-align: center;
            z-index: 20; /* Ensure it appears above other elements */
            height: 100%;
            width: 100%;
            padding-top: 4rem;
            transition: filter 0.3s ease-out;
            opacity: 10;
          }

          .hero-head {
            font-size: 1rem;
            margin-bottom: 0.5rem;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            z-index: 21; /* Ensure it appears above the background */
            color: white; /* Text color set to white */
          }

          .hero-main-head {
            font-size: 2.5rem;
            line-height: 3.4rem;
            letter-spacing: 0.2em;
            padding: 2% 10%;
            font-weight: 600;
            z-index: 21; /* Ensure it appears above the background */
            color: white; /* Text color set to white */
          }

          .hero-th-title {
            font-size: 1rem;
            letter-spacing: 0.2em;
            margin-bottom: 2rem;
            z-index: 21; /* Ensure it appears above the background */
            color: white; /* Text color set to white */
          }

          .hero-button {
            width: 8rem;
            margin-top: 1rem;
            text-transform: uppercase;
            z-index: 21; /* Ensure it appears above the background */
            color: white; /* Button text color set to white */
            border: 1px solid white; /* Border color set to white */
          }

          @media (max-width: 700px) {
            .hero-main-head {
              font-size: 1.5rem;
              letter-spacing: normal;
              padding: 5% 10%;
            }

            .hero-head {
              font-size: 0.8rem;
            }

            .hero-th-title {
              font-size: 0.8rem;
            }

            .hero-button {
              width: 7rem;
            }
          }

          .spline-container {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 10; /* Place the spline below the text */
            pointer-events: none; /* Prevent interaction issues */
          }
        `}
      </style>

      {/* Navbar Section */}
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#home" className="text-white mx-3">
                Home
              </Nav.Link>
              <Nav.Link href="#projects" className="text-white mx-3">
                Projects
              </Nav.Link>
              <Nav.Link href="#experience" className="text-white mx-3">
                Experience
              </Nav.Link>
              <Nav.Link href="#skill" className="text-white mx-3">
                Skills
              </Nav.Link>
              <Nav.Link onClick={handleShow} className="text-white mx-3">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Add padding to avoid overlapping content */}
      <div style={{ paddingTop: "56px" }}></div>


      {/* Spline Section */}
      <div
        id="home"
        style={{
          position: "relative",
          width: "100%",
          height: "700px",
          backgroundColor: "#000",
        }}
      >
        {/* Name Overlay */}
        <div
          className="overlay-content text-center"
        >
          <TextGenerateEffect
            words="Hey! I'm excited to share my journey with you"
            className="hero-head"
          />
          <TextGenerateEffect
            words="I'm Kasinath Anilkumar, a passionate MERN Stack Developer from Alappuzha, Kerala."
            className="hero-main-head uppercase"
          />

          <TextGenerateEffect
            words="I specialize in creating dynamic and scalable web applications that drive success."
            className="hero-th-title uppercase"
          />
          <a
            href="/resume.pdf"
            download="Kasinath_Resume.pdf"
            className="p-[3px] relative no-underline"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent hover:shadow-lg">
              Download Resume
            </div>
          </a>



        </div>

        {/* Spline Canvas */}
        <div aria-controls="true" className="spline-container">
          <Spline scene="https://prod.spline.design/Q7cifUx6EUfn9FH7/scene.splinecode" />
        </div>
      </div>
      <Parallax />
      <ParticleEffect />
      <Timeline />
      <ParallaxScrollDemo />
      <Skills />
      <SkillList />



              {/* Modal for showing email and copy button with shadow glow */}
    {/* Modal for showing email and copy button */}
    <Modal show={showModal} onHide={handleClose} centered className="shadow rounded">
        <Modal.Header closeButton>
          <Modal.Title className="!text-purple-900 !text-center uppercase fw-bold">Contact Information</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-between align-items-center">
          <p 
            style={{
              color: '#000000', 
              fontSize: '16px',
              margin: 0, // Remove default margin
            }}
          >
            Email: {email}
          </p>
          <FaRegCopy 
            onClick={handleCopyEmail} 
            style={{
              cursor: 'pointer',
              fontSize: '20px', // Adjust the icon size if needed
              color: '#000000',
              transition: 'color 0.3s ease', // Smooth color change on hover
            }} 
            onMouseEnter={(e) => e.target.style.color = '#888'} // Change color on hover
            onMouseLeave={(e) => e.target.style.color = '#000'} // Reset color when not hovered
          />
        </Modal.Body>
      </Modal>
            {/* Toast container to display toasts */}
            <ToastContainer />
    </>
  );
};

export default Portfolio;
