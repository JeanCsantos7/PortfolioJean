import styleFooter from "../styles/Footer.module.css";
import { useState } from "react";
import Instagram from "../assets/instagram.png";
import Whats from "../assets/Whats.png";
import Git from "../assets/github.png";

export default function Footer() {
  const [sobrenome] = useState("< CARLOS />");
  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1500"
        data-aos-mirror="true"
        data-aos-once="false"
        className={styleFooter.Container}
      >
        <h1 className={styleFooter.Logotipo}>
          <span className={styleFooter.Jean}>JEAN</span> <br />{" "}
          <span className={styleFooter.Carlos}>{sobrenome}</span>{" "}
        </h1>

        <div></div>

       

        <div className={styleFooter.ContainerFooter}>
          <a href="https://api.whatsapp.com/send/?phone=5511964699139&text&type=phone_number&app_absent=0" target="_blank">
            <img className={styleFooter.Imagem} src={Whats} alt="" />
          </a>
          <a href="https://github.com/JeanCsantos7" target="_blank">
            <img className={styleFooter.Imagem} src={Git} alt="" />
          </a>
          <a href="https://www.instagram.com/im.jeanc/" target="_blank">
            <img className={styleFooter.Imagem} src={Instagram} alt="" />
          </a>
        </div>

        <p className={styleFooter.Copyright}>
          {" "}
          Jean Carlos - Todos os direitos reservados ©
        </p>
      </div>
    </>
  );
}
