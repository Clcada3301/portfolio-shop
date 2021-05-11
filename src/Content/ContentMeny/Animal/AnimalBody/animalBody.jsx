import HameAnimal from "../MenyAnimal/HomeAnimal/hameAnimal";
import ExzoticCanimal from "../MenyAnimal/HomeAnimal/exzoticAnimal";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "../../Home/home";

function AnimalBody(){

    return(
        <div>
        <BrowserRouter>
                <Route path='/animal/dog' component={HameAnimal} />
                <Route path='/animal/exzotic' component={ExzoticCanimal} />
                <Route/>
                <Route/>

            </BrowserRouter>
        </div>
    )
}
export default AnimalBody;