import styles from "./Pessoa.module.css" 


 function Pessoa ({foto, nome , idade , profissao}) {
    return(
        <div className={styles.pessoaConteiner}>
      
         <img src={foto} alt='Allan'/>
         <h2 >Nome: {nome}</h2>
         <h2>Idade: {idade}</h2>
         <h3> Profissão: {profissao}</h3>
       
        </div>
    )
    
 }
 export default Pessoa