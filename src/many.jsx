import korm from "./Content/ContentMeny/Home/korm.png";
import animal from "./Content/ContentMeny/Home/amimal.png";
import snaraga from "./Content/ContentMeny/Home/snaraga.png";
import {useEffect, useState} from "react";
import axios from "axios";
import dog from './Content/ContentMeny/Animal/MenyAnimal/HomeAnimal/dog.json'

function Many(){
    //const urlBrowser ="https://gist.github.com/kastriotadili/acc722c9858189440d964db976303078#file-dog-breeds-data-json"
   const urlBrowser ="https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5" ;
    const [contactData, setContactData] = useState([])
    useEffect(() => {
        axios.get(urlBrowser).then((res) => {
            setContactData(res.data)

        });
    },[])

    return(
        <div>
            <table>
                <thead >
                <th   >валюта</th>
                <th   >Купить</th>
                <th   >Продать</th>
                <th   >Валюта</th>
                </thead >

                <tbody>
                {contactData.map(
                    item => (
                        <tr key={item.id}>
                            <td>{item.ccy}</td>
                            <td>{item.buy}</td>
                            <td>{item.sale}</td>

                            <td>{item.base_ccy}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Many;