// import react from 'react'

function Table({list, colNames,width='auto',heigth='auto'}){
    return <div>
        {list.length >0 &&(
            <table cellPadding='0' style={{width:width, heigth:heigth,padding:'5px 10px'}}>
                <thead>
                    <tr>
                        {colNames.map((headerItem, index)=>(
                            <th key={index}>
                                {headerItem}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Object.values(list).map((obj,index) =>
                    (
                        <tr key = {index}>
                            {Object.values(obj).map((value, index2)=>(
                                <td key={index2}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        )}

    </div>
}
export default Table