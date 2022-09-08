
import Helloword from './components/HelloWord';
import './App.css';
import Profissao from './components/Profissao';
import Idade from './components/Idade';
import SayMyname  from './components/sayMyName';
import Pessoa from './components/Pessoa';


function App() {
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

   
      
    </div>
  );
}

export default App;
