import React, { useEffect, useState } from 'react';
import axios from "axios";
import Status from './Status';
import Table1 from './Table';


function CryptoCurrency() {

const [coins,setCoins] = useState()
const [status,setStatus]= useState()
const Url ="https://coinranking1.p.rapidapi.com/coins"

    useEffect(()=>{
      const options = {
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      tiers: '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': '7ea43d8172mshb25220bf45835c9p14354ajsn863a85c24ad5'
    }
  };
        axios.get(Url,options).then((res)=>{
            setCoins(res.data.data.coins);
 setStatus(res.data.data.stats);
        }).catch((err)=>{
            console.log(err)
        })
    },[])
  
   
  return <div className=''>
     
        
         <Status status={status}/>
         <Table1 coins={coins}/>
      </div>;
}

export default CryptoCurrency;
