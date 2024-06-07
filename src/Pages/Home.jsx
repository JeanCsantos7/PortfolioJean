import Jean from "../components/Jean Carlos";
import Habilidades from "../components/Habilidades";
import Projetos from "../components/Projetos";
import Contatos from "../components/Contatos";
import SobreMim from "../components/Sobre";
import styleHome from "../styles/Home.module.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuMobile from "../components/MenuMobile";



export default function Home() {
  const [sobrenome] = useState("< CARLOS />");
  const[menuMobile, setMenuMobile] = useState("")
  const[toggle, setToggle] = useState(false)


  const menuResponsivo = () => {

    setToggle(!toggle)
    setMenuMobile(toggle ? <MenuMobile/> : "")
    

  }

  return (
    <>

      <div className={styleHome.Container}>
      
        

    
     
      <nav>
        <h1 className={styleHome.Logotipo}>
          <span className={styleHome.Jean}>JEAN</span> <br />{" "}
          <span className={styleHome.Carlos}>{sobrenome}</span>{" "}
        </h1>

        <div className={styleHome.ContainerLinks}>
          <a className={styleHome.Links} href="#Sobre">
            {" "}
            Sobre
          </a>
          <a className={styleHome.Links} href="#Habilidades">
            {" "}
            Habilidades
          </a>
          <a className={styleHome.Links} href="#Projetos">
            {" "}
            Projetos
          </a>
          <a className={styleHome.Links} href="#Contatos">
            {" "}
            Contatos
          </a>

          <GiHamburgerMenu className={styleHome.btnMenu} onClick={menuResponsivo}/>

        </div>
      </nav>

      <div>{menuMobile}</div>

      <span id="Jean">
        {" "}
        <Jean></Jean>{" "}
      </span>
      <span id="Sobre">
        {" "}
        <SobreMim></SobreMim>{" "}
      </span>
      <span id="Habilidades">
        {" "}
        <Habilidades></Habilidades>
      </span>
      <span id="Projetos">
        {" "}
        <Projetos></Projetos>
      </span>

      <span id="Contatos">
      <Contatos></Contatos>
      </span>
    
      
    

     
      </div>

    
     
    </>
  );
}
