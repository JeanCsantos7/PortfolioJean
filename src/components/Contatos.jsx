import styleContatos from "../styles/Contatos.module.css";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Footer from "./Footer";
import { useState } from "react";

export default function Contatos() {
  const [names, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');




 /*  Função onde estou realizando cadastrando usuarios no banco de dados e consultando se o nome ou email digitado pelo usuário já está cadastrado */


  async function ligacaoBD(e)
  {
    e.preventDefault()

    const queryeName = query(collection(db, 'users'), where('name', '==', names))
    const queryeEmail = query(collection(db, 'users'), where('email', '==', email))
    const pushName =  await getDocs(queryeName)

    const pushEmail = await getDocs(queryeEmail)


      if(!pushName.empty || !pushEmail.empty){
       
  
        alert('Esse nome de usuário já está em uso')
     
       
       

      }

    try{
 
      await addDoc(collection(db, 'users'), {
          name: names,
          email: email,
          mensagem: mensagem
         
      }) 

    
    

    

    }

    catch{
      console.error('Erro ao cadastrar usuários no banco de dados')
    }





  }



  return (
    <>
      <div
       /*  data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1500"
        data-aos-mirror="true"
        data-aos-once="false" */
        className={styleContatos.Container}
      >
        <h1 className={styleContatos.Titulo}>Entre em Contato</h1>

        <hr className={styleContatos.LinhaContatos} />
        <p className={styleContatos.Informacoes}>
          Entre em contato em uma das minhas redes sociais <br /> ou preencha o formulário para orçamentos,
          propostas, etc...
        </p>

        <div
        /*   data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="false" */
          className={styleContatos.ContainerRedes}
        >
        </div>

        <form onSubmit={ligacaoBD}>
          <label className={styleContatos.labelItens} htmlFor="">Nome</label>
          <input value={names} onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Seu Nome" required />
          <label className={styleContatos.labelItens} htmlFor="">Email</label>
          <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Seu Email" required />

          <label className={styleContatos.labelMensagem} htmlFor="">Mensagem</label>
          <input value={mensagem} onChange={(e) => { setMensagem(e.target.value) }} className={styleContatos.inputMensagem} type="text" placeholder="Digite uma mensagem" required />
          <p className={styleContatos.mensagemErro}></p>
          <button className={styleContatos.btnEnviar}>Enviar</button>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
}
