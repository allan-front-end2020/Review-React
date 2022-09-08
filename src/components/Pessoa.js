 function Pessoa ({foto, nome , idade , profissao}) {
    return(
        <>
         <img src={foto} alt='Allan'/>
         <h2>Nome: {nome}</h2>
         <h2>Idade: {idade}</h2>
         <h3> Profissão: {profissao}</h3>
        </>
    )
    
 }
 export default Pessoa