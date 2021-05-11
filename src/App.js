import logo from './logo.svg';
import './App.css';
import Header from "./Header/header";
import Meny from "./Meny/meny";
import Contanet from "./Content/contanet";
import End from "./End/end";

function App() {
  return (
    <div className='App' >
<div className='header'>
    <Header/>
</div>
        <div className='content'>
            <Contanet/>
        </div>
        <div className='end'>
            <End/>
        </div>



    </div>
  );
}

export default App;
