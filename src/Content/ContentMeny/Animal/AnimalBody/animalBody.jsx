

import {BrowserRouter, Route} from "react-router-dom";

import Many from "../../../../Manys/many";
import './animalBody.css'
import Dogs from "../MenyAnimal/HomeAnimal/dogs";
import Cat from "../MenyAnimal/HomeAnimal/cat";
import {SliderImg} from "../MenyAnimal/HomeAnimal/sliderImg";

function AnimalBody(){

    return(
        <div className='animalBody'>
            <div className='route'>
                <BrowserRouter>
                <Route path='/animal/dog'   component={()=> <Dogs slides={SliderImg}/>}/>
                <Route path='/animal/exzotic' component={Cat} />
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