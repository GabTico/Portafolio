import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Calcu from "../../assets/calcu.jpeg";
import Repli from "../../assets/Repli.png";
import Proyecto1 from "../../assets/proyecto1.png";
import Proyecto3 from "../../assets/proyecto3.png";
import Proyecto4 from "../../assets/proyecto 4.jpeg";

export const Proyectos = () => {

  function GithubRedirect(e) {
    e.preventDefault();window.open("https://github.com/GabTico/Calculadora", "_blank");
  };
function GitHubRedirect1(e) {
      e.preventDefault();
      window.open("https://github.com/GabTico/proyecto_bootstrap", '_blank');
  };
function GitHubRedirect2(e) {
      e.preventDefault();
      window.open("https://www.figma.com/file/7Yze6H9BBROdXIqbXSrJok/Marca-personal?node-id=0%3A1&t=U2wvsqLPTrZAgaR2-0", '_blank');
  };
function GitHubRedirect3(e) {
      e.preventDefault();
      window.open("https://www.figma.com/file/23cHYbEvn8cwbAyoULbrCt/Mopkap-de-la-pagina-online?node-id=0%3A1&t=rMGZiQQnrMENKwQX-0", '_blank');
  };
function GitHubRedirect4(e) { 
    e.preventDefault();
    window.open("https://github.com/tatacastro12/wheel-of-dom", '_blank');
  };


  return (
    <div className="cards-generate">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Calcu} />
        <Card.Body>
          <Card.Title>Calculadora </Card.Title>
          <Card.Text>
          
          </Card.Text>
          <Button variant="info" onClick={GithubRedirect}>
            Github
          </Button>
        </Card.Body>

        

      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Repli} />
        <Card.Body>
          <Card.Title>Boostrap5</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button variant="info" onClick={GitHubRedirect1}>
          Github
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Proyecto3} />
        <Card.Body>
          <Card.Title>Marca Personal</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button variant="info" onClick={GitHubRedirect2}>
          Figma
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Proyecto1} />
        <Card.Body>
          <Card.Title>Creando un sitio web para cliente real</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button variant="info" onClick={GitHubRedirect3}>
          Figma
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Proyecto4}/>
        <Card.Body>
          <Card.Title>Wheel of Among Us</Card.Title>
          <Card.Text></Card.Text>
           <Button variant="info" onClick={GitHubRedirect4}>
           Github  
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
