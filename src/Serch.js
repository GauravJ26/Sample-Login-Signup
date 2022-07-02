import React from 'react'
import axios from "axios";
import { useState } from 'react';

function Serch() {

    const [data, setData] = useState([])

    const options = {
        method: 'GET',
        url: 'https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk',
        headers: {
          'X-User-Agent': 'desktop',
          'X-Proxy-Location': 'EU',
          'X-RapidAPI-Key': '89eefcb950mshd9f0f87f0529e06p13b19cjsn3de0da2ecb12',
          'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
        }
      };

      axios.get(options)
  .then((response)=>{

    console.log(response);
    // setData(response.data.articles)
})
  
return (
    <div>Serch


    </div>
  )
}

export default Serch