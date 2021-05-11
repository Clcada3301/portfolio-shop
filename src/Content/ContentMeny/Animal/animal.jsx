import './animal.css'
import AnimalBody from "./AnimalBody/animalBody";
import MenyAnimal from "./MenyAnimal/menyAnimal";

function Animal(){
    return(


        <div className='body'>
            <div className='boyA'>
                <AnimalBody/>
            </div>
            <div className='menyA'>
                <MenyAnimal/>
            </div>

        </div>
    )
}
export default Animal;