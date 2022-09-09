
import Helloword from './components/HelloWord';
import './App.css';
import Profissao from './components/Profissao';
import Idade from './components/Idade';
import SayMyname  from './components/sayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento'
import Formualario from './components/Formulario';
import UseState from './components/UseState';
import Condicional from './components/Condicional';
import Lista from './components/lista';


function App() {
 
   const meuItens =['React', 'Vue', 'Angular']


  return (
    <div className="App">
      <Helloword />
      <Helloword />
      <Profissao />
      <Idade />
        <hr/>
      <h1> Uso de Props</h1>  

      <SayMyname name=" Allan Tavares"/>
      <SayMyname name=" Alex Tavares"/>
      <hr/>
      <h1> Uso de Props</h1> 

      <Pessoa 
      foto='https://via.placeholder.com/150'
      nome='Allan tavares'
      idade='32' 
      profissao='Analista de sistema Jr'
     />

       <hr/>
       <h1>Avançando com o props</h1>
       
        <List />
        <hr/>
        
        <h1> onClick - onChange - onSubmit</h1>
       <h3>Onclick</h3>
        <Evento/>
        <hr />

        <h3>OnSubmit</h3>
        <Formualario />

      <hr />
      <h1> UseState</h1>
      <ul>
        <li>O useState um hook do React</li>
        <li>Com ele conseguimos <span>manusear o estado de um componente</span></li>
        <li> Esse HOOK funciona muito bem eventos</li>
        <li>Podemos Trelar um evento a mudança de um state</li>
      </ul>

        <hr />
        <UseState/>

    <hr />
    <h1>renderização Condicional</h1>
    <Condicional />

    <hr />
    <h1>renderização de Listas</h1>
  
   <Lista itens={meuItens} />
   <Lista itens={meuItens} />
      

   
      
    </div>
  );
}

export default App;
