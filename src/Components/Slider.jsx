import Fondo from "../assets/fondoproy.jpg"
import Perfil2 from "../assets/Full S.jpg"

export function Slider() {
  return (
    <div className="fondohome" >
     
      <img className="perfil2" src={Perfil2} alt="" />
     
     
     <div>
     <p className="Biografia" >Programador Jr formado en la Fundación Educamás con perfil Full Stack,
  capacitado para brindar apoyo en las diferentes etapas de un proyecto de
  desarrolo web, a través del uso de diversos lenguajes Front y Back End.
  He logrado combinar estos conocimientos con los de diseños gráfico adquiridos
  en ciclos de formación virtual en Edutin Academy permitiendome ser un profesional
  intregral capaz de crear  y resolver de manera eficiente problemas, seguir instrucciones y
  gestionar el tiempo para alcanzar los objetivos deseados.</p>
     </div>
    </div>
    
  );
};

