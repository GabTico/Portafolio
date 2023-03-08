import React from "react";
import Photoshop from "../../assets/Adobe Photoshop.png";
import InDesing from "../../assets/Asobe Indesing.png";
import Ibis from "../../assets/ibis.png";
import Figma from "../../assets/figma.png";
import CorelDRAW from "../../assets/Corel Draw.png";
import Canva from "../../assets/canva.png";
import HTML from "../../assets/Index.html.png";
import CSS from "../../assets/estilos.css.png";
import JavaScript from "../../assets/javascript.js.png";
import Gaby from "../../assets/Gaby.png";
import BoostrapV5 from "../../assets/boostrap 5.png";
import react from "../../assets/react.png";
import router from "../../assets/router.png";
import reactboostrap from "../../assets/react boostrap.png";
import php from "../../assets/php.png";
import trello from "../../assets/trello.png";
import padlet from "../../assets/padlet.png";
import visual from "../../assets/visual.png";
import git from "../../assets/git.png";
import netlify from "../../assets/netlify.png";
import github from "../../assets/github..png";
import {FcGraduationCap} from "react-icons/fc";
import {GiSkills} from "react-icons/gi";
import {FaLaptopCode} from "react-icons/fa";
import {DiPhotoshop} from "react-icons/di";
import {GiOfficeChair} from "react-icons/gi";



export const About = () => {
  return (
    <div className="About">
      <img className="Gaby" src={Gaby} alt="" />
      <p className="p1">
        <p>
          <p>
            <h2 className="h2">{<FcGraduationCap className="emoticon"/>} MIS ESTUDIOS{<FcGraduationCap className="emoticon" />}</h2> 
            <li className="Li1">
              Bootcamp Full Stack Developer Jr: Programate Academy, Fundación
              Educamás.
            </li>
            Septiembre 2022-por culminar
            <li className="Li2">
              Diseño Gráfico: Edutin Academy-Academia Virtual
            </li>
            <li className="Li3">Nivel de Estudio: Bachillerato</li>
          </p>
        </p>

        <p className="p1">
          <h3 className="h3">{<GiSkills className="habilidad" />}MIS APTITUDES{<GiSkills className="habilidad" />}</h3>
          <li>
            Creativo: Soy una persona con gran espíritu creativo, con mucha
            imaginación para hacer actividades.
          </li>
          <li>
            Analítico: Soy una persona que analizo bien lo
            que estoy haciendo y descubrir lo que tengo que hacer.
          </li>
          <li>Capacidad de aprendizaje y fácil adaptación.</li>
          <li>Empático: Siempre trato de comprender y compartir los sentimientos de los demás para ver las cosas desde la perspectiva del otro en vez de solo la mía.</li>
        </p>

        <h4 className="h4">{<FaLaptopCode className="herramientas1" />}MIS HERRAMIENTAS DE DESARROLLO WEB{<FaLaptopCode className="herramientas1" />}</h4>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>PHP</li>
        <li>Boostrap V5</li>
        <li>React</li>
        <li>React + Boostrap</li>
        <li>ReactRouter</li>
        <li>Git</li>
        <li>GitHud</li>
        <li>GitBush</li>
        <li>Netlify</li>
        <li>Visual Studio Code</li>

        <h5 className="h5"> {<DiPhotoshop  className="mouse"/>} MIS HERRAMIENTAS DE DISEÑO{<DiPhotoshop  className="mouse" />}</h5>
        <li>IbisPaint X</li>
        <li>CorelDraw</li>
        <li>Adobe Photoshop</li>
        <li>Adobe InDesing</li>
        <li>Figma</li>
        <li>Canva</li>

        <h6 className="h6">{<GiOfficeChair className="chair"/>}MIS HERRAMIENTAS INFORMATICAS{<GiOfficeChair className="chair" />}</h6>
        <li>Sistemas operativos:Windows and Linux</li>
        <li>Microsoft Office:Work, Excel, Power Point</li>
        <li>Padlet</li>
        <li>Trello</li>
        <li>Simploline</li>
        <div className="Skills">
          <img className="skills-icon" src={Photoshop} alt="" />
          <img className="skills-icon" src={InDesing} alt="" />
          <img className="skills-icon" src={Ibis} alt="" />
          <img className="skills-icon" src={Figma} alt="" />
          <img className="skills-icon" src={CorelDRAW} alt="" />
          <img className="skills-icon" src={Canva} alt="" />
          <img className="skills-icon" src={HTML} alt="" />
          <img className="skills-icon" src={CSS} alt="" />
          <img className="skills-icon" src={JavaScript} alt="" />
          <img className="skills-icon" src={BoostrapV5} alt="" />
          <img className="skills-icon" src={react} alt="" />
          <img className="skills-icon" src={router} alt="" />
          <img className="skills-icon" src={reactboostrap} alt="" />
          <img className="skills-icon" src={php} alt="" />
          <img className="skills-icon" src={trello} alt="" />
          <img className="skills-icon" src={padlet} alt="" />
          <img className="skills-icon" src={visual} alt="" />
          <img className="skills-icon" src={git} alt="" />
          <img className="skills-icon" src={netlify} alt="" />
          <img className="skills-icon" src={github} alt="" />
        </div>
      </p>
    </div>
  );
};

