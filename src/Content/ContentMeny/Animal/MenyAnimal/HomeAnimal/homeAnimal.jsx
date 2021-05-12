import {useState} from "react";

function HomeAnimal(){
    const [count,setCount]=useState(['lox',5])
    const [show,setShow]=useState([""])
    const [dolars,setDolar]=useState()

    const countplus=()=>{
        let countplus=count;

    return (
        setShow(countplus)
    )

    }
    const dolar=()=>{
        const dolar=show*25
        return(
            setDolar(dolar)
        )
    }
    return(
        <div>
            <button onClick={()=>{countplus()}}>Buy</button>
            <p>{count}</p>

            <p>{show}</p>
            <button onClick={()=>{dolar()}}>dolar</button>
<p>{dolars}</p>

        </div>
    )
}
export default HomeAnimal;