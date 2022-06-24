import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useRecoilState } from 'recoil'
import { CoinsAtom, StatsAtom } from '../atoms/CoinAtomState';

const useCoinsReducers = () => {
    const [coins,setCoins]= useRecoilState(CoinsAtom);
    const [stats,setstats] =useRecoilState(StatsAtom)
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
      'x-rapidapi-host': process.env.REACT_APPP_CRYPTO_CRYPTO_X_RAPIDAPI_HOST,
      'x-rapidapi-key': process.env.REACT_APPP_CRYPTO_CRYPTO_X_RAPIDAPI_KEY
    }
  };
        axios.get(Url,options).then((res)=>{
            
            setCoins(res.data.data.coins);
 setstats(res.data.data.stats);
        }).catch((err)=>{
            console.log(err)
        })
    },[])
  return coins
   
}

export default useCoinsReducers