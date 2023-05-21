import React from 'react';

const Table = ({data})=>{


    return (
        <tr>
            <td>{data.name}</td>
            <td>{data.id}</td>
            <td><img src={data.image} width="20px" alt="Logo" /></td>
            <td>{data.symbol}</td>
            <td>{data.current_price}</td>
            <td>{data.total_volume}</td>
        </tr>
    )
}

export default Table;