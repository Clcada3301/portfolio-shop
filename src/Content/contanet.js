import Home from "./ContentMeny/Home/home";
import Food from "./ContentMeny/Food/food";
import {BrowserRouter,Route,Router} from "react-router-dom";
import Animal from "./ContentMeny/Animal/animal";
import Contacts from "./ContentMeny/Contact/contact";
import Toys from "./ContentMeny/Toys/toys";
import './content.css'

function Contanet(){
    return(
        <div className='content'>
            <BrowserRouter>
            <Route path='/home' component={Home}  />
                <Route path='/food' component={Food}  />
                <Route path='/animal' component={Animal}  />
                <Route path='/contact' component={Contacts}  />
                <Route path='/toys' component={Toys}  />
            </BrowserRouter>

        </div>
    )
 }
 export default Contanet;