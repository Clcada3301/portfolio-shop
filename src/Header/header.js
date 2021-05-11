import './header.css';
import Meny from "../Meny/meny";
import fon from './fon.png'


function Header(){
    return(
        <div className='two'>
            <h1 >Shop Animals</h1>
            <Meny/>
        </div>
    )

}
export default Header;