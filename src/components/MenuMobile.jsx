import styleHome from "../styles/Home.module.css";
import styleMenu from "../styles/MenuMobile.module.css"

export default function MenuMobile()
{

 
    return(
        <>
           <nav 
             data-aos="fade-right"
             data-aos-delay="50"
             data-aos-duration="1500"
             data-aos-mirror="true"
             data-aos-once="false"  
           
           className={styleMenu.Container}
           >
     

        <div className={styleMenu.ContainerLinks}>
          <a className={styleMenu.Links} href="#Sobre">
            {" "}
            Sobre
          </a>
          <a className={styleMenu.Links} href="#Habilidades">
            {" "}
            Habilidades
          </a>
          <a className={styleMenu.Links} href="#Projetos">
            {" "}
            Projetos
          </a>
          <a className={styleMenu.Links} href="#Contatos">
            {" "}
            Contatos
          </a>


        </div>
      </nav>
        </>
    )
}