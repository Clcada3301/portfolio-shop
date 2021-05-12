// eslint-disable-next-line no-undef


import {SliderImg} from "./sliderImg";
import {useState} from "react";
import {FaAccessibleIcon, FaArrowAltCircleDown, FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/all";
import './dogs.css'

const Dogs=({slides})=>{
    const [count,setCount]=useState(0)
    const lenght =slides.length

    const nextSlide =  ()=>{

        setCount(count===lenght-1?0:count+1)
    };
    const prevSlide = ()=>{

        setCount(count===0? lenght-1:count-1)
    }


    if (!Array.isArray(slides)||slides.length<=0){
    return null
}

return(
    <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow'  onClick={prevSlide}/>
        <FaArrowAltCircleRight className='right-arrow'  onClick={nextSlide} />
        {SliderImg.map((slide,index)=>{
return(
    <div className={index===count?'slide active':"slide"} key={index}>
        {index===count&&( <img src={slide.image} alt="" className='image'/>)}

    </div>
    )



        })}
    </section>
)

}
export default Dogs;