
import './end.css'
function End(){
    const urlBrowser="https://github.com/Clcada3301/portfolio-shop"
    const onclicks =()=> {
        window.location.assign('https://github.com/Clcada3301/portfolio-shop');
    }
    return(
        <div className='end'>
            <div className='mail'>
            <a href="https://mail.google.com/mail/u/0/#sent?compose=GTvVlcRzDQkLljMJkprCrTbmpkppNVVsgcBgDfQdGpGZdfQKkbdQWlvlwcQFlWNlHVwTjnXKsHlCP">policialvova@gmail.com </a>
            </div>
            <div className='github'>
            <button onClick={()=>{onclicks()}}>GitHub</button>
        </div>
            <div className='info'>
            <p>м.т:0958640000
            Kondratenko Oleksii
            Create by Cicada</p>
             </div>
        </div>
    )
}
export default End;