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
        <h1 className={styleContatos.Titulo}>Entre em Contato</h1>

        <hr className={styleContatos.LinhaContatos} />
        <p className={styleContatos.Informacoes}>
          Entre em contato em uma das minhas redes sociais  <br /> ou preencha o formulário para orçamentos,
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
        
        </div>

        <form >
          <label className={styleContatos.labelItens} htmlFor="">Nome</label>
         <input type="text" placeholder="Seu Nome" required />
         <label className={styleContatos.labelItens} htmlFor="">Email</label>
         <input type="email" placeholder="Seu Email" required  />

         <label className={styleContatos.labelMensagem} htmlFor="">Mensagem</label>
         <input className={styleContatos.inputMensagem} type="text" placeholder="Digite uma mensagem" required  />

         <button className={styleContatos.btnEnviar}>Enviar</button>

        </form>



    
      </div>
      <Footer></Footer>
    </>
  );
}
