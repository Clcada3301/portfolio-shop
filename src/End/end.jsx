
import './end.css'
function End(){
    const urlBrowser="https://github.com/Clcada3301/portfolio-shop"
   const github=()=>{
        const github=urlBrowser
        return(
            github
        )
    }
    return(
        <div className='end'>
            <a href="https://mail.google.com/mail/u/0/#sent?compose=new">policialvova@gmail.com </a>
            <button onClick={()=>{github()}}></button>
            <a href="https://github.com/Clcada3301/portfolio-shop"> GitHub</a>
            <p>м.т:0958646655</p>
            <p>Kondratenko Oleksii</p>
            <p>Create by Cicada</p>
        </div>
    )
}
export default End;