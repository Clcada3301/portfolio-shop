import {BrowserRouter, Link} from "react-router-dom";
import {useState} from "react";
import './menyAnimal.css'
function MenyAnimal(){
const[menyOpen,setMenyOpen]=useState(false)

    const ShowMeny=()=>{

    let ShowMeny=true

if (menyOpen===false) {

return(
        setMenyOpen(ShowMeny)
)
    }else{ return (
        setMenyOpen(false)
)
}
    }


    return(
        <div>
           <div className='button'>
           <p onClick={()=>{ShowMeny()}}>Домашние животные</p>

           </div>
            {menyOpen?(

                <div class="rounded">>

                    <a href="/animal/dog">Dog</a>
                    <a href="/animal/exzotic">Cat</a>
                    <a href="/animal/cat">Bird</a>

                </div>

            ):
                (null)
            }




            <div >
                <p className='button'>Экзотические Животные</p>
            </div>

            <div>
                <p className='button'>Рыбки</p>
            </div>
            <div >
                <p className='button'>Грызуны</p>
            </div>
            <div >
                <a className='button' href='/home'>Back</a>
            </div>



        </div>
    )
}
export default MenyAnimal;