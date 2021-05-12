import {findAllByDisplayValue} from "@testing-library/react";
import './meny.css'
function Meny(){
    return(
        <div >

            <ul className='meny'>
                <li><a className='a' href="/home">Home</a></li>
                <li><a className='a' href="/animal">Animal</a></li>
                <li><a className='a'>Food</a></li>
                <li><a className='a'  >Toys</a></li>
                <li><a className='a' >Contact</a></li>
            </ul>
        </div>
    )
}
export default Meny;