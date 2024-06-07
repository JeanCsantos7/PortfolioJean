

import styleHabilidades from "../styles/Habilidades.module.css"
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import imagemGit from "../assets/git.png"
import imagemHTML from "../assets/html.png"
import imagemCSS from "../assets/css3.png"
import imagemJS from "../assets/script-java.png"
import imagemReact from "../assets/reactjs.png"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function Habilidades(){

     const lista = [
       {
         id: 1,
         imagem: imagemHTML,
         linguagem: "HTML",
         texto:
           "O HTML5 é a quinta versão da linguagem de marcação HTML, usada para estruturar e exibir conteúdo na web. Introduz novas tags e APIs, oferecendo suporte a recursos multimídia, gráficos e interatividade sem a necessidade de plugins. O HTML5 promove uma web mais dinâmica e acessível.",
       },

       {
         id: 2,
         imagem: imagemCSS,
         linguagem: "CSS",
         texto:
           "O CSS3 é a terceira versão das Folhas de Estilo em Cascata (CSS), usadas para estilizar páginas web. Introduz recursos avançados como sombras, gradientes, transições e animações, permitindo designs mais sofisticados e responsivos. O CSS3 facilita a criação de interfaces atraentes e modernas na web.",
       },

       {
         id: 3,
         imagem: imagemJS,
         linguagem: "JAVASCRIPT",
         texto:
           "JavaScript é uma linguagem de programação amplamente utilizada para criar interatividade em páginas web. Ele permite a manipulação dinâmica do conteúdo da página, interações do usuário e comunicação com servidores.",
       },

       {
         id: 4,
         imagem: imagemReact,
         linguagem: "REACT",
         texto:
           "O React é uma biblioteca JavaScript para construir interfaces de usuário interativas em aplicações web. Baseado em componentes reutilizáveis, usa um Virtual DOM para otimizar atualizações de UI. Sua abordagem declarativa simplifica o desenvolvimento, tornando-o eficiente e organizado. É amplamente utilizado e mantido pelo Facebook.",
       },
       {
         id: 5,
         imagem: imagemGit,
         linguagem: "GIT",
         texto:
           "O Git é um sistema de controle de versão distribuído usado para rastrear alterações no código fonte durante o desenvolvimento de software. Ele permite que várias pessoas colaborem em um projeto, mantendo um histórico detalhado das alterações, facilitando o gerenciamento de código, o trabalho em equipe e a reversão de alterações indesejadas.",
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
        
        
        className={styleHabilidades.Container}
         
         
         >
        <h1 className={styleHabilidades.Titulo}>Habilidades</h1>
        <hr className={styleHabilidades.LinhaHabilidades} />

        <Swiper
        
        modules={[Navigation, Pagination, Scrollbar]}
        slidesPerView={1}
        
        navigation
   

        >

        {
            
         lista.map((dado) => {

         return(
           <SwiperSlide key={dado.id}>
              <div className={styleHabilidades.ContainerCard}>
                <img className={styleHabilidades.imagem} src={dado.imagem} alt="" />
                <h1 className={styleHabilidades.linguagem}>{dado.linguagem}</h1>
                <p className={styleHabilidades.informacoes}>{dado.texto}</p>
                
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