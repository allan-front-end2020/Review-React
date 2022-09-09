import Itens from "./Itens" 
 
 function List (){
      return (
        <>
          <h2> Minha Lista</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <Itens marca='Renault clio' lancamento={2008}/>
            <Itens marca='Gol' lancamento={2018}/>
            <Itens marca='Kadett' lancamento={2001}/>
          
          </ul>
        </>
      )


 }

export default List