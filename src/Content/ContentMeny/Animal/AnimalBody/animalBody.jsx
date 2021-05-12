

import {BrowserRouter, Route} from "react-router-dom";

import Many from "../../../../many";
import './animalBody.css'
import Dogs from "../MenyAnimal/HomeAnimal/dogs";
import Cat from "../MenyAnimal/HomeAnimal/cat";
import {SliderImg} from "../MenyAnimal/HomeAnimal/sliderImg";

function AnimalBody(){

    return(
        <div className='animalBody'>
            <div className='route'>
                <BrowserRouter>
                    <Dogs slides={SliderImg}/>
                <Route path='/animal/dog'   component={Dogs} />
                <Route path='/animal/exzotic' component={Cat} />
                <Route/>
                <Route/>
            </BrowserRouter>
            </div>
            <div className='many'>
            <Many/>
           <p>Єто курс валют</p>
                <p>API з пріватбанка</p>
                <p>моежете сортіровать</p>
                <p>моежете сортіровать</p>
                <p>моежете сортіровать</p>
                <p>моежете сортіровать</p>
            </div>

        </div>
    )
}
export default AnimalBody;