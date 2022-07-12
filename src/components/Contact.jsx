import React from "react";
import { faEnvelopeOpen, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <section class="contact-area contact-area-v2 pt-80 pb-125">
      <div class="container-1350">
        <div class="contact-wrapper pt-70 pb-40">
          <div class="row">
            <div class="col-lg-6">
              <div class="text-wrapper mb-40">
                <h2>¡Ten proyectos en mente!</h2>
                <p>
                  On the other hand denounce righteous indigna tion and dislike
                  men who are beguiled and demra charms of pleasure of the
                  moment
                </p>
                <div class="information-style-two d-flex mb-20">
                  <div class="icon">
                    <FontAwesomeIcon icon={faEnvelopeOpen} />
                  </div>
                  <div class="info">
                    <h5 class="blue-dark">Correo</h5>
                    <h4>
                      <a href="mailto:nataliorabasconavarro@gmail.com">
                        nataliorabasconavarro@gmail.com
                      </a>
                    </h4>
                  </div>
                </div>
                <div class="information-style-two d-flex mb-20">
                  <div class="icon">
                    <FontAwesomeIcon icon={faPhoneFlip} />
                  </div>
                  <div class="info">
                    <h5 class="blue-dark">Teléfono</h5>
                    <h4>
                      <a href="tel:+34634775093">+34 634 775 093</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="contact-form mb-40">
                <h2>
                  Consúltanos
                  <br />
                  ¡Di Hola!
                </h2>
                <form>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="form_group">
                        <input
                          type="text"
                          class="form_control"
                          placeholder="Nombre Completo"
                          name="name"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form_group">
                        <input
                          type="email"
                          class="form_control"
                          placeholder="Correo Electrónico"
                          name="email"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form_group">
                        <input
                          type="text"
                          class="form_control"
                          placeholder="Número de Teléfono"
                          name="phone"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form_group">
                        <button class="main-btn arrow-btn">Enviar</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
