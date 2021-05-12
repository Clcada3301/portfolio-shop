
import './home.css'
import korm from './korm.png'
import animal from './amimal.png'
import snaraga from './snaraga.png'
function Home(){
    return(
        <div className='home'>
            <div className='bot'>

                    <div className='welkom'>  <h1 >Welcome to our cozy store</h1></div>
                <div className='texts'> <h4>we have been dealing with animals for over 20 years throughout Europe, our organization
                    <span className='white'> started as a blogging foundation we started helping  endangered species</span> looking for and protecting
                    animals around the world and over time began<span className='white'>  to help people keep animals of different
                    types Our company can offer you for purchase</span> ranging from fish, rats, cats, dogs
                    ending with exotic<span className='white'> animals such as snakes, spider, lynx, cracadily and even tigers
                    Having bought any animal from us, you </span> fucking can and buy food for it houses and <span className='white'>any
                    equipment for your animal Our assortment</span>

                </h4></div>
            </div>
            <div className='infa'>

                 <div className='korm'>
                     <img src={korm} width={500} height={300} />
                 </div>
                <div className='tCorm'>
                    <p>In our assortment there are food for cats, dogs, parrot, gnawing fish
                        all high quality feeds that are created in our own factory are also with us
                        food for exotic animals is available All food is made from natural ingredients
                        without the addition of chemicals and GMOs, our feed has passed all the world's research
                        and are sold in 85 countries of the world in different ZOO stores if you want to know more
                        go to the menu and click on Food or click here
                    </p>
                </div>

                <div className='animal'>
                    <img src={animal} width={500} height={300} />
                </div>
                <div className='tAnimal'>
                    <p>Here you can order any breed of cat, dog, etc.
                        We have our own valieri with raccoons foxes When buying an animal from us, everyone is vaccinated
                        with the necessary vaccinations, you are given a small animal care guide for up to 1 year
                        and also for any questions you can contact us to provide you with a professional
                        consultation to view go to the menu and click on Animal or click here</p>
                </div>

                <div className='snaraga'>
                    <img src={snaraga} width={500} height={300} />
                </div>
                <div className='tSnaraga' >
                    <p>
                        You can buy from us for both pets and service animals
                        things In the assortment there are all fucking sleep for walking for food bathing animal grooming
                        for dressing and for service, armored vests, glasses, hats, etc., to learn more, go to the menu
                        click Toys or click here

                    </p>
                </div>


</div>




        </div>
    )
}
export default Home;