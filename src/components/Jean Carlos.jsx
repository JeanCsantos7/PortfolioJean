import styleJean from "../styles/Jean.module.css";
import { MdDownload } from "react-icons/md";
import Curriculo from "../assets/Jean Carlos Goes dos Santos.docx.pdf"
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import Foto from "../assets/JeanPhoto.jfif";

export default function Jean() {
  return (
    <>
      
      <div data-aos="fade-up" className={styleJean.ContainerRoot}
         data-aos-delay="50"
         data-aos-duration="1500"
         data-aos-mirror="true"
         data-aos-once="false"
      >
      <div className={styleJean.Container}>
       
      <img className={styleJean.FotoMobile} src={Foto} alt="" />
        <h1 className={styleJean.Apresentação}>Olá, Eu sou</h1>

        <h2 className={styleJean.Nome}>Jean Carlos</h2>

        <p className={styleJean.Dev}>Desenvolvedor Front-End</p>

        <span className={styleJean.ContainerIcones}>
         <a  href="https://github.com/JeanCsantos7">  <IoLogoGithub className={styleJean.Icones} /></a>
         <a href="https://www.linkedin.com/in/jean-carlos-goes-6921b619a">  <FaLinkedin className={styleJean.Icones} /></a>
        
      
        </span>

        <a className={styleJean.btnCV} href={Curriculo}  download> <MdDownload className={styleJean.iconeBaixar}/> Download CV</a>
       
       

        <div>
          
        </div>
      </div>

      <img className={styleJean.FotoPC} src={Foto} alt="" />
     

     
      </div>



  
      
   
    </>
  );
}
