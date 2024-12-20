import React, {  } from 'react'
import {Link} from 'react-router-dom'
import home_anime from './../../assets/home_anime.gif'
import Particles from 'react-tsparticles'
import  ParticleConfigs from "../config/particle.configs"
import AboutAnime from "./../../assets/about_anime.gif";
import Typewriter  from "typewriter-effect"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import './Home.css'
const Home = () => {
    // const [showmodal, setshowmodal] = useState(true)

    // const ShowingModal = () =>{
    //     setshowmodal(false)
    
    // }
    
    return (
      <>
        <div className="home-page">
          <Particles className="particle" params={ParticleConfigs}></Particles>

          {/* {showmodal && <Modal ShowingModal={ShowingModal}/>} */}
          <div className="left">
            <div className="home-txt">
              <h1>Hi There , </h1>
              <h1>I'm Prathyu Prasad pk</h1>

              <div className="typewritter-container">
                <p>I am into </p>
                <Typewriter
                  options={{
                    strings: [
                      "frontend development",
                      "backend development",
                      "web designing",
                      "web development",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>

            <Link to="/about" className="btnn btn-shine">
              <span>About Me</span>
              <i class="fas fa-arrow-circle-down"></i>
            </Link>
            <div class="socials">
              <ul class="social-icons">
                <li>
                  <a
                    class="linkedin"
                    aria-label="LinkedIn"
                    href="https://www.linkedin.com/in/prathyu-prasad/"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    class="github"
                    aria-label="GitHub"
                    href="https://github.com/prathyu116"
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    class="twitter"
                    aria-label="Twitter"
                    href="https://www.instagram.com/im.prathyu/"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="splash-img">
            <img className="home_anime" src={AboutAnime} alt="animation-home" />
          </div>
        </div>
      </>
    );
}

export default Home
