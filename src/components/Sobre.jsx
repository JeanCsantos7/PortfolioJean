
import JeanPhoto from "../assets/JeanPhoto.jfif"
import styleSobreMim from "../styles/SobreMim.module.css"

export default function SobreMim()
{
    return(
        <>
        <div  data-aos="fade-right"  className={styleSobreMim.Container}>
            
          
            <img 
         data-aos="fade-right"
            className={styleSobreMim.Imagem} src={JeanPhoto} alt=""
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-mirror="true"
            data-aos-once="false" 
            
            />
            
            <div 
        data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-mirror="true"
            data-aos-once="false"
            
            >
            <h1 className={styleSobreMim.Titulo}>Sobre Mim</h1>
            <hr className={styleSobreMim.LinhaSobre} />
            <p className={styleSobreMim.Informações}>Meu nome é Jean Carlos, tenho 20 anos, sou um desenvolvedor front-end e Moro em São Paulo. <br />  Sou apaixonado por desafios criativos e pela arte de transformar conceitos em interfaces digitais envolventes. <br />  Estou constantemente buscando aprimorar minhas habilidades e explorar novas tecnologias para me manter atualizado no dinâmico mundo do desenvolvimento web.</p>
            </div>
           
        </div>
        </>
    )
}