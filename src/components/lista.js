function Lista ({itens}){
    return(
        <>
          <h3>Lista de Framework</h3>
       

          {itens.length > 0 ?( 
          itens.map((item,index) =>(
            <p hey={index}>{item}</p>
          ))): (
            <p>Não a intems na lista</p>
          )}
          
        </>
    )
}

export default Lista