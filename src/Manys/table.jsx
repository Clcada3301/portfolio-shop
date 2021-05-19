const Table=({sortData,contactData,directionSort})=>{




    return(
        <div>
            <table>
                <thead >
                <th  onClick={()=>{sortData('id')}} >currency</th>
                <th  onClick={()=>{sortData('firstName')}}>bue</th>
                <th onClick={()=>{sortData('lastName')}}>sale</th>
                <th onClick={()=>{sortData('age')}}>currency</th>

                </thead>

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
export  default Table;