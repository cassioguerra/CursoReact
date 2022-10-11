import './App.css';
import SayMyName from './components/SayNyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
const nome = "dinamico"


  return (
    <div className="App">

     
      <h1> Proje em andamento </h1>
    <SayMyName nome="cassio guerra" />
    <SayMyName nome="outro" />
    <SayMyName nome={nome} />
    <Pessoa nome="maria" idade="25" profissao="Engenheiro" foto="https://i.ytimg.com/vi/B5lqD6jkTF4/maxresdefault.jpg"/>
 <Frase/>
<List/>
    </div>
  );
}

export default App;
