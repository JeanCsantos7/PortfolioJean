import { IoLogoGithub } from "react-icons/io5";
import { LuExternalLink } from "react-icons/lu";

import styleProjetos from "../styles/Projetos.module.css"
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProjetoChurrascaria from "../assets/Churrascaria.png"
import ProjetoLoja from "../assets/Loja.jpeg"
import ProjetoAcademia from "../assets/Academia.jpeg"
import ProjetoRenascy from "../assets/Renascy.png"




export default function Projetos()
{
   const listaProjetos = [
     {
       id: 1,
       titulo: "Projeto Churrascaria",
       info: "Este é um projeto que representa uma churrascaria ficticia, para explorar conceitos os conceitos do react js. Nesse projeto utilizei React, React-Icons, React Router DOM e Swiper",
       imagem: ProjetoChurrascaria,
       link: "https://projeto-churrascaria-kntvcy450-jeancsantos7s-projects.vercel.app/",
       linkGit: "https://github.com/JeanCsantos7/Projeto_Churrascaria"
     },

     {
        id: 2,
        titulo: "Sneakers Goes",
        info: "Este é um projeto que representa uma loja de tênis ficticia, mesclei as habilidades em design e desenvolvimento para elaborar essa aplicação. Nesse projeto utilizei Vite + React Js,  Css Modules,  React Router Dom, Swiper, React Icons",
        imagem: ProjetoLoja,
        link: "https://sneakers-goes-git-versaofinal-jeancsantos7s-projects.vercel.app/",
        linkGit: "https://github.com/JeanCsantos7/Sneakers-Goes"
      },
      {
        id: 3,
        titulo: "Gym Goes",
        info: "Projeto de estudos que representa uma página de uma academia ficticia, visei aplicar novos conhecimentos que adquiri sobre roteamento de páginas e autenticação. Nesse projeto utilizei Vite + React Js,  Css Modules,  React Router Dom,  React Loader Spinner, React Icons ",
        imagem: ProjetoAcademia,
        link: "https://gymprojects77.netlify.app/",
        linkGit: "https://github.com/JeanCsantos7/Projeto-Academia"
      },
      {
        id: 4,
        titulo: "Renascy Harmony",
        info: "Freela pra empresa Renascy Harmony, que é do ramo de produtos naturais e gostaria de um site pra divulgar os produtos. nesse projeto utilizei HTML, CSS e Javascript.",
        imagem: ProjetoRenascy,
        link: "https://renascyharmony.netlify.app/",
        linkGit: "https://github.com/JeanCsantos7/Projeto-Academia"
      },
   ];
     
    return(
        <>
        <div 
         data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1500"
        data-aos-mirror="true"
        data-aos-once="false"  
        
        className={styleProjetos.Container}
        
        >
         <h1 className={styleProjetos.Titulo} >Meus Projetos</h1>
         <hr className={styleProjetos.LinhaProjetos} />

         <Swiper
    
         modules={[Navigation, Scrollbar, Pagination, A11y]}
         slidesPerView={1}
     
         navigation
         

         >

        {
            listaProjetos.map((item) => {
                return(
                   
                    <SwiperSlide   key={item.id}>
                       
                       <div 
                       data-aos="fade-right"
                       data-aos-delay="50"
                       data-aos-duration="1500"
                       data-aos-mirror="true"
                       data-aos-once="false"
                      
                      className={styleProjetos.ContainerCard}
                       >
                  
                   
                    
                       <h1 className={styleProjetos.TituloCard}>{item.titulo}</h1>
                        <p className={styleProjetos.info}>{item.info}</p>
                        <img className={styleProjetos.Imagem} src={item.imagem} alt="" />
                        
                        <span className={styleProjetos.ContainerIcones}>
                        <a className={styleProjetos.Icones} href={item.linkGit}><IoLogoGithub /></a>
                        <a className={styleProjetos.Icones} href={item.link}><LuExternalLink/></a>
                        </span>
                      
                        </div>
                       
                     
                    </SwiperSlide>
                  
                  
                )
            })
        }


         </Swiper>
        </div>
        </>
    )
}