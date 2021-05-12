
import ExzoticAanimal from "../MenyAnimal/HomeAnimal/exzoticAnimal";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "../../Home/home";
import HomeAnimal from "../MenyAnimal/HomeAnimal/homeAnimal";
import Many from "../../../../many";
import './animalBody.css'

function AnimalBody(){

    return(
        <div className='animalBody'>
            <div className='route'>
        <BrowserRouter>
                <Route path='/animal/dog' component={HomeAnimal} />
                <Route path='/animal/exzotic' component={ExzoticAanimal} />
                <Route/>
                <Route/>
            </BrowserRouter>
            </div>
            <div className='many'>
            <Many/>

            </div>
        </div>
    )
}
export default AnimalBody;