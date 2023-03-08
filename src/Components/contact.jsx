import React from "react";
import Wassap from "../assets/wasssap.png";
import linkedin from "../assets/linkedin.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormLabel } from "react-bootstrap";
import {BsFillPersonFill} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";
import {AiFillMessage} from "react-icons/ai";
import {GoArrowSmallRight} from "react-icons/go";


export const Contact = () => {
  return (
    <div className="Contact">
      <h1>Contact Me</h1>
      <container>
        <a href="https://wa.me/573158067533?text=Hola%21+Muchas+gracias+por+comunicarte%2C+%C2%BFen+qu%C3%A9+puedo+ayudarte%3F">
          <img className="Contact-icon" src={Wassap} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/gabriel-marcano-7894b2265/">
          <img className="Contact-icon" src={linkedin} alt="" />
        </a>
     
      </container>

     

     <Form action="https://formsubmit.co/elgabochan@gmail.com" method="POST" className="Formulario" >

     <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{<BsFillPersonFill/>}</Form.Label>
        <Form.Control type="nombre" name="nombre"/>
      </Form.Group>
      <Form.Text className="text-muted"/>
     

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{<AiOutlineMail/>}</Form.Label>
        <Form.Control type="email" name="Enter email"/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{<AiFillMessage/>}</Form.Label>
        <Form.Control type="comentarios" name="comentarios"/>
      </Form.Group>
      <Form.Text className="text-muted"/>

     
      <Button variant="info" type="submit">
      Sent{<GoArrowSmallRight className="arrow" />}
    <imput type="hidden" name="_next" value="http:LocalHost5174"/>
    <imput type="hidden" name="_captcha" value="true"/>
      </Button>
    </Form>
  
   </div>
  );
};
