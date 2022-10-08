import './App.css';
import HelloWorld from './components/HelloWorld'


function App() {
 const nome ="cassio"
const newNOME = nome.toUpperCase()

function cassio(a,b){
  return (a+b)/b
}

const url = "https://via.placeholder.com/150.png/09f/fff"


  return (
    <div className="App">
     <h2> altenarando a jsx </h2>
     <p> bem vindo, {newNOME} </p>
     <p>  soma:{1+5}</p>
     <p>função : {cassio(5,8)}</p>
     <img src={url} alt="minha img" />
     <HelloWorld/> 
    
    </div>
  );
}

export default App;
