import React, { useEffect, useState } from 'react';
import axios from "axios";
import Status from './Status';
import Table1 from './Table';
import { CoinsAtom, StatsAtom } from '../atoms/CoinAtomState';
import { useRecoilState } from 'recoil';
import useCoinsReducers from '../hooks/useCoinsReducers';


function CryptoCurrency() {
const coins =useCoinsReducers() ;
    const [stats,setstats] =useRecoilState(StatsAtom)

  
   
  return <div className=''>
     
        
         <Status status={stats}/>
         <Table1 coins={coins}/>
      </div>;
}

export default CryptoCurrency;
