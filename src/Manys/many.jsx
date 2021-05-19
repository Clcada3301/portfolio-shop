
import {useEffect, useState} from "react";
import axios from "axios";
import Table from "./table";


function Many(){

    const [directionSort, setDirectionSort] = useState(true)
    //const urlBrowser ="https://gist.github.com/kastriotadili/acc722c9858189440d964db976303078#file-dog-breeds-data-json"
   const urlBrowser ="https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5" ;
    const [contactData, setContactData] = useState([])
    useEffect(() => {
        axios.get(urlBrowser).then((res) => {
            setContactData(res.data)

        });
    },[])
    const sortData = (field) => {
        const copyData = contactData.concat(); // метод копирует contactData.concat
        let sortData;
        if (directionSort) {
            sortData = copyData.sort(
                (a, b) => {
                    return a[field] > b[field] ? 1 : -1
                }
            )}
        sortData = copyData.reverse(
            (a, b) => {
                return a[field] > b[field] ? 1 : -1
            }
        )

        setContactData(sortData)
        setDirectionSort(!directionSort)
    }
    return(
        <div>

            <Table contactData={contactData}
                   sortData={sortData}
                   directionSort={directionSort}

            />
        </div>
    )
}
export default Many;