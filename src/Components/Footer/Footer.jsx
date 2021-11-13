import React from 'react'
import './Footer.css'

 const Footer = () => {

   return(
    <section className="footer">
        <div className="redes">
            <i className="fab fa-facebook-f fa-2x"></i>
            <i className="fab fa-instagram fa-2x"></i>
            <i className="fab fa-twitter fa-2x"></i>
            <i className="fab fa-pinterest-p fa-2x"></i>
        </div>
        <div className="contacto-info">
            <div className="newsletter">
                <h4><strong>Newsletter:</strong></h4>
                <p>Suscribase a nuestro newsletter</p>
                <div className="email">
                    <input type="email" name="email" id="email" placeholder="Email"/>
                    <button className="btn btn-dark">Enviar</button>
                </div>
            </div>
            <div className="info">
                <h4><strong>Mas informacion:</strong></h4>
                <p>Quienes somos</p>
                <p>Forma de pago</p>
                <p>Preguntas frecuentes</p>
                <p>Contacto</p>
            </div>
            <div className="contacto">
                <h4><strong>Datos de contacto:</strong></h4>
                <p>+54 9 11 12345678</p>
                <p>Direccion 1234, Buenos Aires</p>
                <p>seneca@tienda.com</p>
            </div>
        </div>
        
    </section>

   )}
export default Footer;