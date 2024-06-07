import styleContatos from "../styles/Contatos.module.css";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Footer from "./Footer";

export default function Contatos() {
  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1500"
        data-aos-mirror="true"
        data-aos-once="false"
        className={styleContatos.Container}
      >
        <h1 className={styleContatos.Titulo}>Meus Contatos</h1>

        <hr className={styleContatos.LinhaContatos} />
        <p className={styleContatos.Informacoes}>
          Entre em contato por uma dessas redes sociais <br /> para orçamentos,
          propostas, etc...
        </p>

        <div
         data-aos="fade-right"
         data-aos-delay="50"
         data-aos-duration="1500"
         data-aos-mirror="true"
         data-aos-once="false"
          className={styleContatos.ContainerRedes}
        >
          <span className={styleContatos.circulo}>
            <a className={styleContatos.Redes} href="https://github.com/JeanCsantos7"  target="_blank"> 
              {" "}
              <IoLogoGithub />{" "}
            </a>
          </span>

          <span className={styleContatos.circulo}>
            <a   className={styleContatos.Redes} href="https://www.linkedin.com/in/jean-carlos-goes-6921b619a/" target="_blank">
              {" "}
              <FaLinkedin />{" "}
            </a>
          </span>

          <span className={styleContatos.circulo}>
            <a  className={styleContatos.Redes} href="https://api.whatsapp.com/send/?phone=5511964699139&text&type=phone_number&app_absent=0"  target="_blank">
              {" "}
              <FaWhatsapp />{" "}
            </a>
          </span>

          <span className={styleContatos.circulo}>
            <a  className={styleContatos.Redes} href="https://www.instagram.com/im.jeanc/"  target="_blank" >
              {" "}
              <FaInstagram />{" "}
            </a>
          </span>

        </div>

    
      </div>
      <Footer></Footer>
    </>
  );
}
