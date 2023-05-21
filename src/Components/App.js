import React,{useState,useEffect} from 'react';
import axios from "axios";
import Table from './Table.js';

const App = ()=>{

    let [data,setData] = useState('');

    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
        .then(res => setData(res.data))
        .catch(err => console.error(err))
    },[])

    return(
        <div >
            <table className="table-container">
                <thead>
                    <tr className="heading">
                        <th>Name</th>
                        <th>Id</th>
                        <th>Image</th>
                        <th>Symbol</th>
                        <th>Current Price</th>
                        <th>Total Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((val)=>(
                            <Table data={val} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default App