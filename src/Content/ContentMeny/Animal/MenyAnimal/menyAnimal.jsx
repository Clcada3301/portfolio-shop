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
           <div>
           <a onClick={()=>{ShowMeny()}}>Домашние животные</a>

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




            <div>
                <a onClick={()=>{ShowMeny()}}>Экзотические Животные</a>
            </div>
            {menyOpen?(

                    <div>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                    </div>

                ):
                (null)
            }
            <div>
                <a >Рыбки</a>
            </div>
            <div>
                <a >Грызуны</a>
            </div>
            <div>
                <a href='/home'>Back</a>
            </div>



        </div>
    )
}
export default MenyAnimal;